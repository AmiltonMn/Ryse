"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import google from "@/assets/google.png";

export default function Register() {

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [EDV, setEDV] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const fetch = async (name: string, email: string, edv: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:8080/register",{
        "name" : name,
        "email" : email,
        "EDV": edv,
        "password": password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response.data)
    } catch (error) {
      console.error("Erro ao dar fetch", error);
    }
  }

    const style =
    {
      main: "min-h-screen w-full bg-zinc-900 flex justify-center items-center"
    }
  
    return (
      <>
        <main className={style.main}>
          <form className="text-white h-1/2 w-96 bg-zinc-800 flex flex-col items-center gap-7 p-10">
            <div className="flex flex-col items-center">
              <h2 className="text-pink-700 font-semibold text-2xl">Create account,</h2>
              <h2 className="font-normal text-2xl">to get started now!</h2></div>
            <div className="flex flex-col items-center gap-2  text-black">
              <input className="rounded p-1 " placeholder="Name"/>
              <input type="email" className="rounded p-1" placeholder="Email"/>
              <input className="rounded p-1" placeholder="EDV"/>
              <input type="password" className="rounded p-1" placeholder="Password"/>
            </div>
            <button type="submit" className="bg-white text-black p-2 rounded w-1/2">Sign Up</button>
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <div className="bg-white h-0.5 w-1/4"></div>
              <h2 className="m-0">Or Sign Up with</h2>
              <div className="bg-white h-0.5 w-1/4"></div>
            </div>
            <div className="flex flex-row justify-around w-full text-black">
              <button className="bg-white p-3 rounded">google</button>
              <button className="bg-white p-3 rounded">google</button>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <p>Already have an account?</p>
              <a href="" className="text-pink-700 font-normal" >Login Now</a>
            </div>
          </form>
        </main>
      </>
    );
  }
  