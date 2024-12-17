'use client'

import { CardQuestion } from "@/components/cardQuestion";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useDarkMode } from "@/context/darkMode";
import iconProfile from "@/assets/user.png"
import search from "@/assets/lupaBlack.png"
import iconMore from "@/assets/mais.png";
import searchDark from "@/assets/lupaBlack.png"

const styles = {
    chat: "p-2 mt-6 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full ",
    button: "text-white text-[16px] hover:text-gray-500 mb-3 black pl-4 pr-8 transition easy-in-out dark:bg-slate-200 dark:text-black bg-[#454545] rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2"
}

export default function Home() {

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [topic, setTopic] = useState<string>("");
    const [pag, setPag] = useState<string>("1");
    const { darkMode, setDarkMode } = useDarkMode();
    const [error, setError] = useState<string>("");

    const closeModal = () => {
        setTitle("");
        setText("");
        setTopic("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const pagina = Number(pag)

    const next = () => {
        if (!Number.isInteger(pagina) || pagina < 1) {
            setPag("1")
        }
        else {
            setPag((pagina + 1).toString())
        }
    }

    const prev = () => {

        if (!Number.isInteger(pagina)) {
            setPag("1")
        }

        if (pagina > 1) {
            setPag((pagina - 1).toString())
        }
    }

    const handleConfirm = () => {
        if (title.trim() === "" || text.trim() === "" || topic.trim() === "") {
            setError("All fields must be filled in!");
        } else {
            setError(""); 
            setModal(false); 
        }
    };


    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-36 pl-[300px] flex dark:text-black">
                <div className="w-[97%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white dark:text-black font-bold text-[20px] mb-6">Java project forum</h2>
                        <button onClick={() => openModal()} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img} />
                            New question
                        </button>
                    </div>
                    <hr />
                    <div className="w-full pt-10 flex justify-between">
                        <div className="flex w-[80%]">
                            <div className="flex w-full justify-center items-center">
                                <input type="text" placeholder="Search" className="text-white dark:text-black text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] dark:bg-slate-50 bg-[#242424] border dark:border-gray-700 border-white dark:border-[2px]" />
                                <Image src={!darkMode ? search : searchDark} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search" />
                            </div>
                        </div>
                        <select className="text-white dark:text-black text-[14px] p-1.5 px-4 rounded-2xl w-[20%] dark:bg-slate-50 bg-[#242424] border dark:border-gray-700 border-white dark:border-[2px]">
                            <option value="topic1" hidden>Filter by topic</option>
                            <option value="topic1">Topic 1</option>
                            <option value="topic1">Topic 1</option>
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center  gap-10 mt-16">
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} />
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} />
                    </div>
                    <div className="w-full flex fixed bottom-12 left-[50%] mt-3 gap-3">
                        <button onClick={() => prev()} className={pagina <= 1 ? "text-#3b3b3b font-medium ps-1.5 pe-1.5" : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>{'<'}</button>
                        <input defaultValue={pag} onChange={(e) => setPag(e.target.value)} className="s-1.5 p-2 dark:bg-slate-200 bg-[#494949] w-10 text-center text-white dark:text-black rounded-full font-medium" />
                        <button onClick={() => next()} className=" text-white dark:text-black rounded-sm font-medium ps-1.5 pe-1.5 ">{'>'}</button>
                    </div>
                </div>
            </div>



            {/* Modal */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New question</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                            <input type="text" placeholder="Forum title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                            <label htmlFor="" className="mt-8">Text</label>
                            <input type="text" placeholder="Forum text" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
                            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                            <label htmlFor="" className="mt-8">Topic ID</label>
                            <input type="text" placeholder="Topic id" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={topic} onChange={(e) => { setTopic(e.target.value) }} ></input>
                            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        </form>
                        <div className="flex justify-between mt-10">
                            <button
                                onClick={() => {
                                    closeModal();
                                    handleConfirm();
                                }}
                                className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                            >
                                Cancelar
                            </button>
                            <button onClick={() => setModal(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}