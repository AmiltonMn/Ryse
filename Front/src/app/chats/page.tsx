'use client'

import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardChat } from "@/components/cardChat";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import search2 from "@/assets/lupa.png"

import google from "@/assets/user.png";
import more from "@/assets/maisrosa.png";
import search from "@/assets/lupaBlack.png"


export default function Home() {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");
    const [pag, setPag] = useState<string>("1")


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

    const closeModal = () => {
        setName("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-6 h-6 rounded-t-3xl m-2 hover:scale-110",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-36 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-row items-center">
                            <h2 className="text-[20px] font-semibold">Chats</h2>
                            <button onClick={() => openModal()}>
                                <Image src={more} alt="ícone ideia" className={style.imagen2} />
                            </button>
                        </div>
                        <div className="w-full flex justify-end items-center">
                            <input type="text" placeholder="Search" className="text-black w-4/12 p-1 pl-4 rounded-[3px] " />
                            <Image src={search} alt="" className="w-5 h-5 relative right-7 cursor-pointer" id="search" />
                        </div>
                    </div>
                    <hr className="mt-4" />
                    <div className="w-full flex flex-wrap mt-8 gap-9 justify-center">
                        <CardChat name={"Front"} />
                        <CardChat name={"Back"} />
                        <CardChat name={"Python"} />
                        <CardChat name={"Java"} />
                        <CardChat name={"C"} />
                        <CardChat name={"C#"} />
                        <CardChat name={"C++"} />
                        <CardChat name={"SQL Server e mais texto"} />
                        <CardChat name={"MicroPython, Java Avancado"} />
                        <CardChat name={"Muito texto, enche de texto "} />
                        <CardChat name={"Muitotextoenche de texto "} />
                    </div>
                    <div className="w-full fixed items-center left-1/2 flex bottom-12 gap-3 ">
                        <button onClick={() => prev()} className={pagina <= 1 ? "bg-[#3b3b3b] text-black rounded-sm font-bold ps-1.5 pe-1.5 " : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>◀</button>
                        <input value={pag} onChange={(e) => setPag(e.target.value)} className="ps-1.5 pe-1.5 pb-0.5 border-t border-b border-s border-e border-[#3b3b3b] bg-[#242424] w-20 text-center text-white rounded-sm font-bold" />
                        <button onClick={() => next()} className="bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 ">▶</button>
                    </div>
                </div>
            </div>

            {/* Modal novo topico*/}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New Chat</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" placeholder="Chat name" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={() => setModal(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}