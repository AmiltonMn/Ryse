// import { ROUTES } from "@/constants/routes";
// import Link from "next/link";
// import Image from "next/image";

// import heart from "@/assets/coracao.png"
// import lampadaVermelha from "@/assets/lampadaVermelha.png"
// import lampadaAmarela from "@/assets/lampadaAmarela.png"
// import lampadaVerde from "@/assets/lampadaVerde.png"


// interface ModalNotificationProps {
//     userPhoto: string;
//     username: string;
//     date: string;
//     title: string;
//     state: number;
// }

// export const ModalNotification: React.FC<ModalNotificationProps> = ({userPhoto, username, date, title, state}) => {

// const [title, setstate] = useState();

//     return(
//                 <div className="bg-zinc-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
//                     <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
//                         <h2 className="text-xl font-semibold">New question</h2>
//                         <form className="flex flex-col">
//                             <label htmlFor="" className="mt-8">Title</label>
//                             <input type="text" placeholder="Forum title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={title} onChange={(e) => { setTitle(e.target.value) }} ></input>
//                             <label htmlFor="" className="mt-8">Text</label>
//                             <input type="text" placeholder="Forum text" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={text} onChange={(e) => { setText(e.target.value) }} ></input>
//                             <label htmlFor="" className="mt-8">Topic ID</label>
//                             <input type="text" placeholder="Topic id" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]" value={topic} onChange={(e) => { setTopic(e.target.value) }} ></input>
//                         </form>
//                         <div className="flex justify-between mt-10">
//                             <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancelar</button>
//                             <button onClick={() => setModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
//                         </div>
//                     </div>
//                 </div>
//     );
// }