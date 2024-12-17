'use client'

import { CardForum } from "@/components/cardForum";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import { CardAnswer } from "@/components/cardAnswer";
import iconProfile from "@/assets/user.png"
import search from "@/assets/lupaBlack.png"
import iconMore from "@/assets/mais.png";
import { useState } from "react";

const styles = {
    chat: "p-2 mt-6 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full "
}

export default function Question() {

    const [newAnswer, setNewAnswer] = useState<string>("");
    

    return (
        <div>
            <Menu title={"Ryse"}/>
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />
            <div className="pt-36 pl-[300px] flex dark:text-black">
                <div className="w-[97%]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-white dark:text-black font-bold text-[16px] mb-3">AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz</h2>
                        <div className="flex text-white dark:text-black">
                            <Image src={iconProfile} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                            <div className="mb-4">
                                <h4>Ingrid</h4>
                                <p className="text-[12px]">12/12/2012</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="bg-[#242424] dark:bg-slate-100 rounded-[10px] mt-12 dark:text-black text-white p-12 text-[16px]">
                        <p>AAAA FDDDDDDDDDDDDDDD SSSSSSSSS DDDDDDDDDDDDDD RRRRRRR akfojdsogfjosdj ogkodjs gjskdjgkd jksjkdesjgk sjdgjfdkhgldfklh slkdlfk lkghfdjjhglsdkfsdl lgklsdklgk slsljfjdghj jhjas jgksdkgru ngnskerutidrjgbjdkjfkgjd sitoerki otkirg?</p>
                    </div>
                    <div className="flex flex-col justify-center dark:text-black text-white mt-12 m-16">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-[16px]">Answers</h3>
                            <div className="flex items-center">
                                <p className="pr-12">0 answers</p>
                                <div>
                                    <h3 className="text-[#F41C54] font-bold bg-[#D9D9D9] p-1 pr-5 pl-5 rounded-[10px]">Frontend</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CardAnswer userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2023"} answer={"aaaaaaaaaa"}/>
                            <CardAnswer userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2023"} answer={"aaaaaaaaaa"}/>
                            <CardAnswer userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2023"} answer={"aaaaaaaaaa"}/>
                            <CardAnswer userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2023"} answer={"aaaaaaaaaa"}/>
                            <div className="bg-[#242424] dark:bg-slate-100 fixed bottom-2 rounded-[10px] mt-16 w-[75%] text-white border-[#f8f8f8] border-[0.3px]">
                                <div className="text-[20px] flex justify-center p-5">
                                    <Image src={iconProfile.src} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl mr-6" width={1000} height={1000}/>
                                    <input type="text" className="w-[97%] text-[12px] rounded-[10px] text-black p-2 h-10 mr-2 pl-4" placeholder="Post answer" value={newAnswer} onChange={(e) => { setNewAnswer(e.target.value) }}></input>
                                    <button className="text-white w-[150px] h-10 text-[13px] hover:text-gray-500 black transition easy-in-out bg-[#F41C54] rounded-[10px] flex items-center justify-center">Add answer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}