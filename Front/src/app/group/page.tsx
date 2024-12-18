'use client'

import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { TeamList } from "@/components/teamList";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import trash from "@/assets/trash.png";
import more from "@/assets/maisrosa.png";
import user from "@/assets/user.png";
import { api } from "@/constants/api";

interface GroupData {
    name: string,
    description: string,
    objective: string,
    isOwner: boolean
}

interface UserData {
    userId: number;
    userName: string;
    name: string;
    Photo: string | null;
    userState: string;
}


export default function Home() {

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [idUser, setIdUser] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [feed, setFeed] = useState<string>("");
    const [modalfeedback, setModalfeedback] = useState(false);
    const [group, setGroup] = useState<GroupData>();
    const [userData, setUserData] = useState<UserData[]>([]);

    let groupId = localStorage.getItem("group");

    useEffect(() => {
        api.get(
            `/group/${groupId}`, 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            setGroup(res.data)
        })
        .catch((e) => {})
    }, [])

    useEffect(() => {
        api.get(
            `/group/${groupId}/users`, 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            console.log(res.data)
            setUserData(res.data.users)
        })
        .catch((e) => {})
    }, [])

    const addUser = (idUser: number) => {
        api.post(
            `/group/user`, 
            {
                "idUser": idUser,
                "idGroup": groupId
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            alert('foi')
        })
        .catch((e) => {})
        .finally(() => setModal2(false))
    }

    const sendFeedback = () => {

        api.post(
            `/feedback`, 
            {
                "idUserReceiver": idUser,
                "idGroup": groupId,
                "text": feed,
                "privacity": false
            },
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            }
        ).then((res) => {
            alert('feedback enviado!')
        })
        .catch((e) => {})
        .finally(() => setModalfeedback(false))
    }

    const closeModal = () => {
        setName("");
        setModal(false);
    }

    const openModal = () => {
        setModal(true);

    }

    const closeModal2 = () => {
        setModal2(false);
    }

    const openModal2 = () => {
        setModal2(true);
    }

    const closeModalfeedback = () => {
        setFeed("");
        setModalfeedback(false);
    }

    const openModalfeedback = (userId: number) => {
        setModalfeedback(true);
        setIdUser(userId)
    }


    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-7 h-7 rounded-t-3xl m-2 hover:scale-110",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-36 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <h2 className="text-[20px] font-medium">{group?.name}</h2>
                        <a href={ROUTES.groupchat} className="opacity-85 hover:opacity-100 hover:scale-105 hover:-translate-y-1 transition duration-200   bg-[#F41C54] rounded-lg w-40 text-[16px] text-white flex justify-center items-center">Chats</a>
                    </div>
                    <hr className="mt-4" />
                    <div className="w-full flex flex-wrap mt-8 gap-6 justify-center ">
                        <div className="w-[48%] min-w-[280px] bg-[#242424] justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3">
                            <div className="w-full flex flex-col items-center pb-3">
                                <div className="w-full flex justify-start items-center">
                                    <p className="text-[20px]">Description</p>
                                </div>
                                <div className="flex w-full justify-start">
                                    <p className="mt-8 text-[14px]">{group?.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[48%] min-w-[280px] bg-[#242424] justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3">
                            <div className="w-full flex flex-col items-center pb-3">
                                <div className="w-full flex justify-start items-center">
                                    <p className="text-[20px]">Goals</p>
                                </div>
                                <div className="flex w-full justify-start">
                                    <p className="mt-8 text-[14px]">{group?.objective}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full p-6">
                            <div className="w-full flex flex-row justify-between items-center">
                                <p className="text-[20px]">members</p>
                                <button onClick={() => openModal2()}>
                                    <Image src={more} alt="ícone ideia" className="w-6 mr-[35px] h-6 rounded-t-3xl hover:scale-110" />
                                </button>
                            </div>
                            <table className="bg-[#242424] w-full rounded-md mt-8">
                                <tbody>
                                    <tr>
                                        <td className="w-16 p-1">
                                            <Image src={user} alt="ícone ideia" className={style.imagen} />
                                        </td>
                                        <td className="text-[16px]">{userData.at(0)?.name}</td>
                                    </tr>
                                    {userData.slice(1).map((item) => (
                                        <TeamList key={item.userId} foto={user.src} name={item.name} openModalfeedback={() => openModalfeedback(item.userId)} idUser={item.userId}/>
                                    ))}
                                    {/* <TeamList foto={user.src} name={"Amilton"} openModalfeedback={openModalfeedback}/> */}
                                </tbody>
                            </table>
                            <div className={group?.isOwner? "hidden": "w-full mt-8 flex justify-end"}>
                                <button onClick={() => openModal()} className="border-[#F41C54] h-10 rounded-lg border w-40 text-[#F41C54] flex justify-center items-center text-[16px] opacity-85 hover:opacity-100 hover:scale-105 hover:-translate-y-1 transition duration-200 ">Delete Group</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal deletar grupo*/}
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-5 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-80 bg-opacity-50 z-50 items-center">
                        <h2 className="text-xl font-semibold text-center">You will delete permanently</h2>
                        <p className="text-xl font-semibold text-center">Are you sure?</p>
                        <div className="flex w-10/12 justify-between mt-8">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-white text-black py-2 px-4 rounded-md hover:bg-gray-300">Cancel</button>
                            <button onClick={() => setModal(false)} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal feedback*/}
            <div className={modalfeedback ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 fixed opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col">
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New Feedback</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Feedback</label>
                            <input type="text" placeholder="Feedback here" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" value={feed} onChange={(e) => { setFeed(e.target.value) }} />
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModalfeedback()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={sendFeedback} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal novo integrante*/}
            <div className={modal2 ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled fixed z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New collaborator</h2>
                        {/* <form className="flex flex-col">
                            <label htmlFor="" className="mt-4">Email</label>
                            <input type="text" placeholder="Collaborator email" className="text-gray-800 border-2 rounded-[5px] p-1 mt-1 text-[13px]" />
                        </form> */}
                        <form>
                            <table className="bg-[#242424] w-full rounded-md mt-8">
                                <tbody >
                                    {userData.map((item) => (
                                        <tr key={item.userId}>
                                            <td className="p-1">
                                                <div className="flex flex-row justify-start items-center gap-2">
                                                    <Image src={user} alt="ícone ideia" className={style.imagen} />
                                                    {item.userName}
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex justify-end pe-3">
                                                    <button onClick={() => addUser(item.userId)} className="flex justify-center items-center">
                                                        <Image src={more} alt="ícone ideia" className="w-6 h-6 rounded-t-3xl hover:scale-110" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    {/* <tr className="border-t">
                                        <td className="p-1">
                                            <div className="flex flex-row justify-start items-center gap-2">
                                                <Image src={user} alt="ícone ideia" className={style.imagen} />
                                                Joao
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex justify-end pe-3">
                                                <button onClick={() => setModal2(false)} className="flex justify-center items-center">
                                                    <Image src={more} alt="ícone ideia" className="w-6 h-6 rounded-t-3xl hover:scale-110" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </form>
                        <div className="flex justify-center mt-10">
                            <button onClick={() => closeModal2()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}