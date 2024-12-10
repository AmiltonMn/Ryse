import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import trash from "@/assets/trash.png";

interface TeamListProps {
    foto: string;
    name: string;
}

export const TeamList: React.FC<TeamListProps> = ({ foto, name }) => {

    return (
        <tr className="border-t border-[#D9D9D9]">
            <td className="w-16 p-1">
                <Image src={foto} alt="ícone ideia" className="w-8 h-8 rounded-t-3xl m-2" width={1000} height={1000}/>
            </td>
            <td className="text-start text-[16px]">{name}</td>
            <td className="w-16">
                <button>
                    <Image src={trash} alt="ícone ideia" className="w-5 h-5 rounded-t-3xl m-2 hover:scale-110"/>
                </button>
            </td>
        </tr>
    );
}