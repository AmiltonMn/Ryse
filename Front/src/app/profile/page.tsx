"use client"


import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
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
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { Checkbox } from "@headlessui/react";
import { api } from "@/constants/api";
import { useRouter } from "next/navigation";
import axios from "axios";

const Profile: React.FC = () => {

    const [activeTab, setActiveTab] = useState("profile");
    const [text, setText] = useState("");
    const [feedbackTab, setFeedbackTab] = useState("received");
    const [interactionTab, setInteractionTab] = useState("likes");
    const editableRef = useRef(null);
    const [modalAreaa, setModalArea] = useState(false);
    const [modalSkils, setModalSkils] = useState(false);






    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [publicId, setPublicId] = useState<string>("");

    const [hardSkills, sethardSkills] = useState<string[]>([])
    const [hardSkillsUser, sethardSkillsUser] = useState<string[]>([])

    
    const closeModal = () => {
        setName("");
        setModalArea(false);
        setModalSkils(false);
    }

    const modalHardSkils = () => {
        setModalSkils(true);
    }

    const modalArea = () => {
        setModalArea(true);
    }

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




    useEffect(() => {
        api.get(
            "/perfil", 
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            },
        ).then((res) => {
            console.log(res.data)


            sethardSkillsUser(res.data.HardSkillUser)
            console.log(res.data.HardSkillUser)

            sethardSkills(res.data.HardSkills)
            console.log(res.data.HardSkills)

            setBio(res.data.info.bio)

            if (res.data.info.photo === null) {
                setPublicId(`${res.data.info.username}Photo`)
            }else{
                setPublicId(res.data.info.photo)
            }
            setName(res.data.info.name)
            setUsername(res.data.info.username)

            console.log(res.data.info.name);
            console.log(res.data.info.photo);
            console.log(res.data.info.username);
            console.log(res.data.info.bio);

        })
        // const loadImage = async () => {
        //     const url = await fetchImageUrl(publicId);
        //     setImageUrl(url);
        //   };
      
        //   if (publicId) {
        //     loadImage();
        //   }
    }, [])

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
                    <CardProfile imageCover={cover.src} imageProfile={profile.src} name={name} username={username} />
                </div>

                <div className="flex justify-end">
                    <button onClick={handleEdit}><Image src={edita.src} width={17} height={17} alt="Edit biography"></Image></button>
                </div>

                <p contentEditable="true" className="font-light mt-10 text-[16px] w-full p-1" ref={editableRef} spellCheck="false" onInput={(e) => setText(e.currentTarget.textContent)} onKeyDown={closeEdit}>
                    {bio}
                </p>

                {activeTab === "profile" && (
                    <div className="flex flex-row justify-between">
                        <div className="w-2/5">
                            <div className="flex flex-col pb-8 pt-4">
                                <div className="flex flex-row items-start">
                                    <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Hard Skils</h1>
                                    <a onClick={modalArea} className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
                                </div>
                                <div className="flex flex-wrap order-4 gap-4 pt-6">
                                    {hardSkillsUser.map((item, index)=> (<HardSkils text={item} key={index} />))}
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="flex flex-row pb-4 pt-4 items-start">
                                <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Areas of interest</h1>
                                <a onClick={modalHardSkils} className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
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

            {/* Modal Hard Skils */}
            <div className={modalAreaa ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-medium">Hard Skils</h2>
                        <form className="flex flex-col">
                            <div className="scroll-smooth text-[15px] p-4 flex flex-col">

                        {hardSkills.map((item,index)=> (                                
                            <div className="flex flex-row mb-2" key={index}>
                                    <input className="mr-4" type="checkbox" />{item.name}
                                </div>))}
                            </div>
                            </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => setModalArea(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal areas of interest */}
            <div className={modalSkils ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-medium text-center">Add area of interrest</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" placeholder="New area" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => setModalSkils(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;
