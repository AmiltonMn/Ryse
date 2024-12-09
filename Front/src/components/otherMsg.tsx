import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface otherMsgProps {
    foto: string;
    name: string;
    date: string;
    message: string;
}

export const OtherMsg: React.FC<otherMsgProps> = ({ foto, name, message, date }) => {

    return (
        <div className="w-full items-center flex flex-row justify-start pt-4 ps-4 ">

            <div className="max-w-[45%] flex flex-row items-start">

                <Image src={foto} alt="ícone ideia" className="rounded-[100%] h-9 w-9 min-h-9 min-w-9 bg-[#484848] mt-2" width={1000} height={1000}/>
                <div className="flex flex-col items-start p-2 rounded-2xl gap-[2px] ps-2 pe-2 ms-2 bg-[#484848] ">
                    <p className="text-[0.8rem]">{name}</p>
                    <p className="text-[1.03rem]">{message}</p>
                    <div className="flex w-full justify-end">
                        <p className="text-[0.63rem]">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}