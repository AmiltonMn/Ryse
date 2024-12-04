

export const SelectProfile = ({ title, refe}: { title: string; refe: string}) => {
  return (
    <a href={refe} className="relative inline-block overflow-hidden group mr-8">
      <span className="relative z-10">{title}</span>
      <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-[#F41C54] transform transition-all duration-300 group-hover:w-full group-hover:left-0 focus:w-full focus:left-0"></span>
    </a>
  );
};
