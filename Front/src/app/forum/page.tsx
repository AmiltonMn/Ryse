'use client'

import { CardQuestion } from "@/components/cardQuestion";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "@/constants/api"

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

interface ForumData {
    forum: {
        idForum: number;
        title: string;
        username: string;
        date: string;
        isOwner: boolean;
        questionsCount: number;
    };
    questions: {
        idQuestion: number;
        user: string;
        title: string;
        topic: string;
        date: string;
        isOwner: boolean;
        answersCount: number;
    }[];
}

interface TopicData {
    idTopic: number;
    name: string;
}

export default function Home() {

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [topic, setTopic] = useState<string>("");
    const [newTopic, setNewTopic] = useState<string>("");
    const [pag, setPag] = useState<string>("1");
    const [data, setData] = useState<ForumData>();
    const [topics, setTopics] = useState<TopicData[]>([]);
    const [hasNext, setHasNext] = useState<Boolean>(false);
    let forumId = localStorage.getItem("forum");

    useEffect(() => {
        api.get(
            `/forum/${forumId}?topic=${topic}&page=${pag}`, 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setData(res.data)
            setHasNext(res.data.forum.questionsCount > (parseInt(pag) * 5));
        })
        .catch((e) => {})
    }, [pag, topic])

    useEffect(() => {
        api.get(
            `/forum/topics`, 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setTopics(res.data)
        })
        .catch((e) => {})
    }, [])

    const handleNewQuestion = async () => {
        if(newTopic == "") {
            alert('select a topic')
            return
        }
        await api.post(`/forum/${forumId}/question?`,
            {
                "title": title,
                "text": text,
                "idTopic": parseInt(newTopic)
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((res) => {
                alert("Question sended")
                window.location.reload()   
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => setModal(false))
    }
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
            <div className="mb-10 pt-36 pl-[300px] flex dark:text-black overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="w-[97%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white dark:text-black font-bold text-[20px] mb-6">{data?.forum.title}</h2>
                        <button onClick={() => openModal()} className={styles.button}>
                            <Image src={iconMore} alt="ícone mais" className={styles.img} />
                            New question
                        </button>
                    </div>
                    <hr />
                    <div className="w-full pt-10 flex justify-between">
                        {/* <div className="flex w-[80%]">
                            <input type="text" placeholder="Search" className="text-black p-1 pl-4 rounded-[3px] w-full text-[14px]" />
                            <Image src={search} alt="" className="w-5 h-5 m-2 relative right-8 cursor-pointer" id="search" />
                        </div> */}
                        <select onChange={(e) => setTopic(e.target.value)} className="rounded-[3px] p-1 w-[20%] text-[14px]">
                            <option value="">Filter by topic</option>
                            {topics.map((topic) => (
                                <option key={topic.idTopic} value={topic.idTopic}>{topic.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col justify-center items-center  gap-10 mt-16">
                        {data?.questions.map((item) => (
                            <CardQuestion key={item.idQuestion} idQuestion={item.idQuestion} userPhoto={iconProfile.src} username={item.user} date={item.date} topic={item.topic} question={item.title} answers={item.answersCount} />
                        ))}
                        {/* <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} />
                        <CardQuestion linkQuestion={"/question"} userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2024"} topic={"Frontend"} question={"AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz"} answers={0} /> */}
                    </div>
                     <div className="w-full flex fixed bottom-12 left-[50%] mt-3 gap-3">
                        <button disabled={pagina <= 1} onClick={() => prev()} className={pagina <= 1 ? "text-#3b3b3b font-medium ps-1.5 pe-1.5" : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>{'<'}</button>
                        <input disabled value={pag} onChange={(e) => setPag(e.target.value)} className="s-1.5 p-2 dark:bg-slate-200 bg-[#494949] w-10 text-center text-white dark:text-black rounded-full font-medium" />
                        <button disabled={!hasNext} onClick={() => next()} className={hasNext? " text-white dark:text-black rounded-sm font-medium ps-1.5 pe-1.5 " : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>{'>'}</button>
                    </div>
                </div>
            </div>



            {/* Modal */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New question</h2>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                             <input type="text" placeholder="Forum title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                             {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                             <label htmlFor="" className="mt-8">Text</label>
                             <input type="text" placeholder="Forum text" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
                             {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                            <label htmlFor="" className="mt-8">Topic</label>
                            <select onChange={(e) => setNewTopic(e.target.value)} className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-black">
                                <option value="">Select a topic</option>
                                {topics.map((topic) => (
                                    <option key={topic.idTopic} value={topic.idTopic}>{topic.name}</option>
                                ))}
                            </select>
                            {/* <input type="text" placeholder="Topic id" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-black" value={topic} onChange={(e) => { setTopic(e.target.value) }} ></input> */}
                        </div>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={handleNewQuestion} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}