"use client"

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import iconHome from "@/assets/home.png";
import iconHomeDark from "@/assets/homeDark.png";
import iconGroup from "@/assets/grupo.png";
import iconGroupDark from "@/assets/grupoDark.png";
import iconMessage from "@/assets/mensagem.png";
import iconMessageDark from "@/assets/mensagemDark.png";
import iconIdea from "@/assets/luz.png";
import iconIdeaDark from "@/assets/luzDark.png";
import iconMore from "@/assets/luz.png";
import iconSettings from "@/assets/settings.png";
import iconSettingsDark from "@/assets/configuracoes.png";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "@/context/darkMode";
import { useDarkMode } from "@/context/darkMode";

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
    link: "text-white dark:text-black text-[13px] hover:text-gray-500 dark:hover:text-gray-600 dark:font-medium black transition easy-in-out pt-2 pb-2 flex items-center",
    div: "flex flex-col",
    button: "text-white dark:text-black text-[13px] hover:text-gray-500 black mt-4 transition easy-in-out bg-[#454545] rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2",
    hr: "mb-3 mt-3",
    h5: "text-[15px]"
}

export const Submenu: React.FC<SubmenuProps> = ({ home, chats, newGroup, myGroup, chatPrincipal1, chatPrincipal2, chatPrincipal3, newIdea, ideas, hardSkills, events, news }) => {

    var baixo = "▼";
    var cima = "▲";

    const [isGroup, setIsGroup] = useState(false);
    const [isChats, setIsChats] = useState(false);
    const [isIdeia, setIsIdeia] = useState(false);
    const [isSettings, setIsSettings] = useState(false);

    const { darkMode, setDarkMode } = useDarkMode();

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const [isInstructor, setIsInstructor] = useState<boolean>(false);

    const userState = localStorage.getItem("userState");

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userState", "");
    }

    useEffect(() => {
        if (userState && userState.toLowerCase() === "instructor") {
            setIsInstructor(true);
        }
    }, [userState]);

    return (
        <DarkModeProvider>

            <div className="text-white dark:text-black h-full w-[250px] fixed font-robFont text-large border-[0.5px] border-[#656565] dark:border-slate-300 bg-[#292929] dark:bg-slate-50 overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="flex flex-col p-6 mt-16 dark:text-black">
                    <div className={styleSubmenu.div}>
                        <Link href={ROUTES.home} className={styleSubmenu.link}>
                            <Image  src={!darkMode ? iconHome : iconHomeDark} alt="ícone home" className={styleSubmenu.img} />
                            {home}
                        </Link>
                        <Link href={ROUTES.chats} className={styleSubmenu.link}>
                            <Image src={!darkMode ? iconMessage : iconMessageDark} alt="ícone chats" className={styleSubmenu.img} />
                            {chats}
                        </Link>
                    </div>
                    <hr className={styleSubmenu.hr} />
                    <div className={styleSubmenu.div}>
                        <div className="flex flex-row justify-between">
                            <h5>GROUPS</h5><button className="text-[13px]" onClick={() => setIsGroup(!isGroup)}>{!isGroup ? baixo : cima}</button>
                        </div>
                        {isGroup && <div>
                            <Link href={ROUTES.groups} className={styleSubmenu.link}>
                                <Image src={!darkMode ? iconGroup : iconGroupDark} alt="ícone grupo" className={styleSubmenu.img} />
                                {myGroup}
                            </Link>
                        </div>}
                    </div>
                    <hr className={styleSubmenu.hr} />
                    <div className={styleSubmenu.div}>
                        <div className="flex flex-row justify-between">
                            <h5>MAIN CHATS</h5><button className="text-[13px]" onClick={() => setIsChats(!isChats)}>{!isChats ? baixo : cima}</button>
                        </div>
                        {isChats && <div>
                            <Link href={ROUTES.chats} className={styleSubmenu.link}>
                                <Image src={!darkMode ? iconMessage : iconMessageDark} alt="ícone chat" className={styleSubmenu.img} />
                                {chatPrincipal1}
                            </Link>
                            <Link href={ROUTES.chats} className={styleSubmenu.link}>
                                <Image src={!darkMode ? iconMessage : iconMessageDark} alt="ícone chat" className={styleSubmenu.img} />
                                {chatPrincipal2}
                            </Link>
                            <Link href={ROUTES.chats} className={styleSubmenu.link}>
                                <Image src={!darkMode ? iconMessage : iconMessageDark} alt="ícone chat" className={styleSubmenu.img} />
                                {chatPrincipal3}
                            </Link>
                        </div>}
                    </div>
                    <hr className={styleSubmenu.hr} />
                    <div className={styleSubmenu.div}>
                        <div className="flex flex-row justify-between">
                            <h5>IDEAS WALL</h5><button className="text-[13px]" onClick={() => setIsIdeia(!isIdeia)}>{!isIdeia ? baixo : cima}</button>
                        </div>
                        {isIdeia && <div>
                            <Link href={ROUTES.ideas} className={styleSubmenu.link}>
                                <Image src={!darkMode ? iconIdea : iconIdeaDark} alt="ícone ideia" className={styleSubmenu.img} />
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
                                <Image src={!darkMode ? iconSettings : iconSettingsDark} alt="ícone ferramenta" className={styleSubmenu.img} />
                                {hardSkills}
                            </Link>
                        </div>}
                    </div>
                </div>
                <a href={ROUTES.login} className="text-white dark:text-black text-[16px] hover:text-gray-500 black transition easy-in-out pt-1 pb-2 mt-[90%] ml-[4%] fixed bottom-6">Logout</a>
            </div>
                <a className="text-white text-[16px] hover:text-gray-500 black transition easy-in-out pt-1 pb-2 mt-[90%] ml-[4%] fixed bottom-6 ">To go out</a>
        </div>
    )
}