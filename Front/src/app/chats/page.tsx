'use client'

import { DarkModeProvider } from "@/context/darkMode";
import { useDarkMode } from "@/context/darkMode";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardChat } from "@/components/cardChat";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import search2 from "@/assets/lupa.png"

import { api } from "@/constants/api";

import google from "@/assets/user.png";
import more from "@/assets/maisrosa.png";
import searchBlack from "@/assets/lupaBlack.png"
import search from "@/assets/lupa.png"
import searchDark from "@/assets/lupaBlack.png"

interface TopicData {
    name: string;
    date: string;
    idUser: number;
}

export default function Home() {

    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [page, setPage] = useState<string>("1")
    const [size, setSize] = useState<number>(5);
    const [data, setData] = useState<TopicData[]>([]);

    const pagina = Number(page)
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);


    const next = () => {
        if (!Number.isInteger(pagina) || pagina < 1) {
            setPage("1")
        }
        else {
            setPage((pagina + 1).toString())
        }
    }

    const prev = () => {

        if (!Number.isInteger(pagina)) {
            setPage("1")
        }

        if (pagina > 1) {
            setPage((pagina - 1).toString())
        }
    }

    const closeModal = () => {
        setName("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const handleNewTopic = async () => {
            await api.post("/topic",
                {
                    "name": name
                },
                {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                })
                .then((res) => {
                    alert("Topico cadastrado com sucesso")
                    window.location.reload()   
                })
                .catch((e) => {
                    alert(e.response.data.message)
                })
                .finally(() => setModal(false))
        }

        useEffect(() => {
                api.get(
                    `/topic?page=${page}&size=${size}`, 
                    {
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        }
                    }
                ).then((res) => {
                    console.log(res)
                    setData(res.data)
                })
                .catch((e) => {})
            }, [page, size])

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-6 h-6 rounded-t-3xl m-2 hover:scale-110",
    }

    return (

        <DarkModeProvider>
            <div>
                <Menu title={"Ryse"} />
                <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
                <div className="pt-36 pl-[300px] pr-[100px] flex">
                    <div className="w-full text-white dark:text-black">
                        <div className="w-full flex justify-between">
                            <div className="flex flex-row items-center">
                                <h2 className="text-[20px] font-semibold">Chats</h2>
                                <button onClick={() => openModal()}>
                                    <Image src={more} alt="ícone ideia" className={style.imagen2} />
                                </button>
                            </div>
                            <div className="w-1/3 flex justify-end items-center">
                                <input type="text" placeholder="Search" className="text-white dark:text-black text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] dark:bg-slate-50 bg-[#242424] border dark:border-gray-700 border-white dark:border-[2px]" />
                                <Image src={!darkMode ? search : searchDark} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search" />
                            </div>
                        </div>
                        <hr className="mt-4" />
                        <div className="w-full flex flex-wrap mt-8 gap-9 justify-center">
                            {data.map((item) => (
                                <CardChat name={item.name}/>
                            ))}
                        </div>
                        <div className="w-full fixed items-center left-1/2 flex bottom-12 gap-3 ">
                            <button onClick={() => prev()} className={pagina <= 1 ? "text-#3b3b3b font-medium ps-1.5 pe-1.5" : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>{'<'}</button>
                            <input defaultValue={page} onChange={(e) => setPage(e.target.value)} className="s-1.5 p-2 dark:bg-slate-200 bg-[#494949] w-10 text-center text-white dark:text-black rounded-full font-medium" />
                            <button onClick={() => next()} className=" text-white dark:text-black rounded-sm font-medium ps-1.5 pe-1.5 ">{'>'}</button>
                        </div>
                    </div>
                </div>

                {/* Modal novo topico*/}
                <div className={modal ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                    <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
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
        </DarkModeProvider>
    );
}