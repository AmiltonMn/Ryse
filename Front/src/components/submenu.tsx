"use client"

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import iconHome from "@/assets/home.png";
import iconGroup from "@/assets/grupo.png";
import iconMessage from "@/assets/mensagem.png";
import iconIdea from "@/assets/luz.png";
import iconMore from "@/assets/luz.png";
import iconSettings from "@/assets/settings.png";
import { useState } from "react";

interface SubmenuProps {
    home: string;
    chats: string;
    newGroup: string;
    myGroup: string;
    chatPrincipal1: string;
    chatPrincipal2: string;
    chatPrincipal3: string;
    newIdea: string;
    ideas: string;
    hardSkills: string;
    events: string;
    news: string;
}

const styleSubmenu = {
    link: "text-white text-[13px] hover:text-gray-500 black transition easy-in-out pt-2 pb-2 flex items-center",
    div: "flex flex-col",
    button: "text-white text-[13px] hover:text-gray-500 black mt-4 transition easy-in-out bg-[#454545] rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2",
    hr: "mb-3 mt-3",
    h5: "text-[15px]"
}

export const Submenu: React.FC<SubmenuProps> = ({ home, chats, newGroup, myGroup, chatPrincipal1, chatPrincipal2, chatPrincipal3, newIdea, ideas, hardSkills, events, news }) => {

    var baixo = "▼";
    var cima = "▲";

    const [isGroup, setIsGroup] = useState(true);
    const [isChats, setIsChats] = useState(true);
    const [isIdeia, setIsIdeia] = useState(true);
    const [isSettings, setIsSettings] = useState(true);

    return (
        <div className="text-white h-full w-[250px] fixed font-robFont text-large border-[0.5px] border-[#656565] bg-[#292929]">
            <div className="flex flex-col p-6 mt-16">
                <div className={styleSubmenu.div}>
                    <Link href={ROUTES.home} className={styleSubmenu.link}>
                        <Image src={iconHome} alt="ícone home" className={styleSubmenu.img} />
                        {home}
                    </Link>
                    <Link href={ROUTES.chats} className={styleSubmenu.link}>
                        <Image src={iconMessage} alt="ícone chats" className={styleSubmenu.img} />
                        {chats}
                    </Link>
                </div>
                <hr className={styleSubmenu.hr} />
                <div className={styleSubmenu.div}>
                    <div className="flex flex-row justify-between">
                        <h5 className={styleSubmenu.h5}>GROUPS</h5><button className="text-[13px]" onClick={() => setIsGroup(!isGroup)}>{!isGroup ? baixo : cima}</button>
                    </div>
                    {isGroup && <div>
                        <Link href={ROUTES.groups} className={styleSubmenu.link}>
                            <Image src={iconGroup} alt="ícone grupo" className={styleSubmenu.img} />
                            {myGroup}
                        </Link>
                    </div>}
                </div>
                <hr className={styleSubmenu.hr} />
                <div className={styleSubmenu.div}>
                    <div className="flex flex-row justify-between">
                        <h5 className={styleSubmenu.h5}>MAIN CHATS</h5><button className="text-[13px]" onClick={() => setIsChats(!isChats)}>{!isChats ? baixo : cima}</button>
                    </div>
                    {isChats && <div>
                        <Link href={ROUTES.chats} className={styleSubmenu.link}>
                            <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img} />
                            {chatPrincipal1}
                        </Link>
                        <Link href={ROUTES.chats} className={styleSubmenu.link}>
                            <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img} />
                            {chatPrincipal2}
                        </Link>
                        <Link href={ROUTES.chats} className={styleSubmenu.link}>
                            <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img} />
                            {chatPrincipal3}
                        </Link>
                    </div>}
                </div>
                <hr className={styleSubmenu.hr} />
                <div className={styleSubmenu.div}>
                    <div className="flex flex-row justify-between">
                        <h5 className={styleSubmenu.h5}>IDEAS WALL</h5><button className="text-[13px]" onClick={() => setIsIdeia(!isIdeia)}>{!isIdeia ? baixo : cima}</button>
                    </div>
                    {isIdeia && <div>
                        <Link href={ROUTES.ideas} className={styleSubmenu.link}>
                            <Image src={iconIdea} alt="ícone ideia" className={styleSubmenu.img} />
                            {ideas}
                        </Link>
                    </div>}
                </div>


                {/* PARTE QUE SÓ VAI APARECER PARA OS INSTRUTORES */}
                <hr className={styleSubmenu.hr} />
                <div className={styleSubmenu.div}>
                    <div className="flex flex-row justify-between">
                        <h5 className={styleSubmenu.h5}>SETTINGS</h5><button className="text-[13px]" onClick={() => setIsSettings(!isSettings)}>{!isIdeia ? baixo : cima}</button>
                    </div>
                    {isSettings && <div>
                        <Link href={ROUTES.hardSkills} className={styleSubmenu.link}>
                            <Image src={iconSettings} alt="ícone ferramenta" className={styleSubmenu.img}/>
                            {hardSkills}
                        </Link>
                        <Link href={ROUTES.ideas} className={styleSubmenu.link}>
                            <Image src={iconSettings} alt="ícone ferramenta" className={styleSubmenu.img}/>
                            {events}
                        </Link>
                        <Link href={ROUTES.ideas} className={styleSubmenu.link}>
                            <Image src={iconSettings} alt="ícone ferramenta" className={styleSubmenu.img}/>
                            {news}
                        </Link>
                    </div>}
                </div>
            </div>
                <a className="text-white text-[16px] hover:text-gray-500 black transition easy-in-out pt-1 pb-2 mt-[90%] ml-[4%] fixed bottom-6 ">To go out</a>
        </div>
    )
}