import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "@/assets/verificado.png"
import heart from "@/assets/coracao.png"
import { useState } from "react";

interface CardAnswerProps {
    userPhoto: string;
    username: string;
    date: string;
    answer: string;
}

export const CardAnswer: React.FC<CardAnswerProps> = ({userPhoto, username, date, answer}) => {

    const [verificado, setVerificado] = useState(false)

    const verificar = () => {
        setVerificado(true)
    }

    return(
        <div className="bg-[#242424] rounded-[10px] mt-10 w-full text-white ">
            <div className="flex justify-between p-4">
                <div className="flex">
                    <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-4" width={1000} height={1000}/>
                    <div>
                        <h4>{username}</h4>
                        <p className="text-[12px]">{date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    {verificado==false ? 
                    <button onClick={() => verificar()} className="text-white text-[14px] bg-[#F41C54] p-2 rounded-md hover:text-[#F41C54] hover:bg-white transition-colors duration-150">Verificar Resposta</button>
                    :
                    <h3 className="text-[#50aadf] text-[14px]">Resposta verificada</h3>
                    }
                    <Image src={verify.src} alt="ícone notificação" className="w-5 h-5 rounded-t-3xl m-2 mr-4" width={1000} height={1000}/>
                </div>
            </div>

            <div className="pl-8 pt-2 text-[14px] flex justify-between pb-6">
                <p>{answer}</p>
                    <button>
                        <Image src={heart.src} alt="ícone coração" className="w-5 h-5 m-2 mr-8" width={1000} height={1000}/>
                    </button>
            </div>
        </div>
    );
}