"use client"

import { ROUTES } from "@/constants/routes";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const style = {
        main: "min-h-screen w-full bg-[#1E1E1E] flex justify-center items-center p-30",
        inputz: "rounded-md p-1 ps-3 text-base w-full bg-[#484848] text-white placeholder-[#999999]",
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        window.location.href = ROUTES.home;
    };

    return (
        <main className={style.main}>
            <form onSubmit={handleSubmit} className="text-white h-1/2 w-96 bg-[#242424] rounded-lg border-2 border-[#656565] flex flex-col items-center gap-7 p-10">
                <div className="flex flex-col items-center">
                    <h2 className="text-[#F41C54] font-semibold text-2xl">Welcome,</h2>
                    <h2 className="font-normal text-2xl">Glad to see you</h2>
                </div>
                <div className="flex flex-col items-center gap-3 text-black w-11/12">
                    <label className="block w-full">
                        <input className="peer rounded-md p-1 ps-3 text-base w-full bg-[#484848] text-white placeholder-[#999999] border border-transparent peer-invalid:border-red-600 focus:outline-none"
                            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className="my-1 invisible peer-invalid:visible text-red-600 text-sm">Please provide a valid email address.</p>
                    </label>
                    <label className="block w-full">
                        <input className={style.inputz} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                {error && <div className="border border-red-600 text-red-600 px-1 py-1 rounded w-[90%] text-center">{error}</div>}
                <button type="submit" className="bg-white text-black p-2 rounded w-[90%] font-bold">Login</button>
                <div className="flex flex-row justify-center gap-2">
                    <p className="text-[14px]">Don't have an account?</p>
                    <a href={ROUTES.register} className="text-[#F41C54] font-normal text-[14px]">Sign Up Now</a>
                </div>
            </form>
        </main>
    );
}
