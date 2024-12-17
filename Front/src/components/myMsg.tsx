import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import pontos from "@/assets/pontos.png";
import lixo from "@/assets/trash.png";

interface myMsgProps {
    date: string;
    message: string;
}

export const MyMsg: React.FC<myMsgProps> = ({ date, message }) => {

    return (
        <div className="w-full flex justify-end pt-4 pe-4">
            <Image src={lixo} alt="lixo" className="w-6 h-6 mt-1.5 opacity-0 mr-1"/>
            <div className="max-w-[45%] flex flex-col items-end bg-[#484848] p-2 ps-3 pe-4 rounded-2xl gap-[2px] group">
                <div className="flex flex-row justify-between w-full gap-2">
                    <button className="w-7 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#313131] rounded-md flex justify-center items-center pl-1 pr-1">
                        <Image src={pontos} alt={"3 pontos"} className="w-4 h-4 "/>
                    </button>
                    <p className="text-[14px]">{message}</p>         
                </div>
                <p className="text-[10px]">{date}</p>
            </div>
        </div>
    );
}