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
import search from "@/assets/lupa.png"
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { Checkbox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { api } from "@/constants/api";
import axios from "axios";


interface areasOfInterest {
    areaName: string
    areaOfInterestId: number,
}

interface FeedbacksUserLoged {
    text: string;
    user: {
        id: number;
        name: string;
        username: string;
        photo: string | null;
    };
}

interface hardSkillType {
    name: string;

}


const Profile: React.FC = () => {

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

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };
    const handleFeedbackTabChange = (tab: string) => {
        setFeedbackTab(tab);
    };
    const handleInteractionTabChange = (tab: string) => {
        setInteractionTab(tab);
    };
    const tornar = () => {
        setInstrutor(true)
    }
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

    const [instrutor, setInstrutor] = useState(false)
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
    const [editBio, setEditBio] = useState(false)
    // const [hardSkils, setHardSkils] = useState(false);

    const [hardSkills, sethardSkills] = useState<hardSkillType[]>([])
    const [hardSkillsUser, sethardSkillsUser] = useState<string[]>([])
    const [areasofInterest, setAreasofInterest] = useState<areasOfInterest[]>([])
    const [feedbackSender, setFeedbackSender] = useState<FeedbacksUserLoged[]>([])
    const [feedbackReceiver, setfeedbackReceiver] = useState<FeedbacksUserLoged[]>([])

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const addAreaInterest = async () => {

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
            const feedbackData: FeedbacksUserLoged[] = response.data.map((item: any) => ({
                text: item.text,
                user: {
                    id: item.user.id,
                    name: item.user.name,
                    username: item.user.username,
                    photo: item.user.photo,
                },
            }));
            setfeedbackReceiver(feedbackData);

        } catch (error) {
            console.error("Erro ao buscar feedbacks recebidos:", error);
        }
    };




    const [file, setFile] = useState<File | null>(null);
    const [filename, setFilename] = useState<string>("");
    const [imageUrl, setImageUrl] = useState<string | null>("");
    const [publicId, setPublicId] = useState<string>("");


    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setFilename(event.target.files[0].name);
        }
    };

    // // Faz o upload da imagem para o Cloudinary
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!file) {
            console.error("No file selected");
            return;
        }
        const uniqueid =  `${name}Perfil-${Date.now()}`;
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "sla-api");
        formData.append("public_id", uniqueid);

        try {
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dxunnhglr/image/upload",
                formData
            );

            console.log(response.data);
            setImageUrl(response.data.secure_url); // Atualiza a URL da imagem
            roter.refresh();
        } catch (error) {
            console.error(error);
        }
        try {
            const response = await api.post(`/perfil/Photo?photo=${uniqueid}`,null,{
                headers: {
                  "Authorization": localStorage.getItem("token")
                }
              })
            console.log(response);
          } catch (error) {
            console.log("erro ao dar fecth", error)
          }
        
         
          
    };

    // Busca a URL da imagem com base no publicId
    const fetchImageUrl = async (publicId: string) => {
        console.log("public id do fetch", publicId);
        
        try {
            const response = await axios.get(
                `https://res.cloudinary.com/dxunnhglr/image/upload/${publicId}`,
                { responseType: "arraybuffer" }
            );
            console.log("opa",response);
            
            const base64 = Buffer.from(response.data, "binary").toString("base64");
            return `data:image/png;base64,${base64}`;
        } catch (error) {
            console.error("Falha ao buscar a URL da imagem. Detalhes:", error);
            return null;
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
                setPublicId("user")
                console.log(publicId);
                
            } else {
                setPublicId(res.data.info.photo)
                console.log(publicId);
            }
            setName(res.data.info.name)
            setUsername(res.data.info.username)

        })

        getFeedbackReceiver();
        getFeedbackSender();

    }, [])

    useEffect(() => {

    }, [feedbackReceiver, feedbackSender])

    useEffect(() => {
        const loadImage = async () => {
            console.log("sera que é",publicId);
            
            const url = await fetchImageUrl(publicId);
            console.log("opa123",url);
            
            setImageUrl(url);
        };

        if (publicId) {
            loadImage();
        }
    }, [publicId]);

    return (
        <>
            <Menu title={"Ryse"} />
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"} hardSkills={"Hard Skills"} events={"Events"} news={"News"} />


            <div className="pt-24 pl-[320px] pr-[70px] flex flex-col text-white">
                <div className="font-medium text-[16px] flex justify-between flex-row pb-8">
                    <div className="flex">
                        <SelectProfile refe="#" title="Profile" click={() => handleTabChange("profile")} classe={activeTab == "profile" ? "underline decoration-4" : ""} />
                        <SelectProfile refe="#" title="FeedBacks" click={() => handleTabChange("feed")} classe={activeTab == "feed" ? "underline decoration-4" : ""} />
                        <SelectProfile refe="#" title="Interaction" click={() => handleTabChange("interaction")} classe={activeTab == "interaction" ? "underline decoration-4" : ""} />
                    </div>
                    {
                        instrutor ?
                            <p className="text-[#F41C54] text-[16px] bg-white pl-2 pr-2 rounded-md font-semibold">Instrutor</p>
                            :
                            <button onClick={() => tornar()} className="bg-[#F41C54] hover:bg-white text-white hover:text-[#F41C54] transition-colors duration-500 delay-75 pl-2 pr-2 rounded-md">Tornar Instrutor</button>
                    }
                </div>

                <div className="flex">
                {imageUrl && ( <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={imageUrl} name={name} username={username} />)}
                {!imageUrl && ( <CardProfile click={modalPhoto} imageCover={cover.src} imageProfile={profile.src} name={name} username={username} />)}
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
                            feedbackReceiver.map((item, index) => (
                                <CardFeed key={index} imageFeed={profile.src} name={item.user.name} username={item.user.username} feedback={item.text} />))


                        ) : (
                            feedbackSender.map((item, index) => (
                                <CardFeed key={index} imageFeed={profile.src} name={item.user.name} username={item.user.username} feedback={item.text} />))

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

                                {hardSkills.map((skill, index) => (
                                    <SelectHardSkils
                                        text={skill.name}  // Pass skill.name here
                                        key={index}       // Or key={skill.id} if you have unique IDs
                                        click={() => handleSkillClick(skill.name)} // Pass skill.name to the handler
                                        classe={selectedSkills.includes(skill.name)} // Check against skill.name
                                    />
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
            <div className={modalSkils ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
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
                    </div>
                </div>
            </div>

            {/* Modal edit photo */}
            <div className={modalPhotos ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-medium text-center">Edit data</h2>
                        <form className="flex flex-col" onSubmit={handleSubmit} >

                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-full mt-8">
                                    <input type="file" className="hidden" id="fileProfileCover" />
                                    <Image className="absolute w-full  h-[100px] object-cover rounded-sm cursor-pointer" src={cover} width={200} height={200} alt="Image Cover" onClick={() => handleClick("fileProfileCover")} ></Image>
                                    <div>
                                        <input type="file" className="hidden" id="fileProfileProfile" onChange={handleFileChange} />
                                        <div className="...">  {/* Parent div for the image */}
                                            {imageUrl && ( // Only render Image if imageUrl is truthy (not null)
                                                <Image
                                                    className="absolute w-[100px] rounded-full top-12 ml-8 transition ease-in-out delay-150 cursor-pointer"
                                                    src={imageUrl}
                                                    width={170}
                                                    height={170}
                                                    alt="Image Profile"
                                                    onClick={() => handleClick("fileProfileProfile")}
                                                />
                                            )}
                                            {!imageUrl && <Image
                                                    className="absolute w-[100px] rounded-full top-12 ml-8 transition ease-in-out delay-150 cursor-pointer"
                                                    src={profile}
                                                    width={170}
                                                    height={170}
                                                    alt="Image Profile"
                                                    onClick={() => handleClick("fileProfileProfile")}
                                                />}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col mt-32">
                                <label htmlFor="" className="mt-8">Name</label>
                                <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                                <label htmlFor="" className="mt-8">Username</label>
                                <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                                <label htmlFor="" className="mt-8">Email</label>
                                <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" ></input>
                            </div>

                        <div className="flex justify-between mt-10">
                            <button type="submit" onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button type="submit" onClick={() => setModalSkils(false)} className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;


