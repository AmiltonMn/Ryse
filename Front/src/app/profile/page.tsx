"use client"


import { useRef, useState } from "react";
import { CardCommentProfile } from "@/components/cardCommentProfile";
import { CardAnswerProfile } from "@/components/cardAnswerProfile";
import { TopicArea } from "@/components/topicArea";
import { CardProfile } from "@/components/cardProfile";
import { SelectProfile } from "@/components/selectProfile";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { CardFeed } from "@/components/cardFeedbacks";
import { HardSkils } from "@/components/hardSkils";
import { CardLike } from "@/components/cardLike";
import profile from "@/assets/saiba.jpeg";
import cover from "@/assets/cover.png";
import edita from "@/assets/edita.png";
import Image from "next/image";


const Profile: React.FC = () => {

    const [activeTab, setActiveTab] = useState("profile");
    const [activeTab, setActiveTab] = useState("profile");
    const [feedbackTab, setFeedbackTab] = useState("received");
    const [interactionTab, setInteractionTab] = useState("likes");
    const editableRef = useRef(null);

    const handleEdit = () => {
        if (editableRef.current) {
            editableRef.current.focus();
        }
    }

    const closeEdit = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            editableRef.current.blur();
        }
    }

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleFeedbackTabChange = (tab: string) => {
        setFeedbackTab(tab);
    };

    const handleInteractionTabChange = (tab: string) => {
        setInteractionTab(tab);
    };

    return (
        <>
            <Menu title={"Ryse"} />
            <Submenu
                home={"Home"}
                chats={"Chats"}
                newGroup={"New group"}
                myGroup={"My groups"}
                chatPrincipal1={"Chat 1"}
                chatPrincipal2={"Chat 2"}
                chatPrincipal3={"Chat 3"}
                newIdea={"New idea"}
                ideas={"Ideas"}
            />

            <div className="pt-24 pl-[320px] pr-[70px] flex flex-col text-white">
                <div className="font-medium text-[16px] flex flex-row pb-8">
                    <SelectProfile refe="#" title="Profile" click={() => handleTabChange("profile")} classe={activeTab == "profile" ? "underline decoration-4" : ""} />
                    <SelectProfile refe="#" title="FeedBacks" click={() => handleTabChange("feed")} classe={activeTab == "feed" ? "underline decoration-4" : ""} />
                    <SelectProfile refe="#" title="Interaction" click={() => handleTabChange("interaction")} classe={activeTab == "interaction" ? "underline decoration-4" : ""} />
                </div>

                <div className="flex">
                    <CardProfile imageCover={cover.src} imageProfile={profile.src} name="Maria Eduarda Santos" username="@maduEduarda" />
                </div>

                <div className="flex justify-end">
                    <button onClick={handleEdit}><Image src={edita.src} width={17} height={17} alt="Edit biography"></Image></button>
                </div>

                <p contentEditable="true" className="font-light mt-10 text-[16px] w-full p-1" ref={editableRef} spellCheck="false" onInput={(e) => setText(e.currentTarget.textContent)} onKeyDown={closeEdit}> 
                    Oie! Seja bem-vindo(a) ao meu perfil 😁 <br /> <br />
                    Sou a Maria, Engenheira de Software em formação e Técnica de Soluções Digitais na Bosch, com experiência em inovação, transformação digital e análise de dados...
                </p>


                {activeTab === "profile" && (
                    <div className="flex flex-row justify-between">
                        <div className="w-2/5">
                            <div className="flex flex-col pb-8 pt-4">
                                <div className="flex flex-row items-start">
                                    <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Hard Skils</h1>
                                    <a className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
                                </div>
                                <div className="flex flex-wrap order-4 gap-4 pt-6">
                                    <HardSkils text="Java" />
                                    <HardSkils text="JavaScript" />
                                    <HardSkils text="React" />
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="flex flex-row pb-4 pt-4 items-start">
                                <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Areas of interest</h1>
                                <a className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
                            </div>
                            <TopicArea text="Desenvolvimento Web" refe="" />
                            <TopicArea text="Desenvolvimento Frontend" refe="" />
                            <TopicArea text="DevOps" refe="" />
                        </div>
                    </div>
                )}

                {activeTab === "feed" && (
                    <div>
                        <div className="font-medium text-[16px] flex flex-row pb-8 pt-4">
                            <SelectProfile refe="#" title="Received" click={() => handleFeedbackTabChange("received")} classe={feedbackTab == "received" ? "underline decoration-4" : ""} />
                            <SelectProfile refe="#" title="Sent" click={() => handleFeedbackTabChange("sent")} classe={feedbackTab == "sent" ? "underline decoration-4" : ""} />
                        </div>

                        {feedbackTab === "received" ? (
                            <CardFeed imageFeed={profile.src} name="Marcos Castro" username="@silaveiraMarcos" feedback="A primeira impressão que tive de Carol foi muito boa..." />
                        ) : (
                            <CardFeed imageFeed={profile.src} name="Silveiarguijkehrio" username="@silaveiraMarcos" feedback="A primeira impressão que tive de Carol foi muito boa..." />
                        )}
                    </div>
                )}

                {activeTab === "interaction" && (
                    <div>
                        <div className="font-medium text-[16px] flex flex-row pb-8 pt-4">
                            <SelectProfile refe="#" title="Likes" click={() => handleInteractionTabChange("likes")} classe={interactionTab == "likes" ? "underline decoration-4" : ""} />
                            <SelectProfile refe="#" title="Comments" click={() => handleInteractionTabChange("comments")} classe={interactionTab == "comments" ? "underline decoration-4" : ""} />
                        </div>

                        {interactionTab === "likes" ? (
                            <CardLike name="Mascos Castro" username="@silveiralup" text="Como faz para integrar Java com web?" image={profile.src} />
                        ) : (
                            <div>
                                <CardCommentProfile image={profile.src} username="@maduEduarda" group="Java Avançado" date="12/01/2015 12:56" text="Como faço um create no database?" />
                                <CardAnswerProfile image={profile.src} username="@maduEduarda" group="Java Avançado" date="12/01/2015 12:56" question="Como faço um create no database?" imageQuestion={profile.src} answer="faz isso e talallalala" usernameQuestion="@marcosCastro" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;
