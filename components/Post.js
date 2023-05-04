import React, {useEffect, useState } from "react";
// import { BsChat } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Moment from "react-moment";

import { db } from "../firebase";
import { useRouter } from "next/router";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
// import { BiRepost } from "react-icons/bi";

const Post = ({ id, post }) => {
  // this state is for setting likes
  const [likes, setLikes] = useState([]);

  // this state is to show the user that like is done after clicking the like button where true means like and false means no-like
  const [liked, setLiked] = useState(false);

  // const [comments, setComments] = useState([]);

  const { data: session } = useSession();

  const router = useRouter();

  // const [appContext, setAppContext] = useContext(AppContext);

  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(
  //         collection(db, "posts", id, "comments"),
  //         orderBy("timestamp", "desc")
  //       ),
  //       (snapshot) => setComments(snapshot.docs)
  //     ),
  //   [db, id]
  // );

  // to show the like count
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  // to show the like is done by the one who created the post or not
  useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  // this function is for like the post
  // this function do, once can like the post and after like he can remove his like from the post as well
  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        // who likes the post will be show in the firebase as user id and inside the userid username will be shown
        username: session.user.name,
      });
    }
  };



  return (
    <div
      className="mt-4 border-t border-gray-500 px-4 pt-6 pb-4 cursor-pointer"
      onClick={() => router.push(`/${id}`)}
    >
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div>
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={post?.userImg}
            alt=""
          />
        </div>

        <div>
          <div className="block sm:flex gap-1">
            <h1 className="font-medium">{post?.username}</h1>

            <div className="flex">
              <p className="text-gray-500">@{post?.tag} &nbsp;·&nbsp;</p>
              <p className="text-gray-500">
                {/* to show how long before the post has been created */}
                <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
              </p>
            </div>
          </div>
          <p>{post?.text}</p>
          <img
            className="max-h-[450px] object-cover rounded-[20px] mt-2"
            src={post?.image}
            alt=""
          />

          <div className="flex justify-between text-[20px] mt-4 w-[80%]">
            {/* it means one who is the owner of the post can only delete the post */}
            {session.user.uid == post?.id &&
              <RiDeleteBin5Line
                className="hoverEffect w-7 h-7 p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteDoc(doc(db, "posts", id));
                }}
              />
            }

            {/* Like functionlity */}
            <div
              className="flex gap-1 items-center"
              onClick={(e) => {
                e.stopPropagation();
                likePost();
              }}
            >
              {/* if one like the post then ai fill heart will show and if not or remove the like the ai outline heart will show */}
              {liked ? (
                <AiFillHeart className="hoverEffect w-7 h-7 p-1 text-pink-700" />
              ) : (
                <AiOutlineHeart className="hoverEffect w-7 h-7 p-1" />
              )}
              {/* to show hew many likes are there */}
              {likes.length > 0 && (
                <span className={`${liked && "text-pink-700"} text-sm`}>
                  {likes.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
