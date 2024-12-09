import { CardForum } from "@/components/cardForum";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import iconProfile from "@/assets/user.png"
import search from "@/assets/lupaBlack.png"
import iconMore from "@/assets/mais.png";

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
                <div className="w-[75%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white font-bold text-[25px] mb-6">Forum and Discussions</h2>
                        <Link href={ROUTES.home} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img}/>
                            New forum
                        </Link>
                    </div>
                    <hr/>
                    <div className="w-[101.5%] pt-10 flex">
                        <div className="flex w-full justify-center items-center">
                            <input type="text" placeholder="Search" className="text-black p-1.5 pl-4 rounded-[3px] w-[100%]"/>
                            <Image src={search} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10 mt-16">
                        <CardForum linkForum={"/forum"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} title={"Nome do forum"} questions={0}/>
                    </div>
                </div>

                <div className="flex flex-col bg-[#242424] ml-16 w-[18%] h-[70%] p-8 rounded-[10px] border-[#4B4B4B] border-[0.5px] text-white">
                    <h4 className="text-[#595959] font-bold">POPULAR CHAT</h4>
                    <div className="flex flex-col items-center">
                        <Link href={ROUTES.chats} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.chats} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.chats} className={styles.chat}>Javinha</Link>
                        <Link href={ROUTES.chats} className={styles.chat}>Javinha</Link>
                    </div>
                    <Link href={ROUTES.chats} className="mt-8 bg-[#5B5B5B] p-1 rounded-[10px] text-[15px] hover:opacity-80 flex justify-center">See more</Link>
                </div>
            </div>

        </div>
    );
}