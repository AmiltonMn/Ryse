import { ROUTES } from "@/constants/routes";
import Image from "next/image";

import google from "@/app/assets/google.png";

export default function Login() {

    const style =
    {
        main: "min-h-screen w-full bg-[#1E1E1E] flex justify-center items-center",
        inputz: "rounded-md p-1 ps-3 text-base w-full bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
        imagen: "w-7 h-7 rounded-t-3xl m-2",
    }

    return (
        <>
            <main className={style.main}>
                <form className="text-white h-1/2 w-96 bg-[#242424] rounded-lg border-2 border-[#656565] flex flex-col items-center gap-10 p-10">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[#F41C54] font-semibold text-2xl">Welcome,</h2>
                        <h2 className="font-normal text-2xl">Glad to see you</h2></div>
                    <div className="flex flex-col items-center gap-3  text-black w-11/12 ">
                        <input className={style.inputz} type="email" placeholder="Email" />
                        <input className={style.inputz} type="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="bg-white text-black p-3 rounded w-11/12 font-bold">Login</button>
                    <div className="flex flex-col w-full items-center gap-3">
                        <div className="flex flex-row items-center justify-center gap-4 w-full">
                            <div className="bg-white h-0.5 w-1/4"></div>
                            <h2 className="m-0">Or login with</h2>
                            <div className="bg-white h-0.5 w-1/4" ></div>
                        </div>
                        <div className="flex flex-row justify-between w-11/12 text-black">
                            <button className="bg-white p-1 ps-8 pe-8 rounded">
                                <Image src={google} alt="ícone ideia" className={style.imagen} />
                            </button>
                            <button className="bg-white p-1 ps-8 pe-8 rounded">
                                <Image src={google} alt="ícone ideia" className={style.imagen} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-2">
                        <p>Don't have an account?</p>
                        <a href={ROUTES.register} className="text-[#F41C54] font-normal">Sign Up Now</a>
                    </div>
                </form>
            </main>
        </>
    );
}
