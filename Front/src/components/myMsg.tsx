import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface myMsgProps {
    date: string;
    message: string;
}

export const MyMsg: React.FC<myMsgProps> = ({ date, message }) => {

    return (
        <div className="w-full flex justify-end pt-4 pe-4 ">
            <div className="max-w-[45%] flex flex-col items-end bg-[#484848] p-2 ps-4 pe-4 rounded-2xl gap-[2px]">
                <p className="text-[1.03rem]">{message}</p>
                <p className="text-[0.63rem]">{date}</p>
            </div>
        </div>
    );
}