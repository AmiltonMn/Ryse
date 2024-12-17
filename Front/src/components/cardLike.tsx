import Image from "next/image";

import like from "@/assets/like.png"

export const CardLike = ({ name, username, text, image}: {

    text: string;
    name: string;
    username: string;
    image: string;

}) => {

    return (

        <>
        <div>
<<<<<<< HEAD
            <div className="w-full text-white dark:text-black relative flex justify-start align-top">
                <Image className="absolute w-10 rounded-full " src={image} width={150} height={150} alt="Image Profile"></Image>
=======
            <div className="w-full text-white relative flex justify-start align-top">
                <Image className="absolute w-10 rounded-full " src={image} width={150} height={150} alt="Image Profile" unoptimized></Image>
>>>>>>> ea10bc347693ad020762fbd3babaac70a4c7b7a8
                <div className="left-0 top-0 ml-12">
                    <h1 className="text-[15px] font-medium">{name}</h1>
                    <h1 className="text-[12px] font-extralight dark:font-normal">{username}</h1>
                </div>
            </div>
            <div className="mt-4 flex justify-between flex-row items-center">
                <h1 className="text-sm font-medium">{text}</h1>
                <Image src={like} width={30} height={30} alt="Like Comment"></Image>
            </div>
             <hr className="my-4 border-[0.1] dark:border-black border-white"/>
        </div>
        </>

    );

}