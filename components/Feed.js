import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import Input from "./Input";
import Post from "./Post";
import { BiLogOutCircle } from "react-icons/bi";
import octopus from "../public/octopus.png";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  console.log(posts);
  return (
    <div className="sm:ml-[81px] xl:ml-[340px] w-[600px] min-h-screen border-r border-[#3f3b3b] text-white py-2">
      <div className="sticky top-0 hidden md:flex justify-between font-medium text-[20px] px-4 py-2 bg-[#262020] z-50 -mt-2 shadow-md">
        Home
        <AiFillHome />
      </div>
      <div className="sticky top-0 flex md:hidden justify-between font-medium text-[20px] px-4 py-2 bg-[#262020] z-50 -mt-2 shadow-md">
        <div className="flex">
          <Image src={octopus} className="h-10 w-10" alt="logo" />
          <span className="inline pt-2 pl-3">OctoWorld</span>
        </div>
        <button onClick={() => signOut("google")}>
          <BiLogOutCircle className="pt-2 h-9 w-9" />
        </button>
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))}
    </div>
  );
};

export default Feed;
