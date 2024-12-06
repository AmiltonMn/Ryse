"use client"

import { CardProfile } from "@/components/cardProfile";
import { SelectProfile } from "@/components/selectProfile";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardFeed } from "@/components/feedbacks";
import { HardSkils } from "@/components/hardSkils";
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

            <div className="pt-24 pl-[320px] pr-[70px] flex flex-col text-white">
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

                {/* Feedbacks */}

                {/* <div className=" font-medium text-[16px] flex flex-row pb-8 pt-4">
                    <SelectProfile refe="#" title="Received"></SelectProfile>
                    <SelectProfile refe="#" title="Sent"></SelectProfile>
                </div>

                {/* <CardFeed imageFeed={profile.src} name="Marcos Castro" username="@silaveiraMarcos" feedback="A primeira impressão que tive de Carol foi muito boa! Desde quando cheguei para trabalhar em nossa área sempre se mostrou muito interessado em aprender e disposto a ajudar como poderia. Seu envolvimento na implementação e desenvolvimento dos projetos digitais na fabricação facilitaram o nosso dia a dia com o planejamento de processo. Acredito que a Carol, por onde estiver, vai agregar muito!"></CardFeed>

                <CardFeed imageFeed={profile.src} name="Marcos Castro" username="@silaveiraMarcos" feedback="A primeira impressão que tive de Carol foi muito boa! Desde quando cheguei para trabalhar em nossa área sempre se mostrou muito interessado em aprender e disposto a ajudar como poderia. Seu envolvimento na implementação e desenvolvimento dos projetos digitais na fabricação facilitaram o nosso dia a dia com o planejamento de processo. Acredito que a Carol, por onde estiver, vai agregar muito!"></CardFeed> */}

                {/* Perfil principal */}

                <div className="flex flex-row justify-between">
                    <div className="w-2/5">
                        <div className="flex flex-col pb-8 pt-4">
                            <div className="flex flex-row">
                                <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Hard Skils</h1>
                                <a className="font-medium text-[20px] pl-4" href="#">+</a>
                            </div>
                            <div className="flex flex-wrap order-4 gap-4 pt-6">
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                                <HardSkils text="Java"></HardSkils>
                            </div>

                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="flex flex-row pb-8 pt-4">
                            <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Areas of interest</h1>
                            <a className="font-medium text-[20px] pl-4" href="#">+</a>
                        </div>
                    </div>
                </div>


            </div>


        </>

    )
}

export default Profile;



