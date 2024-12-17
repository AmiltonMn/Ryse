import del from "@/assets/delete.png";
import delBranco from "@/assets/deletebranco.png";
import { api } from "@/constants/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const TopicArea = ({ text, refe, idAreaInterest }: {

    text: string;
    refe: string;
    idAreaInterest: number

}) => {

    const router = useRouter()
    const removeAreaofInterest = async () => {
        
        try {
            const response = await api.delete(`/profile/areaOfInterest/${idAreaInterest}`,{
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            })
            router.refresh();
          } catch (error) {
            console.log("erro ao dar fecth", error)
          }
    } 
    return (

        <>
            <div className="group/item flex flex-row border-0 rounded-[10px] justify-between mr-20 hover:bg-[#292929] p-2 items-center">
                <div>
                    <h1 className="font-light text-[16px]">• {text}</h1>
                </div>
                <a href={refe} className="group/edit invisible group-hover/item:visible transition duration-300 ease-in-out scale-100 flex flex-row hover:bg-[#383838] p-1 px-2 border-0 rounded-lg">
                    <Image src={del.src} width={20} height={20} alt="Delete area of interest" onClick={async () => removeAreaofInterest()}></Image>
                </a>
            </div>
        </>
    );

}