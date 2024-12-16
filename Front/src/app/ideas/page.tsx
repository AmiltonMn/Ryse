"use client"

import { useDarkMode } from "@/context/darkMode";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";

import iconMore from "@/assets/mais.png";
import iconProfile from "@/assets/user.png"
import search from "@/assets/lupa.png"
import searchDark from "@/assets/lupaBlack.png"

import Link from "next/link";
import { useState } from "react";
import { CardIdea } from "@/components/cardIdea";

import ideasCss from "@/app/ideas/ideas.module.css"


const styles = {
    button: "text-white text-[16px] hover:text-gray-500 black pl-4 pr-8 transition easy-in-out bg-[#454545] dark:text-black dark:bg-slate-200 mb-3 rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2"
}

export default function Ideas() {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const closeModal = () => {
        setName("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-[180px] pl-[300px] flex">
                <div className="flex w-[99%]">
                    <input type="text" placeholder="Search" className="text-white dark:text-black text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] dark:bg-slate-50 bg-[#242424] border dark:border-gray-700 border-white dark:border-[2px]" />
                    <Image src={!darkMode ? search : searchDark} alt="" className="w-5 h-5 relative right-8 top-2 cursor-pointer" id="search" />
                </div>
            </div>
            <div className="pt-[70px] pl-[300px] flex">
                <div className="w-[75%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white dark:text-black font-bold text-[20px] mb-3">Ideas</h2>
                        <button onClick={() => openModal()} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img} />
                            Post idea
                        </button>
                    </div>
                    <hr />

                    <div className={`mt-6 rounded-[10px] h-[550px] overflow-x-auto max-h-[550px] ${!darkMode ? ideasCss.scroll : ideasCss.scrollDark}`}>
                        <CardIdea userPhoto={iconProfile.src} username={"Ingrid rocha"} date={"15/01/2005"} title={"AAAAAAAAAAo"} description={"Acho que é uma ideia inovadora"} state={0} />
                        <CardIdea userPhoto={iconProfile.src} username={"Ingrid rocha"} date={"15/01/2005"} title={"AAAAAAAAAAo"} description={"Acho que é uma ideia inovadora"} state={2} />
                        <CardIdea userPhoto={iconProfile.src} username={"Ingrid rocha"} date={"15/01/2005"} title={"AAAAAAAAAAo"} description={"Acho que é uma ideia inovadora"} state={1} />
                    </div>
                </div>

                <div className="flex flex-col dark:text-black dark:bg-slate-100 bg-[#242424] ml-16 w-[18%] h-full p-8 rounded-[10px] dark:border-slate-200 border-[#4B4B4B] border-[0.5px] text-white">
                    <h4 className="text-white dark:text-black font-bold text-[16px]">FILTER IDEAS</h4>
                    <div className="flex flex-col items-center">
                        <button className="border-green-700 dark:border-green-600  p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-green-900 dark:hover:bg-green-600">Approved</button>
                        <button className="border-red-800 dark:border-red-600 p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-red-900 dark:hover:bg-red-600">Disapproved</button>
                        <button className="border-yellow-600 dark:border-yellow-400 p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] dark:hover:bg-yellow-400">Under analysis</button>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 dark:bg-slate-100 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New idea</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                            <input type="text" placeholder="Idea title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-8">Description</label>
                            <input type="text" placeholder="Idea description" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => setModal(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}