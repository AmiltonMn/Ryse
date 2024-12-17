import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { useDarkMode } from "@/context/darkMode";
import heart from "@/assets/coracao.png"
import heartDark from "@/assets/coracaoBranco.png"
import amei from "@/assets/like.png"
import like from "@/assets/joinha.png"
import wlike from "@/assets/joinhacheio.png"
import dislike from "@/assets/dislike.png"
import wdislike from "@/assets/dislikecheio.png"
import pontos from "@/assets/pontos.png"
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

export const CardIdea: React.FC<CardIdeaProps> = ({ userPhoto, username, date, title, description, state }) => {

    const [options, setOptions] = useState(false);
    const [love, setLove] = useState(false)
    const [gostei, setGostei] = useState(false)
    const [odiei, setOdiei] = useState(false)
<<<<<<< HEAD
    const [isInstructor, setIsInstructor] = useState<boolean>(false);

    const userToken = localStorage.getItem("token");

    if(userToken) {
        const parsedToken = JSON.parse(userToken);
        const userState = parsedToken.role;

        if (userState.toLowerCase() === "instructor") {
            setIsInstructor(true);
        }
    }
=======
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode)
>>>>>>> frontend

    const show = () => {
        setOptions(!options)
    }
 
    const loved = () => {
        setLove(!love)
    }

    const liked = () => {
        if (odiei) {
            setOdiei(false)
        }
        setGostei(!gostei)
    }

    const disliked = () => {
        if (gostei) {
            setGostei(false)
        }
        setOdiei(!odiei)
    }


    return (
        <div className="bg-[#242424] mb-2 dark:bg-slate-100 rounded-[10px] w-full text-white group dark:text-black">
            <div className="flex justify-between p-4">
                <div className="flex justify-center items-center">
                    <Image src={userPhoto} alt="ícone notificação" className="w-7 h-7 rounded-t-3xl m-2 mr-4" width={1000} height={1000} />
                    <h4 className="text-[14px]">{username}</h4>
                </div>
                <div className="flex items-center">
                    <p className="text-[12px] p-4">{date}</p>
                    <button className="w-7 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#313131] rounded-md flex justify-center items-center pl-1 pr-1">
                        <Image onClick={() => show()} src={pontos} alt={"3 pontos"} className="w-4 h-4 " />
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="pl-8 pt-4 text-[14px] flex justify-between pb-8 w-full">
                    <div className="flex gap-8">
                        <Image src={state == 0 ? lampadaAmarela : state == 1 ? lampadaVerde : lampadaVermelha} alt="lampada" className="w-12" />
                        <div className="">
                            <h4 className="text-[16px] mb-2">{title}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                    {options == true ?
                        <div className={isInstructor ? "flex items-center" : "hidden"}>
                            <button onClick={() => liked()} className="">
                                {
                                    gostei ?
                                        <Image src={wlike.src} alt="like" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                        :
                                        <Image src={like.src} alt="like" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                }
                            </button>
                            <button onClick={() => disliked()} className="">
                                {
                                    odiei ?
                                        <Image src={wdislike.src} alt="dislike" className="w-5 h-5 m-2 transform scale-x-[-1]" width={1000} height={1000} />
                                        :
                                        <Image src={dislike.src} alt="dislike" className="w-5 h-5 m-2 transform scale-x-[-1]" width={1000} height={1000} />
                                }    
                            </button>
                            <button onClick={() => loved()} className="pr-6">
                                {
                                    love ?
                                        <Image src={amei.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                        :
                                        <Image src={heart.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                }
                            </button>
                        </div>
                        :
                        <div className="flex items-center">
                            <button onClick={() => loved()} className="pr-6">
                                {
                                    love ?
                                        <Image src={amei.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                        :
                                        <Image src={!darkMode ? heart.src : heartDark.src} alt="ícone coração" className="w-5 h-5 m-2 " width={1000} height={1000} />
                                }
                            </button>
                        </div>}
                </div>
            </div>
        </div>
    );
}