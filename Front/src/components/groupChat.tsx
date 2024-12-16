import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface groupChatProps {
    name: string;
}

export const GroupChat: React.FC<groupChatProps> = ({ name }) => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center p-3 gap-2 dark:hover:bg-slate-200 hover:bg-[#505050] ">
                <div className="rounded-full h-2 w-2 dark:bg-black bg-white "></div>
                <p className="text-[14px] font-medium ">{name}</p>
            </div>
            <hr />
        </div>
    );
}