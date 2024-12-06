import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import google from "@/app/assets/user.png";

export default function Home() {

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />
            <div className="pt-36 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <h2 className="text-3xl font-semibold">Groups</h2>
                        <input className={style.inputz} placeholder="Search" />
                    </div>
                    <hr className="mt-4" />
                    <div className="w-full flex flex-wrap mt-8 ms-8 gap-8">
                        <div className="w-96 bg-[#242424] h-52 justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3">
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full flex justify-between items-center">
                                    <p className="text-2xl">nome do grupo</p>
                                    <Image src={google} alt="ícone ideia" className={style.imagen} />
                                </div>
                                <p className="mt-5">Descrição sobre o hrupo legal ebva ebva, mais mensagens opa oena</p>
                            </div>
                            <button className="bg-white text-black">Open</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}