
export const HardSkils = ({ text }: {

    text: string;

}) => {

    return (

        <>
            <div className="text-white rounded-full border-2 border-[#F41C54] flex justify-start items-center w-32 h-10 pl-2">
                <h1 className="font-light text-[16px]">{text}</h1>   
            </div>
        </>
    );

}