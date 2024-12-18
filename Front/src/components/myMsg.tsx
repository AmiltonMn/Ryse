import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { useDarkMode } from "@/context/darkMode";
import pontos from "@/assets/pontos.png";
import pontosDark from "@/assets/pontosDark.png";
import lixo from "@/assets/trash.png";
import { useState } from "react";
import { api } from "@/constants/api";

interface myMsgProps {
    date: string;
    message: string;
    id: number;
}

export const MyMsg: React.FC<myMsgProps> = ({ date, message, id }) => {

    const [mais, setMais] = useState(false)
    const { darkMode, setDarkMode } = useDarkMode();
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const show = () => {
        setMais(!mais)
    }

    const DeleteMessage = async () => {
            await api.delete(`/topicChat/message/${id}`,
                {
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                })
                .then((res) => {
                    alert("mensagem excluida com sucesso")
                    window.location.reload()
                })
                .catch((e) => {
                    alert(e.response.data.message)
                })
        }

    return (
        <div className="w-full flex justify-end pt-4 pe-4">
            {mais ?
                <div className="flex items-start pt-1 pr-2">
                    <button onClick={DeleteMessage} className="text-[14px] bg-[#e74a4a] rounded-md p-2 hover:bg-[#cc3f3f]">
                        <Image src={lixo.src} alt="like" className="w-5 h-5 " width={1000} height={1000} />
                    </button>
                </div>
                :
                <div></div>
            }
            <div className="max-w-[45%] flex flex-col items-end dark:bg-[#ffffff] bg-[#484848] p-2 ps-3 pe-4 rounded-2xl gap-[2px] group">
                <div className="flex flex-row justify-between w-full gap-2">
                    <button onClick={() => show()} className="w-7 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-white bg-[#313131] rounded-md flex justify-center items-center pl-1 pr-1">
                        <Image src={!darkMode ? pontos : pontosDark} alt={"3 pontos"} className="w-4 h-4 " />
                    </button>
                    <p className="text-[14px]">{message}</p>
                </div>
                <p className="text-[10px]">{date}</p>
            </div>
        </div>
    );
}