import Image from "next/image";

import like from "@/assets/like.png"

export const CardCommentProfile = ({ username, text, image, date, group }: {

    text: string;
    date: string;
    username: string;
    image: string;
    group: string;

}) => {

    return (

        <>
            <div className="flex justify-between flex-row">
                <div className="text-white dark:text-black relative flex justify-start align-top items-end
                ">
                    <Image className="absolute w-10 rounded-full " src={image} width={150} height={150} alt="Image Profile"unoptimized ></Image>
                    <div className="left-0 top-0 ml-16">
                        <h1 className="text-[15px] text-[#F41C54] font-medium mb-2">{group}</h1>
                        <h1 className="text-[12px] font-medium">{username}</h1>
                    </div>
                    <div className="flex items-end px-8">
                        <h1 className="text-sm font-medium">{text}</h1>
                    </div>
                </div>
                <h1>{date}</h1>
            </div>
            <hr className="my-6 border-[0.1] dark:border-black border-white" />

        </>

    );

}