"use client"

import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "@/assets/verificado.png"
import heart from "@/assets/coracao.png"
import redHeart from "@/assets/coracaovermei.png"
import { api } from "@/constants/api";

interface CardAnswerProps {
    idAnswer: number;
    userPhoto: string;
    username: string;
    date: string;
    answer: string;
    likes: number;
    liked: boolean;
    verified: boolean;
}

export const CardAnswer: React.FC<CardAnswerProps> = ({idAnswer, userPhoto, username, date, answer, likes, liked, verified}) => {

    const handleLike = async () => {

        await api.post(`/forum/like/${idAnswer}`,
            null,
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((res) => {
                window.location.reload()
            })
            .catch((e) => {
                console.log(e)
            })
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
                <div className={ verified? "flex items-center" :"hidden"}>
                    <h3 className="text-[#50aadf] text-[14px]">Resposta verificada</h3>
                    }
                    <Image src={verify.src} alt="ícone notificação" className="w-5 h-5 rounded-t-3xl m-2 mr-4" width={1000} height={1000}/>
                </div>
            </div>

            <div className="pl-8 pt-2 text-[14px] flex justify-between items-center pb-6">
                <p className="w-[90%] break-words">{answer}</p>
                <button onClick={handleLike} className="flex items-center">
                    {likes}
                    <Image src={liked? redHeart.src : heart.src} alt="ícone coração" className={"w-5 h-5 m-2 mr-8"} width={1000} height={1000}/>
                </button>
            </div>
        </div>
    );
}