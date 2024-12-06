import { CardQuestion } from "@/components/cardQuestion";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import iconProfile from "../assets/user.png"
import search from "../assets/lupaBlack.png"
import iconMore from "@/app/assets/mais.png";

const styles = {
    chat: "p-2 mt-6 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full ",
    button: "text-white text-[16px] hover:text-gray-500 black pl-4 pr-8 transition easy-in-out bg-[#454545] rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2"
}

export default function Home() {

    return (
        <div>
            <Menu title={"Ryse"}/>
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
            <div className="pt-[180px] pl-[300px] flex">
                <div className="w-[97%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white font-bold text-[25px] mb-6">Java project forum</h2>
                        <Link href={ROUTES.home} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img}/>
                            New question
                        </Link>
                    </div>
                    <hr/>
                    <div className="w-full pt-10 flex justify-between">
                        <div className="flex w-[80%]">
                            <input type="text" placeholder="Search" className="text-black p-1 pl-4 rounded-[3px] w-full"/>
                            <Image src={search} alt="" className="w-5 h-5 m-2 relative right-8 cursor-pointer" id="search"/>
                        </div>
                        <select className="rounded-[3px] p-1 w-[20%]">
                            <option value="topic1" hidden>Filter by topic</option>
                            <option value="topic1">Topic 1</option>
                            <option value="topic1">Topic 1</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center  gap-10 mt-16">
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0}/>
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0}/>
                    </div>
                </div>
            </div>

        </div>
    );
}