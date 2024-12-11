'use client'

import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { MyMsg } from "@/components/myMsg";
import { OtherMsg } from "@/components/otherMsg";
import { GroupChat } from "@/components/groupChat";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import send from "@/assets/send.png";
import more from "@/assets/mais.png";
import user from "@/assets/user.png";
import file from "@/assets/file.png";


export default function Home() {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");

    const closeModal = () => {
        setName("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const style =
    {
        inputz: "rounded-md ps-4 h-10 text-base w-[90%] bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999] hover:opacity-100 opacity-80 focus:opacity-100",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-5 h-5 rounded-t-3xl m-2",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-32 pl-[300px] pr-[100px] flex">
                <div className="w-full h-full text-white">
                    <div className="w-full h-full flex justify-center ">
                        <div className="w-[90%] h-[100%] rounded-md flex flex-col ">
                            <div className="flex w-full flex-col">
                                <div className="flex w-full h-12 rounded-t bg-[#313131] items-center ">
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        <p className="text-[20px] font-semibold z-20 group-hover:animate-pulse">Nome do Chat</p>
                                    </div>
                                </div>
                                <hr className="" />
                            </div>
                            <div className="w-full h-full flex flex-row">

                                <div className="flex flex-col w-[20%] bg-[#373737] rounded-l">

                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center p-3 gap-2  hover:bg-[#505050]">

                                            <div className=" rounded-[100%] h-3 w-3 bg-[#F41C54]"></div>
                                            <p className="text-[16px] font-medium text-[#F41C54]">Back</p>
                                        </div>
                                        <hr />
                                    </div>

                                    <GroupChat name={"Front"}/>

                                    <button onClick={() => openModal()} className="flex flex-col hover:bg-[#505050]" >
                                        <div className="flex flex-row items-center p-3 gap-2">

                                            <Image src={more} alt="ícone ideia" className="w-4 h-4 " />

                                            <p className="text-[16px] font-medium">New Chat</p>
                                        </div>

                                    </button>
                                    <hr />

                                </div>

                                <div className="flex flex-col h-full w-[80%]">

                                    <div className="bg-[#1C1C1C] w-full h-[600px] flex flex-col overflow-x-auto max-h-[600px] pb-4">

                                        {/* mensagem sua */}
                                        <MyMsg date={"10:20 09/12/2024"} message={"oie"} />

                                        <MyMsg date={"10:22 09/12/2024"} message={"Outra mensagem"} />

                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />




                                        {/* mensagem do outro */}

                                        <OtherMsg foto={user.src} name={"Joao"} message={"memnsagem do outro"} date={"10:23 09/12/2024"} />

                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />
                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />

                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />

                                        <OtherMsg foto={user.src} name={"Maria"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} date={"10:25 09/12/2024"} />

                                        <MyMsg date={"10:26 09/12/2024"} message={"teste de mesagem gigantesca para ver a quebra da linha, ainda maior ha ha ah"} />

                                    </div>

                                    <div className="flex w-full h-20 rounded-r bg-[#313131] flex-row justify-center gap-4 items-center p-4">
                                        <button className="rounded-[100%] h-10 w-10 min-w-10 bg-[#2B2B2B] flex justify-center items-center hover:scale-105">
                                            <Image src={file} alt="ícone ideia" className="w-7 h-7 cursor-pointer" />
                                            <input type="file" className="absolute h-7 w-7 opacity-0 cursor-pointer"/>
                                        </button>
                                        <input className={style.inputz} placeholder="Mensagem" />
                                        <button className="rounded-[100%] h-10 w-10 min-w-10 bg-[#2B2B2B] flex justify-center items-center hover:scale-105">
                                            <Image src={send} alt="ícone ideia" className="w-7 h-7" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal novo chat*/}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 fixed opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New Chat</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" placeholder="Chat name" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={() => setModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}