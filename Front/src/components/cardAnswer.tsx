import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "../app/assets/lupa.png"

interface CardAnswerProps {
    userPhoto: string;
    username: string;
    date: string;
    answer: string;
}

export const CardAnswer: React.FC<CardAnswerProps> = ({userPhoto, username, date, answer}) => {
    return(
        <div className="bg-[#242424] rounded-[10px] mt-16 w-full text-white ">
            <div className="flex justify-between p-6">
                <div className="flex">
                    <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                    <div>
                        <h4>{username}</h4>
                        <p className="text-[14px]">{date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <h3 className="text-[#2278aa]">Resposta verificada</h3>
                    <Image src={verify.src} alt="ícone notificação" className="w-5 h-5 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                </div>
            </div>

            <div className="pl-8 pt-3 text-[20px]">
                <p>{answer}</p>
            </div>

            <Image src={verify.src} alt="ícone notificação" className="flex justify-end p-6 w-7 h-7" width={1000} height={1000}/>
        </div>
    );
}