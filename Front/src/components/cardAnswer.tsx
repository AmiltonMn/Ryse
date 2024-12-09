import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "../app/assets/verificado.png"
import heart from "../app/assets/coracao.png"

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
                    <h3 className="text-[#50aadf]">Resposta verificada</h3>
                    <Image src={verify.src} alt="ícone notificação" className="w-5 h-5 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                </div>
            </div>

            <div className="pl-8 pt-3 text-[20px] flex justify-between pb-8">
                <p>{answer}</p>
                <button><Image src={heart.src} alt="ícone notificação" className="flex justify-end  items-end mr-12 w-6 h-6" width={1000} height={1000}/></button>
            </div>

        </div>
    );
}