import Image from "next/image";
import edtPerfil from "@/assets/edtPerfil.jpg"
import edtCapa from "@/assets/edtCapa.png"
import { useState } from "react";
import edita from "@/assets/edita.png";


export const CardProfile = ({ imageCover, imageProfile, name, username }: {

    imageCover: string;
    imageProfile: string;
    name: string;
    username: string;

}) => {

    const [modal, setModal] = useState(false);
    const [nameModal, setName] = useState<string>("");
    const [usernameModal, setUsername] = useState<string>("");

    const [disable, setDisable] = useState(false);


    const closeModal = () => {
        setModal(false);
    }
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const editName = () => {
        setModal(true);
        setDisable(!disable);
        setName(name);
        setUsername(username)

    };

    const handleClick = () => {
        document.getElementById("fileProfile").click();
    }

    return (
        <>
            <div className="w-full text-white relative ">
                <Image className="absolute w-full  h-[230px] object-cover rounded-sm" src={imageCover} width={200} height={200} alt="Image Cover"></Image>
                <div>
                    <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
                        <Image className="absolute w-1/8 rounded-full top-36 ml-12 transition ease-in-out delay-150 cursor-pointer" src={isHovered ? edtPerfil : imageProfile} width={170} height={170} alt="Image Profile"></Image>
                        <input type="file" className="hidden" id="fileProfile"/>
                    </div>
                    <div className="left-0 top-0  mt-60 ml-60">
                        <h1 className="text-[30px] font-medium">{name} <button onClick={editName}><Image src={edita.src} width={17} height={17} alt="Edit biography"></Image></button></h1>
                        <h1 className="text-[16px] font-extralight">{username}</h1>
                    </div>
                </div>

            </div>

            <div className={modal ? "fixed inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 z-50" : "hidden disabled z-0 opacity-0"}>
                <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-medium text-center">Edit names</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Name</label>
                            <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" value={nameModal} onChange={(e) => { setName(e.target.value) }} ></input>
                            <label htmlFor="" className="mt-8">Username</label>
                            <input type="text" placeholder="Forum name" className="border-2 rounded-[5px] p-1 mt-2 text-[13px] text-zinc-900" value={usernameModal} onChange={(e) => { setUsername(e.target.value) }} ></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
                            <button onClick={() => setModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}