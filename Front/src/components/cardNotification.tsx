import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import heart from "@/assets/coracao.png"
import lampadaVermelha from "@/assets/lampadaVermelha.png"
import lampadaAmarela from "@/assets/lampadaAmarela.png"
import lampadaVerde from "@/assets/lampadaVerde.png"


interface CardNotificationProps {
    userPhoto: string;
    username: string;
    date: string;
    title: string;
    state: number;
}

export const CardNotification: React.FC<CardNotificationProps> = ({userPhoto, username, date, title, state}) => {
    return(
        <div className="bg-[#242424] rounded-[10px] w-full text-white ">
            <div className="flex justify-between p-4">
                <div className="flex justify-center items-center">
                    <Image src={userPhoto} alt="ícone notificação" className="w-7 h-7 rounded-t-3xl m-2 mr-4" width={1000} height={1000}/>
                    <h4 className="text-[14px]">{username}</h4>
                </div>
                <p className="text-[12px] p-4">{date}</p>
            </div>
            <div className="flex justify-between">
                <div className="pl-8 pt-4 text-[14px] flex justify-between pb-8 w-full">
                    <div className="flex gap-8">
                        <p>{title}</p>
                    </div>
                    <button className="pr-6">
                        
                        <Image src={heart.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000}/>
                    </button>
                </div>
            </div>
            <hr/>
        </div>
    );
}