"use client"

import { CardProfile } from "@/components/cardProfile";
import { SelectProfile } from "@/components/selectProfile";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import Image from "next/image";

import profile from "@/assets/saiba.jpeg"
import cover from "@/assets/cover.png";
import React, { useState } from "react";


const Profile: React.FC = () => {

    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <>

            <Menu title={"Ryse"} />
            interaçãofrecebico
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} />

            <div className="pt-32 pl-[350px] pr-[100px] flex flex-col text-white">
                <div className=" font-medium text-[16px] flex flex-row pb-8">
                    <SelectProfile refe="#" title="Profile"></SelectProfile>
                    <SelectProfile refe="#" title="FeedBacks"></SelectProfile>
                    <SelectProfile refe="#" title="Interaction"></SelectProfile>
                </div>

                <div className="flex">
                    <CardProfile imageCover={cover.src} imageProfile={profile.src} name="Maria Eduarda Santos" username="@maduEduarda"></CardProfile>
                </div>

                <div>
                    <h1 className="font-light mt-10 text-[16px]">Oie! Seja bem-vindo(a) ao meu perfil 😁 <br />  <br /> Sou a Maria, Engenheira de Software em formação e Técnica de Soluções Digitais na Bosch, com experiência em inovação, transformação digital e análise de dados. Minha trajetória inclui o desenvolvimento de automações, transformação digital em linhas de produção diversas, gestão de projetos utilizando metodologias ágeis como Scrum e Kanban, além de colaboração com equipes internacionais para implementação, desenvolvimento e venda de ferramentas digitais.</h1>
                </div>

                <div className=" font-medium text-[16px] flex flex-row pb-8 pt-4">
                    <SelectProfile refe="#" title="Received"></SelectProfile>
                    <SelectProfile refe="#" title="Sent"></SelectProfile>
                </div>



            </div>


        </>

    )
}

export default Profile;



