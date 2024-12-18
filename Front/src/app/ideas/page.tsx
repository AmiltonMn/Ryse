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
import { useEffect, useState } from "react";
import { CardIdea } from "@/components/cardIdea";

import ideasCss from "@/app/ideas/ideas.module.css"

import { api } from "@/constants/api"

import heart from "@/assets/coracao.png"
import heartLike from "@/assets/coracaoRosa.png"
import amei from "@/assets/like.png"
import like from "@/assets/joinha.png"
import wlike from "@/assets/joinhacheio.png"
import dislike from "@/assets/dislike.png"
import wdislike from "@/assets/dislikecheio.png"
import lampadaVermelha from "@/assets/lampadaVermelha.png"
import lampadaAmarela from "@/assets/lampadaAmarela.png"
import lampadaVerde from "@/assets/lampadaVerde.png"
import pontos from "@/assets/pontos.png"


const styles = {
    button: "text-white text-[16px] hover:text-gray-500 black pl-4 pr-8 transition easy-in-out bg-[#454545] dark:text-black dark:bg-slate-200 mb-3 rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2"
}

interface IIdea {
    idIdea: number,
    userPhoto: string,
    username: string,
    title: string,
    text: string,
    date: string,
    status: number,
    likes: number,
    liked: boolean
}

export default function Ideas() {

    const [dataIdeas, setDataIdeas] = useState<IIdea[]>([]);
    const [status, setStatus] = useState<number>(3);
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [idIdea, setIdIdea] = useState<number>();
    const [liked, setLiked] = useState<boolean>(false);
<<<<<<< HEAD
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);
=======
    const [options, setOptions] = useState(false);
    const [love, setLove] = useState(false)
    const [gostei, setGostei] = useState(false)
    const [odiei, setOdiei] = useState(false)
    const [isInstructor, setIsInstructor] = useState<boolean>(false);

    const userState = localStorage.getItem("userState");
    console.log(userState);

    

    const show = () => {
        setOptions(!options)
    }

    const likedAnswer = () => {
        if (odiei) {
            setOdiei(false)
        }
        setGostei(!gostei)
    }

    const disliked = () => {
        if (gostei) {
            setGostei(false)
        }
        setOdiei(!odiei)
    }
