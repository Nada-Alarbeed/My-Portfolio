const SocialLink = ({ link, icon, color }) => {
  return (
    <a href={link} target="_blank" 
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 transform hover:scale-110 bg-white/20 
        ${color}
        text-white
      `}
    >
      {icon}
    </a>
  );
};

export default SocialLink;