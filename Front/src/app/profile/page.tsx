"use client"

import { DarkModeProvider } from "@/context/darkMode";
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
import { SelectHardSkils } from "@/components/selectHardSkils";
import { CardLike } from "@/components/cardLike";
import profile from "@/assets/saiba.jpeg";
import cover from "@/assets/cover.png";
import edita from "@/assets/edita.png";
import editaDark from "@/assets/editaDark.png";
import Image from "next/image";
import edtPerfil from "@/assets/edtPerfil.jpg"
import search from "@/assets/lupa.png"
import searchDark from "@/assets/lupaBlack.png"
import { useDarkMode } from "@/context/darkMode";

const Profile: React.FC = () => {

    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const [instrutor, setInstrutor] = useState(false)
    const [activeTab, setActiveTab] = useState("profile");
    const [text, setText] = useState("");
    const [feedbackTab, setFeedbackTab] = useState("received");
    const [interactionTab, setInteractionTab] = useState("likes");
    const editableRef = useRef<HTMLInputElement>(null);
    const [modalAreaa, setModalArea] = useState(false);
    const [modalSkils, setModalSkils] = useState(false);
    const [modalPhotos, setModalPhoto] = useState(false);
    const [name, setName] = useState<string>("");
    const [editBio, setEditBio] = useState(false)
    const [hardSkils, setHardSkils] = useState(false);

    const tornar = () => {
        setInstrutor(true)
    }

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    // Select skils

    const handleSkillClick = (skill: string) => {
        setSelectedSkills((prevSkills) => {

            if (prevSkills.includes(skill)) {
                return prevSkills.filter(item => item !== skill);
            } else {
                return [...prevSkills, skill];
            }
        });
    };

    //Edit photos

    const handleClick = (inputId: string) => {
        const fileInput = document.getElementById(inputId) as HTMLInputElement;
        fileInput?.click();
    };

    // Modais

    const closeModal = () => {
        setName("");
        setModalArea(false);
        setModalSkils(false);
        setModalPhoto(false)
    }

    const modalHardSkils = () => {
        setModalSkils(true);
    }

    const modalArea = () => {
        setModalArea(true);
    }

    const modalPhoto = () => {
        setModalPhoto(true);
    }

    // Edit bio

    const handleEdit = () => {
        if (editableRef.current) {
            editableRef.current.focus();
            setEditBio(true)
        }
    }

    const closeEdit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key == 'Enter') {
            event.preventDefault();

            editableRef.current?.blur();
            setEditBio(false)
        }
    }

    // Mudança de tabs

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleFeedbackTabChange = (tab: string) => {
        setFeedbackTab(tab);
    };

    const handleInteractionTabChange = (tab: string) => {
        setInteractionTab(tab);
    };


    const hardSkills = ["Java", "Python", "JavaScript", "React", "Node.js"];

    return (
        <>
                <Menu title={"Ryse"} />
                <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />


                <div className="pt-24 pl-[320px] pr-[70px] flex flex-col text-white dark:text-black">
                    <div className="font-medium text-[16px] flex justify-between flex-row pb-8">
                        <div className="flex">
                            <SelectProfile refe="#" title="Profile" click={() => handleTabChange("profile")} classe={activeTab === "profile" ? "underline decoration-4" : ""} />
                            <SelectProfile refe="#" title="FeedBacks" click={() => handleTabChange("feed")} classe={activeTab === "feed" ? "underline decoration-4" : ""} />
                            <SelectProfile refe="#" title="Interaction" click={() => handleTabChange("interaction")} classe={activeTab === "interaction" ? "underline decoration-4" : ""} />
                        </div>
                        {instrutor ? (
                            <p className="text-[#F41C54] text-[16px] bg-white pl-2 pr-2 rounded-md font-semibold">Instrutor</p>
                        ) : (
                            <button onClick={tornar} className="bg-[#F41C54] hover:bg-white text-white hover:text-[#F41C54] transition-colors duration-500 delay-75 pl-2 pr-2 rounded-md">Tornar Instrutor</button>
                        )}
                    </div>

                    {activeTab === "profile" && (
                        <div>
                            <div className="flex">
                                <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={profile.src} name="Maria Eduarda Santos" username="@maduEduarda" />
                            </div>

                            <div className="flex justify-end">
                                <button onClick={handleEdit}>
                                    <Image src={edita.src} width={17} height={17} alt="Edit biography" />
                                </button>
                            </div>

                            <p
                                contentEditable={editBio}
                                suppressContentEditableWarning={true}
                                className="font-light mt-10 text-[16px] w-full p-1"
                                ref={editableRef}
                                spellCheck="false"
                                onKeyDown={closeEdit}
                            >
                                Oie! Seja bem-vindo(a) ao meu perfil 😁 <br /> <br />
                                Sou a Maria, Engenheira de Software em formação e Técnica de Soluções Digitais na Bosch, com experiência em inovação, transformação digital e análise de dados...
                            </p>

                            <div className="flex flex-row justify-between">
                                <div className="w-2/5">
                                    <div className="flex flex-col pb-8 pt-4">
                                        <div className="flex flex-row items-start">
                                            <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Hard Skills</h1>
                                            <a onClick={modalHardSkils} className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
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
                                        <a onClick={modalArea} className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
                                    </div>
                                    <TopicArea text="Desenvolvimento Web" refe="" />
                                    <TopicArea text="Desenvolvimento Frontend" refe="" />
                                    <TopicArea text="DevOps" refe="" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "feed" && (
                        <div>

                            <div className="flex">
                                <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={profile.src} name="Maria Eduarda Santos" username="@maduEduarda" />
                            </div>

                            <div className="flex justify-end">
                                <button onClick={handleEdit}>
                                    <Image src={edita.src} width={17} height={17} alt="Edit biography" />
                                </button>
                            </div>

                            <div className="font-medium text-[16px] flex flex-row pb-8 pt-4">
                                <SelectProfile refe="#" title="Received" click={() => handleFeedbackTabChange("received")} classe={feedbackTab === "received" ? "underline decoration-4" : ""} />
                                <SelectProfile refe="#" title="Sent" click={() => handleFeedbackTabChange("sent")} classe={feedbackTab === "sent" ? "underline decoration-4" : ""} />
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

                            <div className="flex">
                                <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={profile.src} name="Maria Eduarda Santos" username="@maduEduarda" />
                            </div>

                            <div className="flex justify-end">
                                <button onClick={handleEdit}>
                                    <Image src={edita.src} width={17} height={17} alt="Edit biography" />
                                </button>
                            </div>

                            <div className="font-medium text-[16px] flex flex-row pb-8 pt-4">
                                <SelectProfile refe="#" title="Likes" click={() => handleInteractionTabChange("likes")} classe={interactionTab === "likes" ? "underline decoration-4" : ""} />
                                <SelectProfile refe="#" title="Comments" click={() => handleInteractionTabChange("comments")} classe={interactionTab === "comments" ? "underline decoration-4" : ""} />
                            </div>
                            {interactionTab === "likes" ? (
                                <CardLike name="Mascos Castro" username="@silveiralup" text="Como faz para integrar Java com web?" image={profile.src} />
                            ) : (
                                <div>
                                    <CardCommentProfile image={profile.src} username="@maduEduarda" group="Java Avançado" date="12/01/2015 12:56" text="Como faço um create no database?" />
                                    <CardAnswerProfile
                                        image={profile.src}
                                        username="@maduEduarda"
                                        group="Java Avançado"
                                        date="12/01/2015 12:56"
                                        question="Como faço um create no database?"
                                        imageQuestion={profile.src}
                                        answer="faz isso e talallalala"
                                        usernameQuestion="@marcosCastro"
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>


                {/* Modal Hard Skils */}
                <div className={modalSkils ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                    <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col text-[8px]" >
                        <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                            <h2 className="text-[16px] font-medium">Hard Skils</h2>
                            <div className="flex w-full justify-center items-center mt-4">
                                <input type="text" placeholder="Search" className="text-white dark:text-black text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] dark:bg-slate-50 bg-zinc-800 border border-white dark:border-gray-700 dark:border-[2px]" />
                                <Image src={!darkMode ? search : searchDark} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search" />
                            </div>
                            <form className="flex flex-col">
                                <div className="flex flex-wrap order-4 gap-4 pt-6">

                                    {/* Aqui implementação de comparção quando estive integrado */}

                                    {hardSkills.map((skill) => (

                                        <SelectHardSkils text={skill} key={skill} click={handleSkillClick} classe={selectedSkills.includes(skill)} />

                                    ))}
                                </div>
                            </form>
                            <div className="flex justify-between mt-10">
                                <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                                <button onClick={() => setModalArea(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal areas of interest */}
                <div className={modalAreaa ? "fixed inset-0 flex items-center justify-center text-white dark:text-black bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                    <div className="bg-zinc-800 dark:bg-slate-50 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                        <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                            <h2 className="text-xl font-medium text-center">Add area of interrest</h2>
                            <form className="flex flex-col">
                                <label htmlFor="" className="mt-8">Name</label>
                                <input type="text" placeholder="New area" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                            </form>
                            <div className="flex justify-between mt-10">
                                <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                                <button onClick={() => setModalSkils(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal edit photo */}
                <div className={modalPhotos ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                    <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                        <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                            <h2 className="text-xl font-medium text-center">Edit data</h2>
                            <form className="flex flex-col">

                                <div className="flex flex-col items-center justify-center">
                                    <div className="relative w-full mt-8">
                                        <input type="file" className="hidden" id="fileProfileCover" />
                                        <Image className="absolute w-full  h-[100px] object-cover rounded-sm cursor-pointer" src={cover} width={200} height={200} alt="Image Cover" onClick={() => handleClick("fileProfileCover")} ></Image>
                                        <div>
                                            <input type="file" className="hidden" id="fileProfileProfile" />
                                            <Image className="absolute w-[100px] rounded-full top-12 ml-8 transition ease-in-out delay-150 cursor-pointer" src={profile} width={170} height={170} alt="Image Profile" onClick={() => handleClick("fileProfileProfile")}></Image>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col mt-32">
                                    <label htmlFor="" className="mt-8">Name</label>
                                    <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" value={"usernameModal"}></input>
                                    <label htmlFor="" className="mt-8">Username</label>
                                    <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" value={"usernameModal"}></input>
                                    <label htmlFor="" className="mt-8">Email</label>
                                    <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" value={"usernameModal"}></input>
                                </div>

                            </form>
                            <div className="flex justify-between mt-10">
                                <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                                <button onClick={() => setModalSkils(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Profile;


