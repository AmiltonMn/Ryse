"use client"

import React, { useEffect, useState } from "react";
import { ROUTES } from "@/constants/routes";
import { useRouter } from 'next/navigation'
import Image from "next/image";

<<<<<<< HEAD
=======
import google from "@/assets/google.png";
import { api } from "@/constants/api";

>>>>>>> ea10bc347693ad020762fbd3babaac70a4c7b7a8
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

<<<<<<< HEAD
    const style = {
        main: "min-h-screen w-full bg-[#1E1E1E] flex justify-center items-center p-30 overflow-y-auto max-h-[calc(100vh-10px)]",
        inputz: "rounded-md p-1 ps-3 text-base w-full bg-[#484848] text-white placeholder-[#999999]",
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
=======
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter();
  const fetch = async (email: string,password: string) => {
    console.log("entrou");
    
    try {
      const response = await api.post("/login",{
        "email" : email,
        "password": password
      }, {
        headers: {
          'Content-Type': 'application/json'
>>>>>>> ea10bc347693ad020762fbd3babaac70a4c7b7a8
        }
        setError("");
        window.location.href = ROUTES.home;
    };

    const router = useRouter();
    const fetch = async (email: string,password: string) => {
      console.log("entrou");
      
      try {
        const response = await axios.post("http://localhost:8080/login",{
          "email" : email,
          "password": password
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        localStorage.setItem("token", response.data.message)
        localStorage.setItem("userState", response.data.userState)
        router.push("/home")
      } catch (error) {
        console.log("erro ao dar fecth", error)
      }
    }

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