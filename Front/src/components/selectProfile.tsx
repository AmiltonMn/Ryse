export const SelectProfile = ({ title, refe, click, classe}: { title: string; refe: string; click: Function; classe: string}) => {
  return (
    <a href={refe} className="relative inline-block overflow-hidden group mr-8"  onClick={(event) => { event.preventDefault(); 
      click();}}>
      <span className="relative z-10">{title}</span>
      <span className={`absolute left-1/2 bottom-0 w-0 h-[3px] bg-[#F41C54] transform transition-all duration-300 group-hover:w-full group-hover:left-0 focus:w-full focus:left-0 ${classe ? classe : "" } ${classe ? "w-full -left-[0.01px]" : "" }`} ></span>
    </a>
  );
};
