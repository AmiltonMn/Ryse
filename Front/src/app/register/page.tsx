"use client";

import { ROUTES } from "@/constants/routes";
import { useState } from "react";

export default function Register() {
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [edv, setEdv] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !username.trim() || !email.trim() || !edv.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        setError("");
        window.location.href = ROUTES.home;
    };

    const style = {
        main: "min-h-screen w-full bg-[#1E1E1E] flex justify-center items-center overflow-y-auto max-h-[calc(100vh-10px)]",
        inputz: "rounded-md p-1 ps-3 text-base w-full bg-[#484848] text-white placeholder-[#999999] my-3",
    };

    return (
        <main className={style.main}>
            <form onSubmit={handleSubmit} className="text-white h-1/2 w-96 bg-[#242424] rounded-lg border-2 border-[#656565] flex flex-col items-center gap-5 p-10">
                <div className="flex flex-col items-center"><h2 className="text-[#F41C54] font-semibold text-2xl">Create account,</h2><h2 className="font-normal text-2xl">to get started now!</h2></div>
                <div className="flex flex-col items-center text-black w-11/12">
                    <input className={style.inputz} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className={style.inputz} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="block w-full">
                        <input className="peer mt-3 rounded-md p-1 ps-3 text-base w-full bg-[#484848] text-white placeholder-[#999999] border border-transparent peer-invalid:border-red-600 focus:outline-none"
                            type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className="invisible mb-1 peer-invalid:visible text-red-600 text-sm">Please provide a valid email address.</p>
                    </label>
                    <input className={" mt-0 " + style.inputz} placeholder="EDV" value={edv} onChange={(e) => setEdv(e.target.value)} />
                    <input className={style.inputz} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <div className="border border-red-600 text-red-600 px-2 py-1 rounded w-[90%] text-center">{error}</div>}
                <button type="submit" className="bg-white text-black p-2 rounded w-[90%] font-bold hover:bg-gray-300 transition">Register</button>
                <div className="flex flex-row justify-center gap-2"><p className="text-[14px]">Already have an account?</p><a href={ROUTES.register} className="text-[#F41C54] font-normal text-[14px]">Log in now</a></div>
            </form>
        </main>
    );
  }
  