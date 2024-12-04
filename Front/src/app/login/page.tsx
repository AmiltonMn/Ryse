"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const fetch = async (email: string,password: string) => {
    try {
      const response = await axios.post("http://localhost:8080/login",{
        "email" : email,
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
      main: "min-h-screen w-full bg-black flex justify-center items-center"
    }
  
    return (
      <>
        <main className={style.main}>
          <form className="text-white h-1/2 w-96 bg-slate-700 flex flex-col items-center gap-7 p-10">
            <div className="flex flex-col items-center">
              <h2 className="text-pink-700 font-semibold text-2xl">Welcome,</h2>
              <h2 className="font-normal text-2xl">Glad to see you</h2></div>
            <div className="flex flex-col items-center gap-2 text-black">
              <input type="email" className="rounded p-1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" className="rounded p-1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="button"  onClick={async() => await fetch(email,password)} className="bg-white text-black p-2">Login</button>
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <div className="bg-white h-1 w-1/4"></div>
              <h2 className="m-0">Or login with</h2>
              <div className="bg-white h-1 w-1/4"></div>
            </div>
            <div className="flex flex-row justify-around w-full text-black">
              <button className="bg-white">google</button>
              <button className="bg-white">google</button>
            </div>
            <div className="flex flex-row justify-center gap-2">
              <p>Don't have an account?</p>
              <a href="">Sign Up Now</a>
            </div>
          </form>
        </main>
      </>
    );
  }
  