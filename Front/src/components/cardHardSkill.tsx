import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface CardHardSkillProps {
    name: string;
}

export const CardHardSkill: React.FC<CardHardSkillProps> = ({ name }) => {

    return (
        <div className="w-72 bg-[#242424] h-12 justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3 cursor-pointer hover:bg-[#F41C54] hover:text-white transition ease-in-out duration-500 delay-75">
            <div className="w-full flex flex-col">
                <p className="text-[16px]">{name}</p>
            </div>
        </div>
    );
}