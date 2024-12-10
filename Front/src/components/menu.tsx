import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/user.png";
import iconNotify from "@/assets/sino.png";
import iconProfile from "@/assets/user.png";

interface MenuProps {
    title: string;
}

export const Menu: React.FC<MenuProps> = ({title}) => {
    return(
        <div>
            <nav className="flex flex-col fixed w-full z-10 font-robFont text-large justify-center align-center border-[0.5px] border-[#656565] bg-[#292929]">
            <div className="p-2 pl-6 pr-6 justify-between w-full font-robFont text-large flex flex-row align-center">
                <div className="flex flex-row items-center justify-center">
                    <Image src={logo} alt="logo" className="w-9 h-9 rounded-t-3xl m-2"/>
                    <Link href={ROUTES.home} className="font-extrabold text-[#F41C54] text-[22px]">{title}</Link>
                </div>
                <div className="flex">
                    <Image src={iconNotify} alt="ícone notificação" className="w-7 h-7 rounded-t-3xl m-2"/>
                    <Link href={ROUTES.profile} className="">
                        <Image src={iconProfile} alt="ícone perfil" className="w-7 h-7 rounded-t-3xl m-2"/>
                    </Link>
                </div>
            </div>
            </nav>

            {/* Modal notificação
            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    
                </div>
            </div> */}
        </div>
    )
}