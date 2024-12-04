import { ROUTES } from "@/constants/routes";

export default function Login() {

    const style =
    {
      main: "min-h-screen w-full bg-[#1E1E1E] flex justify-center items-center"
    }
  
    return (
      <>
        <main className={style.main}>
          <form className="text-white h-1/2 w-96 bg-[#242424] rounded border-2 border-[#656565] flex flex-col items-center gap-7 p-10">
            <div className="flex flex-col items-center">
              <h2 className="text-[#F41C54] font-semibold text-2xl">Welcome,</h2>
              <h2 className="font-normal text-2xl">Glad to see you</h2></div>
            <div className="flex flex-col items-center gap-2 text-black">
              <input/>
              <input/>
            </div>
            <button type="submit" className="bg-white text-black p-2">Login</button>
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
              <a href={ROUTES.register} className="text-[#F41C54] font-normal">Sign Up Now</a>
            </div>
          </form>
        </main>
      </>
    );
  }
  