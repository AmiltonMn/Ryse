import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import verify from "@/assets/verificado.png"
import heart from "@/assets/coracao.png"
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
}

export const CardIdea: React.FC<CardIdeaProps> = ({userPhoto, username, date, title, description, state}) => {
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
                <div className="pl-8 pt-4 text-[14px] flex gap-8 pb-8">
                    <Image src={state == 0 ? lampadaAmarela : state == 1 ? lampadaVerde : lampadaVermelha} alt="lampada" className="w-12"/>
                    <div className="">
                        <h4 className="text-[16px] mb-2">{title}</h4>
                        <p>{description}</p>
                    </div>
                    <button></button>
                </div>
                {/* <div className="flex items-center">
                    <div className="flex items-center p-8">
                        <h3 className={status == "Approved" ? "text-black w-36 flex justify-center bg-green-400 p-1 pl-3 pr-3 rounded-[10px] text-[14px]" : status == "Disapproved" ? "text-black bg-red-400 w-36 flex justify-center p-1 pl-3 pr-3 rounded-[10px] text-[14px]" : "text-black bg-yellow-300 p-1 pl-3 pr-3 rounded-[10px] w-36 flex justify-center text-[14px]"}>{status}</h3>
                    </div>
                </div> */}
            </div>
            <hr/>
        </div>
    );
}