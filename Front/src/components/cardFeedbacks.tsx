import Image from "next/image";

export const CardFeed = ({ imageFeed, name, username, feedback }: {

    imageFeed: string;
    name: string;
    username: string;
    feedback: string;

}) => {

    return (

        <>
            <div>
            <div className="w-full text-white relative flex justify-start align-top">
                <Image className="absolute w-12 rounded-full " src={imageFeed} width={170} height={170} alt="Image Profile" unoptimized></Image>
                <div className="left-0 top-0 ml-16">
                    <h1 className="text-[15px] font-medium">{name}</h1>
                    <h1 className="text-[12px] font-extralight">{username}</h1>
                </div>
            </div>
            <div className="mt-6 w-2/4">
                <h1 className="text-sm font-medium">{feedback}</h1>
            </div>
             <hr className="w-2/4 mt-8 mb-8 border-[0.1] border-[#F41C54]"/>
            </div>
        </>
    );

}