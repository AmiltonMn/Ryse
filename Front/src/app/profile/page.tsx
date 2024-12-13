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
import { SelectHardSkils } from "@/components/selectHardSkils";
import { CardLike } from "@/components/cardLike";
import profile from "@/assets/saiba.jpeg";
import cover from "@/assets/cover.png";
import edita from "@/assets/edita.png";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { Checkbox } from "@headlessui/react";

const Profile: React.FC = () => {


    const [activeTab, setActiveTab] = useState("profile");
    const [text, setText] = useState("");
    const [feedbackTab, setFeedbackTab] = useState("received");
    const [interactionTab, setInteractionTab] = useState("likes");
    const editableRef = useRef<HTMLInputElement>(null);
    const [modalAreaa, setModalArea] = useState(false);
    const [modalSkils, setModalSkils] = useState(false);
    const [modalPhotos, setModalPhoto] = useState(false);
    
    const roter = useRouter();
    
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [publicId, setPublicId] = useState<string>("");
        const [editBio, setEditBio] = useState(false)
    const [hardSkils, setHardSkils] = useState(false);
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

    const [hardSkills, sethardSkills] = useState<string[]>([])
    const [hardSkillsUser, sethardSkillsUser] = useState<string[]>([])
    const [areasofInterest, setAreasofInterest] = useState<areasOfInterest[]>([])
    const [feedbackSender, setFeedbackSender] = useState<FeedbacksUserLoged[]>([])
    const [feedbackReceiver, setfeedbackReceiver] = useState<FeedbacksUserLoged[]>([])
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

            editableRef.current.blur();
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



    const addAreaInterest = async () => {
        console.log("teste");

        const text: string = document.getElementById("areaText").value;
        console.log(text);

        try {
            const response = await api.post("/profile/areaOfInterest/newArea", {
                "text": text
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.getItem("token")
                }
            })
            roter.refresh();
        } catch (error) {
            console.log("erro ao dar fecth", error)
        }
    }


    const getFeedbackSender = async () => {
        try {
            const response = await api.get("/feedback/sender", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
    

            const feedbackData: FeedbacksUserLoged[] = response.data.map((item: any) => ({
                text: item.text,
                user: {
                    id: item.user.id,
                    name: item.user.name,
                    username: item.user.username,
                    photo: item.user.photo,
                },
            }));
    
            console.log("Processed Feedback Data:", feedbackData); // Para depuração
            setFeedbackSender(feedbackData);
        } catch (error) {
            console.error("Erro ao buscar feedbacks enviados:", error);
        }
    };
    
    const getFeedbackReceiver = async () => {
        try {
            const response = await api.get("/feedback/receiver", {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
            });
    

                // console.log(response.data);
                

            const feedbackData: FeedbacksUserLoged[] = response.data.map((item: any) => ({
                text: item.text,
                user: {
                    id: item.user.id,
                    name: item.user.name,
                    username: item.user.username,
                    photo: item.user.photo,
                },
            }));
    
            console.log("Processed Feedback Data:", feedbackData); // Para depuração
            setfeedbackReceiver(feedbackData);
            
        } catch (error) {
            console.error("Erro ao buscar feedbacks recebidos:", error);
        }
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
            console.log("Todos os dados", res.data)

            sethardSkillsUser(res.data.HardSkillUser)

            sethardSkills(res.data.HardSkills)

            setAreasofInterest(res.data.areas);

            setBio(res.data.info.bio)

            if (res.data.info.photo === null) {
                setPublicId(`${res.data.info.username}Photo`)
            } else {
                setPublicId(res.data.info.photo)
            }
            setName(res.data.info.name)
            setUsername(res.data.info.username)

        })

        getFeedbackReceiver();
        getFeedbackSender();
    
        
        // const loadImage = async () => {
        //     const url = await fetchImageUrl(publicId);
        //     setImageUrl(url);
        //   };

        //   if (publicId) {
        //     loadImage();
        //   }
    }, [])

