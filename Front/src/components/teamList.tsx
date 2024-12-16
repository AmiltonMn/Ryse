import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import trash from "@/assets/trash.png";

interface TeamListProps {
    foto: string;
    name: string;
    openModalfeedback: () => void;
}

export const TeamList: React.FC<TeamListProps> = ({ foto, name, openModalfeedback }) => {

    return (
        <tr className="border-t border-[#D9D9D9]">
            <td className="w-16 p-1">
                <Image src={foto} alt="ícone ideia" className="w-8 h-8 rounded-t-3xl m-2" width={1000} height={1000} />
            </td>
            <td className="text-start text-[16px]">{name}</td>
            <td className="w-16">
                <button onClick={openModalfeedback} className="flex items-center justify-center mr-2 bg-[#F41C54] text-white p-0.5 px-2 rounded-md">
                    Feedback
                </button>
            </td>
            <td className="w-16">
                <button className="flex items-center justify-center">
                    <Image src={trash} alt="ícone ideia" className="w-5 h-5 ml-2 mb-0.5 hover:scale-110" />
                </button>
            </td>
        </tr>
    );
}