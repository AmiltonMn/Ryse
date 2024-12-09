import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { TeamList } from "@/components/teamList";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

import Image from "next/image";

import trash from "@/assets/trash.png";
import more from "@/assets/mais.png";
import user from "@/assets/user.png";


export default function Home() {

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-5 h-5 rounded-t-3xl m-2 hover:scale-110",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />
            <div className="pt-36 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <h2 className="text-[20px] font-medium">Nome do Projeto</h2>
                        <a href={ROUTES.groupchat} className="hover:opacity-90 hover:scale-105 bg-[#F41C54] rounded-lg w-40 text-[16px] text-white flex justify-center items-center">Chats</a>
                    </div>
                    <hr className="mt-4" />
                    <div className="w-full flex flex-wrap mt-8 gap-6 justify-center ">
                        <div className="w-[48%] min-w-[280px] bg-[#242424] justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3">
                            <div className="w-full flex flex-col items-center pb-3">
                                <div className="w-full flex justify-start items-center">
                                    <p className="text-[20px]">Description</p>
                                </div>
                                <div className="flex w-full justify-start">
                                    <p className="mt-8 text-[14px]">texto de descricao do grupo uma descricao legal texto de descricao do grupo uma descricao legal</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[48%] min-w-[280px] bg-[#242424] justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3">
                            <div className="w-full flex flex-col items-center pb-3">
                                <div className="w-full flex justify-start items-center">
                                    <p className="text-[20px]">Goals</p>
                                </div>
                                <div className="flex w-full justify-start">
                                    <p className="mt-8 text-[14px]">um texto falando sobre as metas metas muito legais eb aeba eba mais texto pra ter 2 linhas</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full p-6">
                            <div className="w-full flex flex-row justify-between items-center">
                                <p className="text-[20px]">Integrantes</p>
                                <button>
                                    <Image src={more} alt="ícone ideia" className="w-5 h-5 rounded-t-3xl hover:scale-110" />
                                </button>
                            </div>
                            <table className="bg-[#242424] w-full rounded-md mt-8">
                                <tbody>          
                                    <tr>
                                        <td className="w-16 p-1">
                                            <Image src={user} alt="ícone ideia" className={style.imagen} />
                                        </td>
                                        <td className="text-[16px]">Juliana</td>
                                        <td className="w-16">
                                            <button>
                                                <Image src={trash} alt="ícone ideia" className={style.imagen2} />
                                            </button>
                                        </td>
                                    </tr>
                                    <TeamList foto={user.src} name={"Adrian"}/>
                                    <TeamList foto={user.src} name={"Amilton"}/>
                                </tbody>
                            </table>
                            <div className="w-full mt-8 flex justify-end">
                                <button className="border-[#F41C54] h-10 rounded-lg border w-40 text-[#F41C54] flex justify-center items-center text-[16px] opacity-85 hover:opacity-100 hover:scale-105">Delete Group</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}