useEffect(() => {
    console.log("sla1",feedbackReceiver);
    console.log("sla2",feedbackSender);

 
}, [feedbackReceiver, feedbackSender])




    const addAreaInterest = async () => {
        console.log("teste");

        const text: string = document.getElementById("areaText").value;
        console.log(text);

        try {
            const response = await api.post("/profile/areaOfInterest/newArea", {
                "text": text
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": localStorage.getItem("token")
                }
            })
            roter.refresh();
        } catch (error) {
            console.log("erro ao dar fecth", error)
        }
    }


    const getFeedbackSender = async () => {
        try {
            const response = await api.get("/feedback/sender", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
    

            const feedbackData: FeedbacksUserLoged[] = response.data.map((item: any) => ({
                text: item.text,
                user: {
                    id: item.user.id,
                    name: item.user.name,
                    username: item.user.username,
                    photo: item.user.photo,
                },
            }));
    
            console.log("Processed Feedback Data:", feedbackData); // Para depuração
            setFeedbackSender(feedbackData);
        } catch (error) {
            console.error("Erro ao buscar feedbacks enviados:", error);
        }
    };
    
    const getFeedbackReceiver = async () => {
        try {
            const response = await api.get("/feedback/receiver", {
                headers: {
                    "Authorization": localStorage.getItem("token"),
                },
            });
    

                // console.log(response.data);
                

            const feedbackData: FeedbacksUserLoged[] = response.data.map((item: any) => ({
                text: item.text,
                user: {
                    id: item.user.id,
                    name: item.user.name,
                    username: item.user.username,
                    photo: item.user.photo,
                },
            }));
    
            console.log("Processed Feedback Data:", feedbackData); // Para depuração
            setfeedbackReceiver(feedbackData);
            
        } catch (error) {
            console.error("Erro ao buscar feedbacks recebidos:", error);
        }
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
            console.log("Todos os dados", res.data)

            sethardSkillsUser(res.data.HardSkillUser)

            sethardSkills(res.data.HardSkills)

            setAreasofInterest(res.data.areas);

            setBio(res.data.info.bio)

            if (res.data.info.photo === null) {
                setPublicId(`${res.data.info.username}Photo`)
            } else {
                setPublicId(res.data.info.photo)
            }
            setName(res.data.info.name)
            setUsername(res.data.info.username)

        })

        getFeedbackReceiver();
        getFeedbackSender();
    
        
        // const loadImage = async () => {
        //     const url = await fetchImageUrl(publicId);
        //     setImageUrl(url);
        //   };

        //   if (publicId) {
        //     loadImage();
        //   }
    }, [])

useEffect(() => {
    console.log("sla1",feedbackReceiver);
    console.log("sla2",feedbackSender);

 
}, [feedbackReceiver, feedbackSender])



    const hardSkills = ["Java", "Python", "JavaScript", "React", "Node.js"];

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
                    <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={profile.src} name={name} username={username} />
                </div>

                <div className="flex justify-end">
                    <button onClick={handleEdit}><Image src={edita.src} width={17} height={17} alt="Edit biography"></Image></button>
                </div>

                <p contentEditable={editBio} suppressContentEditableWarning={true} className="font-light mt-10 text-[16px] w-full p-1" ref={editableRef} spellCheck="false" onKeyDown={closeEdit}>
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
                                    {hardSkillsUser.map((item, index) => (<HardSkils text={item} key={index} />))}
                                </div>
                            </div>
                        </div>
                        <div className="w-2/5">
                            <div className="flex flex-row pb-4 pt-4 items-start">
                                <h1 className="font-medium text-[16px] flex flex-row underline underline-offset-4 decoration-[#F41C54] decoration-2">Areas of interest</h1>
                                <a onClick={modalHardSkils} className="font-medium text-[20px] pl-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:text-[#F41C54] duration-200" href="#">+</a>
                            </div>
                            {areasofInterest.map((item) => (
                                <TopicArea key={item.areaOfInterestId} text={item.areaName} refe="" idAreaInterest={item.areaOfInterestId} />
                            ))}
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
                            feedbackReceiver.map((item, index )=> (                            
                            <CardFeed key={index} imageFeed={profile.src} name={item.user.name} username={item.user.username} feedback={item.text} />))  


                        ) : (
                            feedbackSender.map((item,index )=> (                            
                                <CardFeed  key={index} imageFeed={profile.src} name={item.user.name} username={item.user.username} feedback={item.text} />))  
                           
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
            <div className={modalSkils ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col text-[8px]" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-[16px] font-medium">Hard Skils</h2>
                        <div className="flex w-full justify-center items-center mt-4">
                            <input type="text" placeholder="Search" className="text-white text-[14px] p-1.5 pl-4 rounded-2xl w-[100%] bg-zinc-800 border border-white" />
                            <Image src={search} alt="" className="w-5 h-5 relative right-8 cursor-pointer" id="search" />
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
            <div className={modalAreaa ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-medium text-center">Add area of interrest</h2>
                        <form className="flex flex-col" onSubmit={() => {
                            addAreaInterest()
                        }}>
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" id="areaText" placeholder="New area" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                            <div className="flex justify-between mt-10">
                                <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                                <button type="submit" onClick={() => setModalSkils(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                            </div>
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


