import Image from "next/image";

export const CardProfile = ({ imageCover, imageProfile, name, username }: {

    imageCover: string;
    imageProfile: string;
    name: string;
    username: string;

}) => {

    return (

        <>

            <div className="w-full text-white relative ">
                <Image className="absolute w-full  h-[230px] object-cover rounded-sm" src={imageCover} width={200} height={200} alt="Image Cover"></Image>
                <div>
                    <Image className="absolute w-1/8 rounded-full top-36 ml-12" src={imageProfile} width={170} height={170} alt="Image Profile"></Image>
                    <div className="left-0 top-0  mt-60 ml-60">
                        <h1 className="text-[30px] font-medium">{name}</h1>
                        <h1 className="text-[16px] font-extralight">{username}</h1>
                    </div>
                </div>

            </div>
        </>
    );

}