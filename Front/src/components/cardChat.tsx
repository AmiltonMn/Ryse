import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardChatProps {
    name: string;
}

export const CardChat: React.FC<CardChatProps> = ({ name}) => {

    const limite = 12

    const corte = name.length > limite ? name.slice(0, limite) + '...' : name;

    return (
        <Link href={ROUTES.chat} className="w-52 h-20 justify-center bg-[#262626] items-center rounded-md flex flex-col p-6 gap-5 hover:bg-white hover:text-black transition duration-500">
            <div className="w-full flex flex-col items-center justify-center text-center">
                <p className="text-[20px] font-semibold">{corte}</p>
            </div>
        </Link>
    );
}