import Image from "next/image";
import edtPerfil from "@/assets/edtPerfil.jpg"
import edtCapa from "@/assets/edtCapa.png"
import { useState } from "react";
import edita from "@/assets/edita.png";


export const CardProfile = ({ imageCover, imageProfile, name, username, click }: {

    imageCover: string;
    imageProfile: string;
    name: string;
    username: string;
    click: Function;

}) => {

    return (
        <>
            <div className="w-full text-white relative dark:text-black ">
                <Image className="absolute w-full  h-[230px] object-cover rounded-sm" src={imageCover} width={200} height={200} alt="Image Cover"></Image>
                <div>
                    <Image className="absolute w-1/8 rounded-full top-36 ml-12 transition ease-in-out delay-150 cursor-pointer" src={imageProfile} width={170} height={170} alt="Image Profile" unoptimized ></Image>
                    <div className="left-0 top-0  mt-60 ml-60">
                        <h1 className="text-[30px] font-medium">{name} <button onClick={(event) => {
                            event.preventDefault();
                            click();
                        }}><Image src={edita.src} width={17} height={17} alt="Edit biography"></Image></button></h1>
                        <h1 className="text-[16px] font-extralight dark:font-normal">{username}</h1>
                    </div>
                </div>

            </div>
        </>
    );

}

{/* <div className="relative w-full mt-4">
                                <Image className="absolute w-full  h-[100px] object-cover rounded-sm" src={cover} width={200} height={200} alt="Image Cover"></Image>
                                <div>
                                    <Image className="absolute w-[100px] rounded-full top-12 ml-8 transition ease-in-out delay-150 cursor-pointer" src={profile} width={170} height={170} alt="Image Profile"></Image>
                                </div>

                            </div> */}