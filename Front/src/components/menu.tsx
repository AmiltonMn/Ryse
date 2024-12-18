"use client";

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo-Photoroom.png";
import iconNotify from "@/assets/sino.png";
import iconNotifyDark from "@/assets/notification.png";
import iconProfile from "@/assets/user.png";
import iconProfileDark from "@/assets/userDark.png";
import iconMoon from "@/assets/lua.png";
import iconSun from "@/assets/sol.png";
import { useState } from "react";
import { CardNotification } from "./cardNotification";
import { useDarkMode } from "@/context/darkMode";

interface MenuProps {
  title: string;
}

export const Menu: React.FC<MenuProps> = ({ title }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState<string>("");
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode((prev: any) => !prev); 
  };

  const openModal = () => {
    setModal((prev) => !prev); 
    setName(""); 
  };

  return (
    <div>
      <nav className="flex flex-col fixed w-full z-10 font-robFont text-large justify-center items-center border-[0.5px] border-[#656565] bg-[#292929] dark:bg-slate-50 dark:border-slate-300">
        <div className="p-2 pl-6 pr-6 justify-between w-full font-robFont text-large flex flex-row items-center">
          <div className="flex flex-row items-center justify-center">
            <Image src={logo} alt="logo" className="w-9 h-9 rounded-t-3xl m-2" />
            <Link href={ROUTES.home} className="font-extrabold text-[#F41C54] text-[22px]">
              {title}
            </Link>
          </div>
          <div className="flex gap-4">
            <button onClick={() => openModal()}>
              <Image
                src={darkMode ? iconNotifyDark : iconNotify}
                alt="ícone notificação"
                className="w-7 h-7 rounded-t-3xl m-2"
              />
            </button>
            <Link href={ROUTES.profile}>
              <Image
                src={darkMode ? iconProfileDark : iconProfile}
                alt="ícone perfil"
                className="w-7 h-7 rounded-t-3xl m-2"
              />
            </Link>
            <button onClick={toggleDarkMode}>
              <Image src={darkMode ? iconMoon : iconSun} alt="Tema" width={24} height={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Modal de notificações */}
      <div
        className={
          modal
            ? "fixed inset-0 flex justify-end text-white bg-black bg-opacity-50 z-50 mt-[70px]"
            : "disabled hidden z-0 opacity-0 mt-0"
        }
      >
        <div className="bg-zinc-800 dark:bg-slate-100 dark:bg-opacity-80 w-80 shadow-lg flex pl-6 pr-6 flex-col">
          <div className="flex justify-between items-center mt-8 mb-8">
            <h2 className="text-[16px] font-semibold text-[#F41C54]">Notifications</h2>
            <button>
              <p className="text-[12px] text-[#fd7b9c] hover:text-[#d3748c]">Mark all as read</p>
            </button>
          </div>
          <div className="flex flex-col gap-4 overflow-x-auto max-h-full pr-3">
            <CardNotification userPhoto={iconProfile.src} username={"ingrid"} date={"15/01/2005"} title={"Liked your comment"} state={true} />
            <CardNotification userPhoto={iconProfile.src} username={"ingrid"} date={"15/01/2005"} title={"Liked your comment"} state={false} />
            {/* Outras notificações */}
          </div>
        </div>
      </div>
    </div>
  );
};
