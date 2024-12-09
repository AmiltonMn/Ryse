import { CardForum } from "@/components/cardForum";
import { Menu } from "@/components/menu";
import { Submenu } from "@/components/submenu";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";

import { CardAnswer } from "@/components/cardAnswer";
import iconProfile from "@/assets/user.png"
import search from "@/assets/lupaBlack.png"
import iconMore from "@/assets/mais.png";

const styles = {
    chat: "p-2 mt-6 rounded-[10px] border-[#4B4B4B] border-[0.5px] w-full "
}

export default function Question() {

    return (
        <div>
            <Menu title={"Ryse"}/>
            <Submenu home={"Home"} chats={"Chats"} newGroup={"New group"} myGroup={"My groups"} chatPrincipal1={"Chat 1"} chatPrincipal2={"Chat 2"} chatPrincipal3={"Chat 3"} newIdea={"New idea"} ideas={"Ideas"}/>
            <div className="pt-[180px] pl-[300px] flex">
                <div className="w-[97%]">
                    <div className="flex justify-between">
                        <h2 className="text-white font-bold text-[25px] mb-6">AAAA as fhsdjkfhsdjhgfjksdhgjs  sdjfbdsjbvjksdbv iasfeufsknvnsxmncz</h2>
                        <div className="flex text-white">
                            <Image src={iconProfile} alt="ícone notificação" className="w-9 h-9 rounded-t-3xl m-2 mr-6" width={1000} height={1000}/>
                            <div>
                                <h4>Ingrid</h4>
                                <p className="text-[14px]">12/12/2012</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="bg-[#242424] rounded-[10px] mt-16  text-white p-12 text-[20px]">
                        <p>AAAA FDDDDDDDDDDDDDDD SSSSSSSSS DDDDDDDDDDDDDD RRRRRRR akfojdsogfjosdj ogkodjs gjskdjgkd jksjkdesjgk sjdgjfdkhgldfklh slkdlfk lkghfdjjhglsdkfsdl lgklsdklgk slsljfjdghj jhjas jgksdkgru ngnskerutidrjgbjdkjfkgjd sitoerki otkirg?</p>
                    </div>
                    <div className="flex flex-col justify-center text-white mt-16 m-16">
                        <div className="flex justify-between">
                            <h3 className="font-bold text-[18px]">Answers</h3>
                            <div className="flex items-center">
                                <p className="pr-12">0 answers</p>
                                <div>
                                    <h3 className="text-[#F41C54] font-bold bg-[#D9D9D9] p-1 pr-5 pl-5 rounded-[10px]">Frontend</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CardAnswer userPhoto={iconProfile.src} username={"Ingrid Rocha"} date={"12/12/2023"} answer={"aaaaaaaaaa"}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}