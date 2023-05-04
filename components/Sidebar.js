import Image from 'next/image'
import React from 'react'
import octopus from '../public/octopus.png'
import SidebarLink from './SidebarLink'
import {AiFillHome, AiOutlineInbox, AiOutlineUser} from 'react-icons/ai'
import {BiHash} from 'react-icons/bi'
import {BsBell, BsBookmark} from 'react-icons/bs'
import{HiOutlineClipboardList, HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import { signOut, useSession } from 'next-auth/react'
import {GoSignOut} from 'react-icons/go';


const Sidebar = () => {

  const {data:session}=useSession();
  
  return (
    <div className='hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-[#3f3b3b] pr-0 xl:pr-8'>
        <div className='flex items-center justify-center w-14 h-14 hover:scale-110 transition-all ease-out cursor-pointer duration-500 p-0 xl:ml-24'>
            <Image src={octopus} alt='logo'/>
        </div>
        <div className='space-y-0 mt-4 mb-2.5 xl:ml-24'>
            <SidebarLink text='Home' Icon={AiFillHome}/>
            <SidebarLink text='Explore' Icon={BiHash}/>
            <SidebarLink text='Notification' Icon={BsBell}/>
            <SidebarLink text='Message' Icon={AiOutlineInbox}/>
            <SidebarLink text='Bookmark' Icon={BsBookmark}/>
            <SidebarLink text='Lists' Icon={HiOutlineClipboardList}/>
            <SidebarLink text='Profile' Icon={AiOutlineUser}/>
            <SidebarLink text='More' Icon={HiOutlineDotsCircleHorizontal}/>
        </div>
        <button className='hidden xl:inline ml-auto bg-[#72163b] tracking-widest text-white rounded-full w-52 h-[40px] text-lg font-bold hover:bg-[#5e1031]'>Post</button>

        <div className='text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2' onClick={()=>signOut('google')}>
          <img src={session?.user?.image} alt="email image" className='h-10 w-10 rounded-full xl:mr-2.5'/>
          <div className='hidden xl:inline leading-5'>
            <h4 className='font-bold'>{session?.user?.name}</h4>
            <h4 className='text-[#6e767d]'>@{session?.user?.tag}</h4>
          </div>
          <GoSignOut className='hidden xl:inline h-8 ml-8'/>
        </div>
    </div>
  )
}

export default Sidebar