import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import logo from "../app/assets/user.png";
import iconNotify from "@/app/assets/sino.png";
import iconProfile from "../app/assets/user.png";

interface MenuProps {
    title: string;
}

export const Menu: React.FC<MenuProps> = ({title}) => {
    return(
        <nav className="flex flex-col fixed w-full z-10 font-robFont text-large justify-center align-center border-[0.5px] border-[#656565] bg-[#292929]">
          <div className="p-6 pl-6 pr-6 justify-between w-full font-robFont text-large flex flex-row align-center">
            <div className="flex flex-row items-center justify-center">
                <Image src={logo} alt="logo" className="w-10 h-10 rounded-t-3xl m-2"/>
                <Link href={ROUTES.home} className="font-extrabold text-[#F41C54] ml-4 text-[28px]">{title}</Link>
            </div>
            <div className="flex">
                <Image src={iconNotify} alt="ícone notificação" className="w-7 h-7 rounded-t-3xl m-2"/>
                <Link href={ROUTES.profile} className="">
                    <Image src={iconProfile} alt="ícone perfil" className="w-7 h-7 rounded-t-3xl m-2"/>
                </Link>
            </div>
          </div>
        </nav>
    )
}