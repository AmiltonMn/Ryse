import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardForumProps {
    linkForum: string;
    userPhoto: string;
    username: string;
    date: string;
    title: string;
    questions: number
}

export const CardForum: React.FC<CardForumProps> = ({linkForum, userPhoto, username, date, title, questions}) => {
    return(
        <Link href={linkForum} className="w-full">
            <div className="bg-[#242424] rounded-[10px] text-white hover:bg-[#292929]">
                <div className="flex justify-between items-center p-6">
                    <h3 className="text-[16px]">{title}</h3>
                    <div className="flex p-2">
                        <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                        <div className="flex flex-col justify-center">
                            <h4 className="text-[14px]">{username}</h4>
                            <p className="text-[12px]">{date}</p>
                        </div>
                    </div>
                </div>
                <p className="flex pl-6 pb-6 text-[14px]">{questions} questions</p>

            </div>
        </Link>
    );
}