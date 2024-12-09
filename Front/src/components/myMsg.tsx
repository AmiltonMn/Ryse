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
                <div className="flex flex-row justify-between w-full gap-2">
                    <p className="text-[14px]">{message}</p>
                </div>
                <p className="text-[10px]">{date}</p>
            </div>
        </div>
    );
}