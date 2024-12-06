import { CardForum } from "@/components/cardForum";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import iconProfile from "@/assets/user.png"
import search from "@/assets/lupaBlack.png"

const styles = {
    chat: "p-2 mt-6 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full "
}

export default function Home() {

    return (
        <div>
            <Menu title={"Ryse"}/>
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
            <div className="pt-[180px] pl-[300px] flex">
                <div className="w-[75%]">
                    <h2 className="text-white font-bold text-[25px] mb-6">Forum and Discussions</h2>
                    <hr/>
                    <div className="w-full pt-10 flex justify-between">
                        <div className="flex w-[80%]">
                            <input type="text" placeholder="Search" className="text-black p-1 pl-4 rounded-[3px] w-full"/>
                            <Image src={search} alt="" className="w-5 h-5 m-2 relative right-8 cursor-pointer"/>
                        </div>
                        <select className="rounded-[3px] p-1 w-[20%]">
                            <option value="topic1" hidden>Filter by topic</option>
                            <option value="topic1">Topic 1</option>
                            <option value="topic1">Topic 1</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <CardForum linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0}/>
                        <CardForum linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0}/>
                    </div>
                </div>

                <div className="flex flex-col bg-[#242424] ml-16 w-[18%] h-[70%] p-8 rounded-[10px] border-[#4B4B4B] border-[0.5px] text-white">
                    <h4 className="text-[#595959] font-bold">POPULAR CHAT</h4>
                    <div className="flex flex-col items-center">
                        <Link href={ROUTES.home} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.home} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.home} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.home} className={styles.chat}>Javinha</Link>
                    </div>
                    <button className="mt-8 bg-[#5B5B5B] p-1 rounded-[10px] text-[15px] hover:opacity-80">See more</button>
                </div>
            </div>

        </div>
    );
}