>>>>>>> instructor-features

    const closeModal = () => {
        setTitle("");
        setText("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const fetchIdeas = async (status: number, query: string) => {

        api.get(`http://localhost:8080/idea?status=${status}&query=${query}`,
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setDataIdeas(res.data)
        })
            .catch((e) => { })
        console.log(dataIdeas)
    }

    const handleNewIdea = async () => {
        await api.post("/idea",
            {
                "title": title,
                "text": text
            },
            {
                headers: {
                    'Authorization': localStorage.getItem("token")
                },
            })
            .then((res) => {
                alert("Idea created with sucess")
                window.location.reload()
            })
            .catch((e) => {
                console.log(localStorage.getItem("token"))
                alert(e.response.data.message)
            })
            .finally(() => setModal(false))
    }

    const newLikeIdea = async (idIdea: number) => {
        await api.post("/idea/like",
            {
                "idIdea": idIdea
            },
            {
                headers: {
                    'Authorization': localStorage.getItem("token")
                },
            })
            .then((res) => {
                setLiked(true);
                window.location.reload()
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
            .finally(() => setIdIdea(0))
    }

    const updateState = async (idIdea: number, status: number) => {
    
        await api.put("/idea",
            {
                "idIdea": idIdea,
                "status": status
            },
            {
                headers: {
                    'Authorization': localStorage.getItem("token")
                }
            })
            .then((res) => {
                window.location.reload()
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
            .finally(() => {
                setIdIdea(0);
                setStatus(3);
            })
    }

    useEffect(() => {
        fetchIdeas(status, query);

        if (userState && userState.toLowerCase() === "instructor") {
            setIsInstructor(true);
        }
    }, [status, query, liked, userState]);

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-[180px] pl-[300px] flex overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="flex w-[99%]">
                    <input type="text" placeholder="Search idea" className="text-black p-1 pl-4 rounded-[3px] w-full text-[14px]" />
                    <Image src={search} alt="" className="w-5 h-5 m-2 relative right-8 cursor-pointer" id="search" />
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
                        {dataIdeas.map((item, key) => {
                            return (
                                // <CardIdea userPhoto={""} username={item.username} date={item.date} title={item.title} description={item.text} state={item.status} key={item.idIdea} likes={item.likes} liked={item.liked}/>
                                
                                <div className="bg-[#242424] rounded-[10px] w-full text-white ">
                                    <div className="flex justify-between p-4">
                                        <div className="flex justify-center items-center">
                                            <Image src={`https://res.cloudinary.com/dxunnhglr/image/upload/${item.userPhoto}`} alt="ícone notificação" className="w-7 h-7 rounded-t-3xl m-2 mr-4" width={1000} height={1000} unoptimized />
                                            <h4 className="text-[14px]">{item.username}</h4>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-[12px] p-4">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="pl-8 pt-4 text-[14px] flex justify-between pb-8 w-full">
                                            <div className="flex gap-8">
                                                <Image src={item.status == 0 ? lampadaAmarela : item.status == 1 ? lampadaVerde : lampadaVermelha} alt="lampada" className="w-12" />
                                                <div className="">
                                                    <h4 className="text-[16px] mb-2">{item.title}</h4>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                            {isInstructor ?
                                                <div className="flex items-center">
                                                    <button onClick={() => {updateState(item.idIdea, 2), disliked()}} className="">
                                                        {
                                                            item.status == 2 ?
                                                                <Image src={wdislike.src} alt="dislike" className="w-5 h-5 m-2 transform scale-x-[-1]" width={1000} height={1000} />
                                                                :
                                                                <Image src={dislike.src} alt="dislike" className="w-5 h-5 m-2 transform scale-x-[-1]" width={1000} height={1000} />
                                                        }
                                                    </button>
                                                    <div className="flex items-center">
                                                    <button onClick={() => {newLikeIdea(item.idIdea), updateState(item.idIdea, 1), likedAnswer()}} className="pr-6">
                                                        {
                                                            item.status == 1 ?
                                                                <Image src={amei.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                                                :
                                                                <Image src={heart.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                                            }
                                                    </button>
                                                    <p className="pr-12">{item.likes}</p>
                                                </div>
                                                </div>
                                                :
                                                <div className="flex items-center">
                                                    <button onClick={() => {newLikeIdea(item.idIdea), updateState(item.idIdea, 1), likedAnswer()}} className="pr-6">
                                                        {
                                                            item.status == 1 ?
                                                                <Image src={amei.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                                                :
                                                                <Image src={heart.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                                            }
                                                    </button>
                                                    <p className="pr-12">{item.likes}</p>
                                                </div>
                                            
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="flex flex-col dark:text-black dark:bg-slate-100 bg-[#242424] ml-16 w-[18%] h-full p-8 rounded-[10px] dark:border-slate-200 border-[#4B4B4B] border-[0.5px] text-white">
                    <h4 className="text-white dark:text-black font-bold text-[16px]">FILTER IDEAS</h4>
                    <div className="flex flex-col items-center">
                        <button className="p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-green-900" onClick={() => setStatus(3)}>All</button>
                        <button className="border-green-700 p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-green-900" onClick={() => setStatus(1)}>Approved</button>
                        <button className="border-red-800 p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-red-900" onClick={() => setStatus(2)}>Disapproved</button>
                        <button className="border-yellow-600 p-2 mt-8 rounded-[10px] border-[2px] w-full text-[14px] hover:bg-yellow-700" onClick={() => setStatus(0)}>Under analysis</button>
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
                            <input type="text" placeholder="Idea title" className="text-black border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-8">Text</label>
                            <input type="text" placeholder="Idea text" className="text-black border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => handleNewIdea()} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}