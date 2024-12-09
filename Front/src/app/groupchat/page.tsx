import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardGroup } from "@/components/cardGroup";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
// import React, { useEffect, useState } from "react";

import Image from "next/image";

import trash from "@/assets/trash.png";
import more from "@/assets/mais.png";
import user from "@/assets/user.png";


export default function Home() {

    const style =
    {
        inputz: "rounded-md ps-4 text-base w-4/12 bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-8 h-8 rounded-t-3xl m-2",
        imagen2: "w-5 h-5 rounded-t-3xl m-2",
    }

    return (
        <div>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />
            <div className="pt-32 pl-[300px] pr-[100px] flex">
                <div className="w-full h-full text-white">
                    <div className="w-full h-full flex justify-center ">
                        <div className="w-[90%] h-[100%] bg-[#242424]  rounded-md flex flex-col ">
                            <div className="flex w-full flex-col">
                                <div className="flex w-full h-12 rounded bg-[#313131]"></div>
                                <hr className=""/>
                            </div>
                            <div className="w-full h-full flex flex-row">

                                <div className="flex flex-col w-[15%] bg-[#373737]">

                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center p-3 gap-2">
                                            <div className="rounded-[100%] h-4 w-4 bg-[#D9D9D9]"></div>
                                            <p >Back</p>
                                        </div>
                                        <hr/>
                                    </div>

                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center p-3 gap-2">
                                            <div className="rounded-[100%] h-4 w-4 bg-[#D9D9D9]"></div>
                                            <p >Front</p>
                                        </div>
                                        <hr/>
                                    </div>
                                    
                                </div>

                                <div className="flex flex-col h-full w-[85%]">
                                    <div>

                                    </div>
                                    <div className="flex w-full h-16 rounded bg-[#313131] flex-row justify-between items-center p-4">
                                    <div className="rounded-[100%] h-4 w-4 bg-[#D9D9D9]"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}