import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {

    return (
        <div>
            <Menu title={"Ryse"}/>
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
            <div className="pt-36 pl-[300px] flex">
                <div className="w-[75%]">
                    <h2>Forum and Discussions</h2>
                    <hr/>
                    <div>
                        <input type="text" placeholder="Search" className="text-black"/>
                        <input type="text" placeholder="Filter by topic" className="text-black"/>
                    </div>
                </div>

                <div className="flex flex-col">
                    <Link href={ROUTES.home} className="">Javinha</Link>
                    <Link href={ROUTES.home} className="">Javinha</Link>
                    <Link href={ROUTES.home} className="">Javinha</Link>
                    <Link href={ROUTES.home} className="">Javinha</Link>
                </div>
            </div>

        </div>
    );
}