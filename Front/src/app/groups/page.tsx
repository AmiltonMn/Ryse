'use client'

import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardGroup } from "@/components/cardGroup";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import google from "@/assets/user.png";
import more from "@/assets/maisrosa.png";
import search from "@/assets/lupaBlack.png"
import { api } from "@/constants/api";
import { title } from "process";
import { group } from "console";
import { pages } from "next/dist/build/templates/app-page";

interface groupsData {
    groupId: number,
    title: string,
    description: string,
    photo: string 
}

export default function Home() {

    const [groups, setGroupsData] = useState<groupsData[]>([])
    const [limitPage, setLimitPage] = useState<number>(0)

    const handleNewGroup = async () => {
        await api.post("/group",
            {
                "name" : name,
                "description" : description,
                "objective" : goal
            },
            {
                headers: {
                    "Authorization" : localStorage.getItem("token")
                }
            })
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
            .finally(() => setModal(false))
    }

    const handleSearchGroup = async (pag: string, query: string) => {
            api.get(
                `/group?page=${pag}&query=${query}`,
                {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                }
            ).then((res) => {
                console.log(res)
                setGroupsData(res.data.groupsList)
                setHasNext(pag <= res.data.pagesLimit)
            }).catch((e) => {
                console.log("Error to get the data!")
            })
    }

    const [modal, setModal] = useState(false);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [goal, setGoal] = useState<string>("");
    const [pag, setPag ] = useState<string>("1");
    const [query, setQuery] = useState<string>("");
    const [hasNext, setHasNext] = useState<Boolean>(false);


    useEffect(() => {
        handleSearchGroup(pag, query)
    }, [pag, query])


    const pagina = Number(pag)

    const next = () => {
        if (!Number.isInteger(pagina) || pagina < 1) {
            setPag("1")
        } else if (pagina >= limitPage) {
            
        } else {
            setPag((pagina + 1).toString())
        }
    }

    const prev = () => {

        if (!Number.isInteger(pagina)) {
            setPag("1")
        }

        if (pagina > 1) {
            setPag((pagina-1).toString())
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
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"}/>
            <div className="pt-32 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-row items-center">
                        <h2 className="text-[20px] font-semibold">Groups</h2>
                        <button onClick={() => openModal()}>
                            <Image src={more} alt="ícone ideia" className={style.imagen2}/>
                        </button>
                        </div>
                        <div className="flex w-1/3 justify-center items-center">
                            <input type="text" placeholder="Search" value={query} onChange={(e) => {setQuery(e.target.value), handleSearchGroup(pag, query)}} className="text-white text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] bg-[#242424] border border-white" />
                            <Image src={search} alt="" className="w-5 h-5 relative right-7 cursor-pointer" id="search"/>
                        </div>
                    </div>
                    <hr className="mt-4 w-[99%]" />
                    <div className="w-full flex flex-wrap mt-8 gap-6 justify-center">
                        {groups.map((item) => (
                            <CardGroup key={Math.random()} groupId={item.groupId} foto={google.src} name={item.title} description={item.description}></CardGroup>
                        ))}
                    </div>
                    <div className="w-full flex fixed bottom-6 left-[50%] mt-3 gap-3">
                        <button disabled={pagina <= 1} onClick={() => prev()} className={pagina <= 1 ? "bg-[#3b3b3b] text-black rounded-sm font-bold ps-1.5 pe-1.5 " : "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>◀</button>
                        <input disabled value={pag} onChange={(e) => setPag(e.target.value)} className="s-1.5 ppe-1.5 pb-0.5 border-t border-b border-s border-e border-[#3b3b3b] bg-[#242424] w-20 text-center text-white rounded-sm font-bold" />
                        <button disabled={!hasNext} onClick={() => next()} className={hasNext? "bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5" : "bg-[#3b3b3b] text-black rounded-sm font-bold ps-1.5 pe-1.5 "}>▶</button>
                    </div>
                </div>
            </div>

            {/* Modal novo grupo*/}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 fixed opacity-0 "}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New group</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" placeholder="Group name" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={name} onChange={(e) => { setName(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-3">Description</label>
                            <input type="text" placeholder="Description here" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={description} onChange={(e) => { setDescription(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-3">Goals</label>
                            <input type="text" placeholder="Goals here" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={goal} onChange={(e) => { setGoal(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={() => handleNewGroup()}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}