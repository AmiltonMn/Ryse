import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import heart from "@/assets/coracao.png"
import heartLike from "@/assets/coracaoRosa.png"
import lampadaVermelha from "@/assets/lampadaVermelha.png"
import lampadaAmarela from "@/assets/lampadaAmarela.png"
import lampadaVerde from "@/assets/lampadaVerde.png"


interface CardIdeaProps {
    userPhoto: string;
    username: string;
    date: string;
    title: string;
    description: string;
    state: number;
    likes: number;
    liked: boolean;
}

export const CardIdea: React.FC<CardIdeaProps> = ({userPhoto, username, date, title, description, state, likes, liked}) => {
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
                        <Image src={state == 0 ? lampadaAmarela : state == 1 ? lampadaVerde : lampadaVermelha} alt="lampada" className="w-12"/>
                        <div className="">
                            <h4 className="text-[16px] mb-2">{title}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button className="pr-2">
                            <Image src={liked ? heartLike.src : heart.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000}/>
                        </button>
                        <p className="pr-12">{likes}</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}