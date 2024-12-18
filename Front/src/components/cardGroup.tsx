import { ROUTES } from "@/constants/routes";
import Image from "next/image";

interface CardGroupProps {
    foto: string;
    name: string;
    description: string;
}

export const CardGroup: React.FC<CardGroupProps> = ({ foto, name, description }) => {

    
    return (
        <div className="w-96 bg-[#242424] dark:bg-slate-100 h-52 justify-between pb-3 rounded-md flex flex-col ps-6 pe-6 pt-3 ">
            <div className="w-full flex flex-col items-center">
                <div className="w-full flex justify-between items-center">
                    <p className="text-[20px]">{name}</p>
                    <Image src={foto} alt="ícone ideia" className="w-8 h-8 rounded-t-3xl m-2"  width={1000} height={1000} />
                </div>
                <div className="flex w-full justify-start">
                    <p className="mt-5 text-[14px]">{description}</p>
                </div>
            </div>
            <a href={ROUTES.group} className="bg-white rounded-lg font-semibold p-1 text-[16px] text-black flex justify-center hover:bg-[#F41C54] hover:text-white transition ease-in-out duration-500 delay-75">Open</a>
        </div>
    );
}