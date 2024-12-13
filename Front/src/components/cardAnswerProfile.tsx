import Image from "next/image";

import like from "@/assets/like.png"

export const CardAnswerProfile = ({ username, usernameQuestion, imageQuestion, image, date, group, answer, question }: {

    question: string;
    date: string;
    username: string;
    imageQuestion: string;
    group: string;
    image: string;
    answer: string;
    usernameQuestion: string;

}) => {

    return (

        <>
            <div className="flex justify-between flex-row">
                <div className="text-white relative flex justify-start align-top items-end">
                    <Image className="absolute w-10 rounded-full " src={imageQuestion} width={150} height={150} alt="Image Profile"></Image>
                    <div className="left-0 top-0 ml-16">
                        <h1 className="text-[15px] text-[#F41C54] font-medium mb-2">{group}</h1>
                        <h1 className="text-[13px] font-medium">{usernameQuestion}</h1>
                    </div>
                    <div className="flex items-end px-8">
                        <h1 className="text-sm font-medium">{question}</h1>
                    </div>
                </div>
                <h1>{date}</h1>
            </div>

            <div className="text-white relative flex justify-start items-center align-top mt-8 ml-14 ">
                <Image className="absolute w-10 rounded-full " src={image} width={150} height={150} alt="Image Profile"></Image>
                <div className="left-0 top-0 ml-16">
                    <h1 className="text-[13px] font-medium">{username}</h1>
                </div>
                <div className="flex items-end px-8">
                    <h1 className="text-sm font-medium">{answer}</h1>
                </div>
            </div>

            <hr className="my-8 border-[0.1] border-white" />

        </>

    );

}