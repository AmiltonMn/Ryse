
export const SelectHardSkils = ({ text, click, classe }: {

    text: string;
    click: Function;
    classe: boolean;

}) => {

    return (

        <>
            <a href="" onClick={(event) => {
                event.preventDefault();
                click(text);
            }}>
                <div className={`text-white dark:text-black rounded-full border-2 border-[#F41C54] flex justify-start items-center w-32 h-10 pl-2 transition duration-300 ease-in-out hover:scale-110 ${classe ? "bg-[#F41C54] dark:text-white" : "" }`}>
                    <h1 className="font-light text-[16px] transition duration-300 ease-in-out" >{text}</h1>
                </div>
            </a>
        </>
    );

}