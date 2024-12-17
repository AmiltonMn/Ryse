import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

interface groupChatProps {
    id: number;
    name: string;
}

export const GroupChat: React.FC<groupChatProps> = ({ name, id }) => {

    const handleClick = () => {
        localStorage.setItem("topicChat", id.toString());
        window.location.reload()
    };

    return (
        <button onClick={handleClick} className="w-full">
            <div className="flex flex-col">
                <div className="flex flex-row items-center p-3 gap-2 dark:hover:bg-slate-200 hover:bg-[#505050]">
                    {localStorage.getItem("topicChat") == id.toString() ?
                        (<>
                            <div className=" rounded-[100%] h-2 w-2 bg-[#F41C54]"></div>
                            <p className="text-[14px] font-medium text-[#F41C54]">{name}</p>
                        </>) :
                        (<>
                            <div className="rounded-full h-2 w-2 dark:bg-black bg-white "></div>
                            <p className="text-[14px] font-medium ">{name}</p>
                        </>)}

                </div>
                <hr />
            </div>
        </button>
    );
}