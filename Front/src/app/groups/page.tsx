import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardGroup } from "@/components/cardGroup";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

import Image from "next/image";

import google from "@/assets/user.png";
import more from "@/assets/mais.png";


export default function Home() {

    // const [page, setPage] = useState<number>(1);

    // const next = () => {
    //     setPage(page+1);
    // }

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-4 h-4 rounded-t-3xl m-2 hover:scale-110",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />
            <div className="pt-36 pl-[300px] pr-[100px] flex">
                <div className="w-full text-white">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-row items-center">
                        <h2 className="text-[20px] font-semibold">Groups</h2>
                        <button>
                            <Image src={more} alt="ícone ideia" className={style.imagen2}/>
                        </button>
                        </div>
                        <input type="text" placeholder="Search" className="text-black w-4/12 p-1 pl-4 rounded-[3px] "/>
                    </div>
                    <hr className="mt-4" />
                    <div className="w-full flex flex-wrap mt-8 gap-6 justify-center">
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                        <CardGroup foto={google.src} name={"Titulo"} description={"descrição do card do grupo aqui descrição do card do grupo aqui"}/>
                    </div>
                    <div className="w-full flex justify-center mt-3 gap-3 mb-2">
                        <button className="bg-[#3b3b3b] text-black rounded-sm font-bold ps-1.5 pe-1.5 ">◀</button>
                        <input className="ps-1.5 pe-1.5 pb-0.5 border-t border-b border-s border-e border-[#3b3b3b] bg-[#242424] w-20 text-center text-white rounded-sm font-bold" />
                        <button className="bg-white text-black rounded-sm font-bold ps-1.5 pe-1.5 ">▶</button>
                    </div>
                </div>
            </div>

        </div>
    );
}