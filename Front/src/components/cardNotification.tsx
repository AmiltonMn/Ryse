import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import trash from "@/assets/trash.png"
import confirmaVisu from "@/assets/confirmaVisu.png";


interface CardNotificationProps {
    userPhoto: string;
    username: string;
    date: string;
    title: string;
    state: boolean;
}

export const CardNotification: React.FC<CardNotificationProps> = ({userPhoto, username, date, title, state}) => {
    return(
        <div className="bg-[#111111] rounded-[10px] w-full text-white">
            <div className="flex justify-between p-2">
                <div className="flex justify-center items-center">
                    <Image src={userPhoto} alt="ícone foto" className="w-7 h-7 rounded-t-3xl mr-4" width={1000} height={1000}/>
                    <h4 className="text-[14px]">{username}</h4>
                </div>
                <p className="text-[12px] p-2">{date}</p>
            </div>
            <div className="flex justify-between">
                <div className="pl-8 pt-4 text-[14px] flex flex-col pb-6 w-full">
                    <p>{title}</p>
                    <div className="flex justify-end">
                        <div className="pr-5 flex items-center justify-center mt-2 gap-4">
                            <button><p className={state ? "text-[#4dbce7] text-[12px]" : "hidden"}>NEW</p></button>
                            <Image src={trash.src} alt="ícone lixo" className="w-5 h-5" width={1000} height={1000}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}