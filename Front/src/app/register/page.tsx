"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import google from "@/assets/google.png";
import { api } from "@/constants/api";
import { log } from "console";

export default function Register() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [EDV, setEDV] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [username, setUsername] = useState<string>("")

  const handleNewUser = async () => {
    await api.post("/register",
      {
        "name" : name,
        "email" : email,
        "username" : username,
        "EDV": EDV,
        "password": password
      }, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        alert("Usuário criado com sucesso")
        window.location.reload();
      })
      .catch((e) => {
        alert(e.response.data.message)
      })
  }

    const style =
    {
      main: "min-h-screen w-full bg-zinc-900 flex justify-center items-center",
      inputz: "rounded-md ps-4 text-base w-full bg-[#484848] border-t border-b border-s border-e border-[#999999] text-white placeholder-[#999999]",
      imagen: "w-8 h-8 rounded-t-3xl m-2",
    }
  
    return (
        <>
            <main className={style.main}>
                <form className="text-white h-1/2 w-96 bg-[#242424] rounded-lg border-2 border-[#656565] flex flex-col items-center gap-7 p-10">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[#F41C54] font-semibold text-2xl">Create account,</h2>
                        <h2 className="font-normal text-2xl">to get started now!</h2></div>
                    <div className="flex flex-col items-center gap-3  text-black w-11/12 ">
                        <input className={style.inputz} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input className={style.inputz} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                        <input className={style.inputz} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input className={style.inputz} value={EDV} onChange={(e) => setEDV(e.target.value)} placeholder="EDV" />
                        <input className={style.inputz} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </div>
                    <button onClick={handleNewUser} className="bg-white text-black p-3 rounded w-11/12 font-bold">Sign Up</button>
                    <div className="flex flex-row justify-center gap-2">
                        <p>Already have an account?</p>
                        <a href={ROUTES.login} className="text-[#F41C54] font-normal" >Login Now</a>
                    </div>
                </form>
            </main>
        </>
    );
  }
  