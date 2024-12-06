import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import iconHome from "@/assets/home.png";
import iconGroup from "@/assets/grupo.png";
import iconMessage from "@/assets/mensagem.png";
import iconIdea from "@/assets/luz.png";
import iconMore from "@/assets/luz.png";

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
}

const styleSubmenu = {
    link: "text-white text-[13px] hover:text-gray-500 black transition easy-in-out pt-1 pb-2 flex items-center",
    div: "flex flex-col",
    button: "text-white text-[13px] hover:text-gray-500 black mt-4 transition easy-in-out bg-[#454545] rounded-[10px] flex items-center",
    img: "w-6 h-6 rounded-t-3xl m-2",
    hr: "mb-2 mt-2"
}

export const Submenu: React.FC<SubmenuProps> = ({home, chats, newGroup, myGroup, chatPrincipal1, chatPrincipal2, chatPrincipal3, newIdea, ideas}) => {
    return(
        <div className="text-white h-full w-[250px] fixed font-robFont text-large border-[0.5px] border-[#656565] bg-[#292929]">
            <div className="flex flex-col p-6 mt-28">
                <div className={styleSubmenu.div}>
                    <Link href={ROUTES.home} className={styleSubmenu.link}>
                        <Image src={iconHome} alt="ícone home" className={styleSubmenu.img}/>
                        {home}
                    </Link>
                    <Link href={ROUTES.chats} className={styleSubmenu.link}>
                        <Image src={iconMessage} alt="ícone chats" className={styleSubmenu.img}/>
                        {chats}
                    </Link>
                </div>
                <hr className={styleSubmenu.hr}/>
                <div className={styleSubmenu.div}>
                    <h5 className={styleSubmenu.h5}>GRUPOS</h5>
                    <Link href={ROUTES.groups} className={styleSubmenu.button}>
                        <Image src={iconMore} alt="ícone grupo" className={styleSubmenu.img}/>
                        {newGroup}
                    </Link>
                    <Link href={ROUTES.groups} className={styleSubmenu.link}>
                        <Image src={iconGroup} alt="ícone grupo" className={styleSubmenu.img}/>
                        {myGroup}
                    </Link>
                </div>
                <hr className={styleSubmenu.hr}/>
                <div className={styleSubmenu.div}>
                    <h5 className={styleSubmenu.h5}>CHATS PRINCIPAIS</h5>
                    <Link href={ROUTES.chats} className={styleSubmenu.link}>
                        <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img}/>
                        {chatPrincipal1}
                    </Link>
                    <Link href={ROUTES.chats} className={styleSubmenu.link}>
                        <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img}/>
                        {chatPrincipal2}
                    </Link>
                    <Link href={ROUTES.chats} className={styleSubmenu.link}>
                        <Image src={iconMessage} alt="ícone chat" className={styleSubmenu.img}/>
                        {chatPrincipal3}
                    </Link>
                </div>
                <hr className={styleSubmenu.hr}/>
                <div className={styleSubmenu.div}>
                    <h5 className={styleSubmenu.h5}>MURAL DE IDEIAS</h5> 
                    <Link href={ROUTES.ideas} className={styleSubmenu.button}>
                        <Image src={iconMore} alt="ícone ideia" className={styleSubmenu.img}/>
                        {newIdea}
                    </Link>
                    <Link href={ROUTES.ideas} className={styleSubmenu.link}>
                        <Image src={iconIdea} alt="ícone ideia" className={styleSubmenu.img}/>
                        {ideas}
                    </Link>
                </div>
                <a className="text-white text-[16px] hover:text-gray-500 black transition easy-in-out pt-1 pb-2 mt-[90%] ml-[40%]">Sair</a>
            </div>
        </div>
    )
}