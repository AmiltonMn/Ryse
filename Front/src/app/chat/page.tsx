'use client'

import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { MyMsg } from "@/components/myMsg";
import { OtherMsg } from "@/components/otherMsg";
import { GroupChat } from "@/components/groupChat";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDarkMode } from "@/context/darkMode";
import Image from "next/image";
import send from "@/assets/send.png";
import more from "@/assets/mais.png";
import moredark from "@/assets/maisDark.png";
import user from "@/assets/user.png";
import file from "@/assets/file.png";
import ideasCss from "@/app/ideas/ideas.module.css"

export default function Home() {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const closeModal = () => {
        setName("");
        setError("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const handleConfirm = () => {
        if (name.trim() === "") {
            setError("Chat name cannot be empty!");
        } else {
            setError("");
            setModal(false);
        }
    }

    const style = {
        inputz: "rounded-md ps-4 h-10 text-base w-[90%] dark:bg-white bg-[#484848] text-white dark:text-black placeholder-[#999999] hover:opacity-100 opacity-80 focus:opacity-100",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-5 h-5 rounded-t-3xl m-2",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-32 pl-[300px] pr-[3%] flex overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="w-full h-full text-white dark:text-black">
                    <div className="w-full h-full flex justify-center ">
                        <div className="w-[90%] h-[100%] rounded-md flex flex-col ">
                            <div className="flex w-full flex-col">
                                <div className="flex w-full h-12 rounded-t dark:bg-slate-100 bg-[#313131] items-center ">
                                    <div className="w-full h-full flex items-center justify-start pl-4">
                                        <p className="text-[16px] font-semibold z-20 group-hover:animate-pulse">Nome do Chat</p>
                                    </div>
                                </div>
                                <hr className="" />
                            </div>
                            <div className="w-full h-full flex flex-row">
                                <div className="flex flex-col w-[20%] dark:bg-slate-100 bg-[#373737] rounded-l">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center p-3 gap-2 dark:hover:bg-slate-200 hover:bg-[#505050]">
                                            <div className="rounded-[100%] h-2 w-2 bg-[#F41C54]"></div>
                                            <p className="text-[14px] font-medium text-[#F41C54]">Back</p>
                                        </div>
                                        <hr />
                                    </div>

                                    <GroupChat name={"Front"} />
                                    <GroupChat name={"Outra coisa"} />
                                    <button onClick={() => openModal()} className="flex flex-col dark:hover:bg-slate-200 hover:bg-[#505050]" >
                                        <div className="flex flex-row items-center p-3 gap-2">
                                            <Image src={!darkMode ? more : moredark} alt="ícone ideia" className="w-4 h-4 " />
                                            <p className="text-[14px] font-medium">New Chat</p>
                                        </div>
                                    </button>
                                    <hr />
                                </div>
                                <div className="flex flex-col h-full w-[80%]">
                                    <div className={`bg-[#252525] dark:bg-[#e9eef3] w-full h-[600px] flex flex-col overflow-x-auto ${ideasCss.scroll} max-h-[600px] pb-4`}>
                                        <MyMsg date={"10:20 09/12/2024"} message={"oie"} />
                                        <MyMsg date={"10:22 09/12/2024"} message={"Outra mensagem"} />
                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />
                                        <OtherMsg foto={user.src} name={"Joao"} message={"memnsagem do outro"} date={"10:23 09/12/2024"} />
                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />
                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />
                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />
                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />
                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />
                                    </div>
                                    <div className="flex w-full h-20 rounded-r bg-[#313131] dark:bg-slate-100 lex-row justify-center gap-4 items-center p-4">
                                        <button className="rounded-[100%] h-10 w-10 min-w-10 bg-[#2B2B2B] dark:bg-[#F41C54] flex justify-center items-center hover:scale-105">
                                            <Image src={file} alt="ícone ideia" className="w-7 h-7 cursor-pointer" />
                                            <input type="file" className="absolute h-7 w-7 opacity-0 cursor-pointer" />
                                        </button>
                                        <input className={style.inputz} placeholder="Mensagem" />
                                        <button className="rounded-[100%] h-10 w-10 min-w-10 bg-[#2B2B2B] dark:bg-[#F41C54] flex justify-center items-center hover:scale-105">
                                            <Image src={send} alt="ícone ideia" className="w-7 h-7" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal novo chat */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center dark:text-black text-white bg-black bg-opacity-50 z-50" : "disabled z-0 fixed opacity-0"}>
                <div className="bg-zinc-800 dark:bg-slate-100 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New Chat</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input
                                type="text"
                                placeholder="Chat name"
                                className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                        </form>
                        <div className="flex justify-between mt-4">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={handleConfirm} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
