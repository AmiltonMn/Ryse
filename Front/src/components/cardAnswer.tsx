import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "../assets/lupaBlack.png"

interface CardAnswerProps {
    userPhoto: string;
    username: string;
    date: string;
    answers: number;
}

export const CardAnswer: React.FC<CardAnswerProps> = ({userPhoto, username, date, answers}) => {
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
                <div>
                    <h3 className="text-[#2278aa]">Resposta verificada</h3>
                    <Image src={verify} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                </div>
            </div>

            <div className="pl-8 pt-3 text-[20px]">
                <p>{answers}</p>
            </div>

            <Image src={verify} alt="ícone notificação" className="flex justify-end p-6" width={1000} height={1000}/>
        </div>
    );
}