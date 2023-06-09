import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile, BsImage } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiBarChart2Line } from "react-icons/ri";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const Input = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const { data: session } = useSession();

  const addImageToPost = (e) => {
    // this function will allow us to see the selected file
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  // to add the content of post in to the firebase and saved it there
  const sendPost = async () => {
    if (loading) return;

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }
    // after a post we need to reset the text field othewise the options will not visible
    setLoading(false);
    setInput("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  // to add emoji function
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div>
          <img
            src={session?.user?.image}
            alt="user image"
            className="h-12 w-12 rounded-full object-contain"
          />
        </div>

        <div className="w-[90%]">
          <textarea
            className="w-[100%] bg-transparent outline-none text-[20px]"
            rows="2"
            placeholder="What's Happening"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {selectedFile && (
            <div className="relative mb-4">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <AiOutlineClose className="text-white h-5" />
              </div>

              <img
                src={selectedFile}
                alt="selected image"
                className="rounded-2xl max-h-80 object-contain"
              />
            </div>
          )}

          {!loading && (
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-[20px] text-[#9b1a4e]">
                <label htmlFor="file">
                  <BsImage className="cursor-pointer" />
                </label>
                <input type="file" id="file" hidden onChange={addImageToPost} />

                <div className="border-[#9b1a4e] border rounded h-[18px] text-[16px] grid place-items-center">
                  <AiOutlineGif />
                </div>

                <RiBarChart2Line className="rotate-90" />
                <BsEmojiSmile
                  className="cursor-pointer"
                  onClick={() => setShowEmojis(!showEmojis)}
                />
                <IoCalendarNumberOutline />
                <HiOutlineLocationMarker />
              </div>

              <button
                className="bg-[#72163b] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#5e1031] disabled:hover:bg-[#72163b] disabled:opacity-50 disabled:cursor-default"
                disabled={!input.trim() && !selectedFile}
                onClick={sendPost}
              >
                Post
              </button>
            </div>
          )}

          {/* to show emojis and to select emoji */}
          {showEmojis && (
            <div className="absolute mt-[10px] -ml-[40px] max-w-[320px] rounded-[20px]">
              <Picker onEmojiSelect={addEmoji} data={data} theme="dark" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
