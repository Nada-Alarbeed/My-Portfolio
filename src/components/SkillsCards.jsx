const SkillsCards = ({ img, title, p }) => {
  return (
    <div className="flex flex-col items-center gap-5 bg-cinnamon/10 p-6 rounded-2xl 
                    shadow-md duration-300 hover:bg-cinnamon/25 hover:shadow-lg 
                    hover:scale-[1.02] border border-cinnamon/20 transition-all
                    hover:border-cinnamon/30">
      
      <div className="w-20 h-20 rounded-full overflow-hidden object-cover flex justify-center items-center">
        <img 
          src={img} 
          alt={`${title} icon`} 
          loading="lazy"
        
        />
      </div>
      
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-[1.2rem] max-w-[85%]">
          {p}
        </p>
      </div>
    </div>
  );
};

export default SkillsCards;