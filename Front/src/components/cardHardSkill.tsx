import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import lixo from "@/assets/trash.png";

interface CardHardSkillProps {
    name: string;
}

export const CardHardSkill: React.FC<CardHardSkillProps> = ({ name }) => {

    return (
        <div className="w-72 dark:bg-slate-200 bg-[#242424] h-12 justify-between pb-3 rounded-md flex flex-row ps-6 pe-6 pt-3 cursor-pointer dark:hover:bg-[#F41C54] hover:bg-[#F41C54] group hover:text-white transition ease-in-out duration-500 delay-75">
            <div className="w-full flex flex-row items-center justify-between">
                <p className="text-[16px]">{name}</p>
                <button className="text-[14px] opacity-0 group-hover:opacity-100 rounded-md p-2 hover:scale-125 transition duration-150 delay-75">
                    <Image src={lixo.src} alt="like" className="w-5 h-5 " width={1000} height={1000} />
                </button> 
            </div>
        </div>
    );
}