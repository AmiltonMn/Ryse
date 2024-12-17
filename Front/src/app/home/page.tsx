'use client'

import { DarkModeProvider } from "@/context/darkMode";
import { useDarkMode } from "@/context/darkMode";
import { CardForum } from "@/components/cardForum";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

import iconProfile from "@/assets/user.png"
import search from "@/assets/lupa.png"
import searchDark from "@/assets/lupaBlack.png"
import iconMore from "@/assets/mais.png";
import iconMoreDark from "@/assets/maisDark.png";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const styles = {
    chat: "p-2 mt-4 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full text-[14px] dark:hover:bg-slate-200 hover:bg-[#383838]",
    button: "text-white dark:text-black text-[16px] hover:text-gray-500 mb-3 black pl-4 pr-8 transition easy-in-out bg-[#454545] dark:bg-slate-200 rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2"
}

interface ForumData {
    idForum: number;
    title: string;
    username: string;
    date: string;
    isOwner: boolean;
    questionsCount: number;
}

interface TopicChatData {
    idTopicChat: number;
    name: string;
}

interface TopicChatData {
    idTopicChat: number;
    name: string;
}

export default function Home() {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");
    const [pag, setPag] = useState<string>("1");
    const { darkMode, setDarkMode } = useDarkMode();
    const [query, setQuery] = useState<string>("");
    const [size, setSize] = useState<number>(5);
    const [data, setData] = useState<ForumData[]>([]);
<<<<<<< HEAD
    const toggleDarkMode = () => setDarkMode(!darkMode);
=======
    const [data2, setData2] = useState<TopicChatData[]>([]);

    const [pag, setPag] = useState<string>("1");
>>>>>>> ea10bc347693ad020762fbd3babaac70a4c7b7a8

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

    const handleNewForum = async () => {
        await api.post("/forum",
            {
                "name": name
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((res) => {
                alert("Forum registered successfully")
                window.location.reload()   
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
            .finally(() => setModal(false))
    }

    useEffect(() => {
        api.get(
            `/forum?query=${query}&size=${size}`, 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            },
        ).then((res) => {
            setData(res.data)
        })

        api.get("/topicChat/1", 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            },
        ).then((res) => {
            console.log(res.data)
            setData2(res.data)
        })
        .catch((e) => {})

        api.get("/topicChat/1", 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            },
        ).then((res) => {
            console.log(res.data)
            setData2(res.data)
        })
    }, [query, size])

    return (

        <DarkModeProvider>

            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-36 pl-[300px] flex overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="w-[75%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white dark:text-black font-bold text-[20px] mb-3">Forum and Discussions</h2>
                        <button onClick={() => openModal()} className={styles.button}>
                            <Image src={darkMode ? iconMore : iconMoreDark} alt="ícone mais" className={styles.img} />
                            New forum
                        </button>
                    </div>
                    <hr />
                    <div className="w-[101.5%] pt-10 flex">
                        <div className="flex w-full justify-center items-center">
                            <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} className="text-white dark:text-black text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] dark:bg-slate-50 bg-[#242424] border dark:border-gray-700 border-white dark:border-[2px]" />
                            <Image src={!darkMode ? search : searchDark} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-10 mt-12">
                        {data.map((item) => (
                            <CardForum key={item.idForum} forumId={item.idForum} userPhoto={iconProfile.src} username={item.username} date={item.date} title={item.title} questions={item.questionsCount} />
                        ))}
                        <button onClick={() => setSize(size + 5)} className="mt-8 bg-[#5B5B5B] p-2 rounded-[10px] text-[12px] hover:opacity-80 flex justify-center">See more</button>
                        {/* <CardForum linkForum={"/forum"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} title={"Nome do forum"} questions={0} /> */}
                        {/* <CardForum linkForum={"/forum"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} title={"Nome do forum"} questions={0} /> */}
                    </div>
                </div>

                <div className="flex flex-col dark:bg-slate-100 bg-[#242424] ml-16 w-[18%] h-[70%] p-8 rounded-[10px] dark:border-gray-200 border-[#4B4B4B] border-[0.5px] dark:text-black text-white">
                    <h4 className="text-[#595959] font-bold text-[16px]">POPULAR CHAT</h4>
                    <div className="flex flex-col items-center">
                        {data2.map((item) =>(
                            <Link href={ROUTES.chats} key={item.idTopicChat} className={styles.chat}>{item.name}</Link>
                        ))}
                    </div>
                    <Link href={ROUTES.chats} className="mt-8 dark:bg-gray-300 bg-[#5B5B5B] p-1 rounded-[10px] text-[12px] hover:opacity-80 flex justify-center">See more</Link>

                    <div className="w-full flex fixed bottom-12 left-[50%] mt-3 gap-3">
                        <button onClick={() => prev()} className={pagina <= 1 ? "text-#3b3b3b font-medium ps-1.5 pe-1.5" : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>{'<'}</button>
                        <input defaultValue={pag} onChange={(e) => setPag(e.target.value)} className="s-1.5 p-2 dark:bg-slate-200 bg-[#494949] w-10 text-center text-white dark:text-black rounded-full font-medium" />
                        <button onClick={() => next()} className=" text-white dark:text-black rounded-sm font-medium ps-1.5 pe-1.5 ">{'>'}</button>
                    </div>

                </div>
            </div>

            {/* Modal novo fórum*/}
            <div className={modal ? "fixed inset-0 flex items-center justify-center dark:text-black text-white bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New forum</h2>
                        <form className="flex flex-col">
                            <label className="mt-8">Name</label>
                            <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-black" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => handleNewForum()} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </DarkModeProvider>
    );
}