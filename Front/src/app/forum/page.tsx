'use client'

import { CardQuestion } from "@/components/cardQuestion";
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

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [topic, setTopic] = useState<string>("");

    const closeModal = () => {
        setTitle("");
        setText("");
        setTopic("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />
            <div className="pt-[180px] pl-[300px] flex">
                <div className="w-[97%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white font-bold text-[25px] mb-6">Java project forum</h2>
                        <button onClick={() => openModal()} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img} />
                            New question
                        </button>
                    </div>
                    <hr />
                    <div className="w-full pt-10 flex justify-between">
                        <div className="flex w-[80%]">
                            <input type="text" placeholder="Search" className="text-black p-1 pl-4 rounded-[3px] w-full" />
                            <Image src={search} alt="" className="w-5 h-5 m-2 relative right-8 cursor-pointer" id="search" />
                        </div>
                        <select className="rounded-[3px] p-1 w-[20%]">
                            <option value="topic1" hidden>Filter by topic</option>
                            <option value="topic1">Topic 1</option>
                            <option value="topic1">Topic 1</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center  gap-10 mt-16">
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} />
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} />
                    </div>
                </div>
            </div>



            {/* Modal */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New question</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                            <input type="text" placeholder="Forum title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-8">Text</label>
                            <input type="text" placeholder="Forum text" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-8">Topic ID</label>
                            <input type="text" placeholder="Topic id" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={topic} onChange={(e) => { setTopic(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => setModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}