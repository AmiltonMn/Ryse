import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardForumProps {
    linkQuestion: string;
    userPhoto: string;
    username: string;
    date: string;
    topic: string;
    question: string;
    answers: number
}

export const CardForum: React.FC<CardForumProps> = ({linkQuestion, userPhoto, username, date, topic, question, answers}) => {
    return(
        <Link href={linkQuestion} className="w-full">
            <div className="bg-[#242424] rounded-[10px] mt-16  text-white ">
                <div className="flex justify-between p-6">
                    <div className="flex">
                        <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                        <div>
                            <h4>{username}</h4>
                            <p className="text-[14px]">{date}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#F41C54] font-bold bg-[#D9D9D9] p-1 pr-5 pl-5 rounded-[10px]">{topic}</h3>
                    </div>
                </div>

                <div className="pl-8 pt-3 text-[20px]">
                    <p>{question}</p>
                </div>

                <p className="flex justify-end p-6">{answers} answers</p>
            </div>
        </Link>
    );
}