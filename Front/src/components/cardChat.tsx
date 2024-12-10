import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardChatProps {
    name: string;
}

export const CardChat: React.FC<CardChatProps> = ({ name}) => {

    return (
        <Link href={ROUTES.chat} className="w-48 justify-center bg-[#262626] items-center pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3 gap-5 hover:bg-white hover:text-black transition duration-500">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <p className="text-[20px] font-semibold">{name}</p>
            </div>
        </Link>
    );
}