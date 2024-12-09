import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface groupChatProps {
    name: string;
}

export const GroupChat: React.FC<groupChatProps> = ({ name }) => {

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center p-3 gap-2  hover:bg-[#505050] ">
                <div className="rounded-[100%] h-3 w-3 bg-[#D9D9D9] "></div>
                <p className="text-[16px] font-medium ">{name}</p>
            </div>
            <hr />
        </div>
    );
}