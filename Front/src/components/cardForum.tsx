import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardForumProps {
    forumId: number;
    userPhoto: string;
    username: string;
    date: string;
    title: string;
    questions: number
}

export const CardForum: React.FC<CardForumProps> = ({ forumId, userPhoto, username, date, title, questions}) => {

    const router = useRouter();

    const setId = (forumId: number) => {
        localStorage.setItem("forum", forumId.toString());
        router.push(ROUTES.forum);
    }
    
    return(
        <div onClick={() => setId(forumId)} className="w-full">
            <div className="bg-[#242424] rounded-[10px] text-white flex flex-col hover:bg-[#292929] p-6">
                <div className="flex justify-between items-center">
                    <h3 className="text-[16px]">{title}</h3>
                    <div className="flex mr-6">
                        <Image src={userPhoto} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl mr-6 mt-6" width={1000} height={1000} unoptimized/>
                        <div className="flex flex-col justify-center pt-6 gap-2">
                            <h4 className="text-[14px]">{username}</h4>
                            <p className="text-[12px]">{date}</p>
                        </div>
                    </div>
                </div>
                <p className="flex pb-3 text-[12px]">{questions} questions</p>
            </div>
        </div>
    );
}