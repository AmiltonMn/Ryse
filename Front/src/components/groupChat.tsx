import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/constants/api";

import lixo from "@/assets/trash.png";

interface groupChatProps {
    id: number;
    name: string;
}

export const GroupChat: React.FC<groupChatProps> = ({ name, id }) => {

    const handleClick = () => {
        localStorage.setItem("topicChat", id.toString());
        window.location.reload()
    };

    const DeleteChat = async () => {
        await api.delete(`/topicChat/${id}`,
            {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })
            .then((res) => {
                alert("deletado com sucesso")
                window.location.reload()
            })
            .catch((e) => {
                alert(e.response.data.message)
            })
    }

    const DeleteChatSelected = async () => {

        const response = await api.delete(`/topicChat/${id}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        if (response.status === 200) {
            localStorage.setItem("topicChat", '0');
        } else {
            alert(`Erro: ${response.data.message}`);
        }

    };


    return (
        <div onClick={handleClick} className="w-full">
            <div className="flex flex-col">
                <div className="flex flex-row items-center p-3 gap-2 dark:hover:bg-slate-200 hover:bg-[#505050] group">
                    {localStorage.getItem("topicChat") == id.toString() ?
                        (<div className="flex justify-between items-center w-full">
                            <div className="flex-row flex items-center gap-2">
                                <div className="rounded-[100%] h-2 w-2 bg-[#F41C54]"></div>
                                <p className="text-[14px] font-medium text-[#F41C54]">{name}</p>
                            </div>
                            <button onClick={DeleteChatSelected}>
                                <Image src={lixo} alt="lixo" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110" />
                            </button>
                        </div>) :
                        (<div className="flex justify-between items-center w-full">
                            <div className="flex-row flex items-center gap-2">
                                <div className="rounded-full h-2 w-2 dark:bg-black bg-white "></div>
                                <p className="text-[14px] font-medium ">{name}</p>
                            </div>
                            <button onClick={DeleteChat}>
                                <Image src={lixo} alt="lixo" className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110" />
                            </button>
                        </div>)}

                </div>
                <hr />
            </div>
        </div>
    );
}