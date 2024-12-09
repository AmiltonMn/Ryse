import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardQuestionProps {
    linkQuestion: string;
    userPhoto: string;
    username: string;
    date: string;
    topic: string;
    question: string;
    answers: number
}

export const CardQuestion: React.FC<CardQuestionProps> = ({linkQuestion, userPhoto, username, date, topic, question, answers}) => {
    return(
        <Link href={linkQuestion} className="w-full">
            <div className="bg-[#242424] rounded-[10px] text-white ">
                <div className="flex justify-between p-4">
                    <div className="flex">
                        <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                        <div>
                            <h4>{username}</h4>
                            <p className="text-[12px]">{date}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[#F41C54] font-bold bg-[#D9D9D9] p-1 pr-5 pl-5 rounded-[10px] text-[14px]">{topic}</h3>
                    </div>
                </div>

                <div className="pl-8 pt-3 text-[14px]">
                    <p>{question}</p>
                </div>

                <p className="flex justify-end pr-6 pb-4">{answers} answers</p>
            </div>
        </Link>
    );
}