import React from "react";
import octopus from "../public/octopus.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid grid-rows-2 md:grid-cols-2">
      <div className="bg-[#b21860] h-[70%] md:h-screen grid place-items-center">
        <Image src={octopus} className="h-80 w-80" alt="logo"/>
      </div>

      <div className="grid place-items-center">
        {/* login button */}
        <div
          className="flex gap-4 bg-white p-4 px-6 items-center rounded-[6px] cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="text-[30px]" /> SignIn with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
