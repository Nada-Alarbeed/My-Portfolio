import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const LINKS = [
  { link: "#about", text: "About Me" },
  { link: "#work", text: "My Work" },
  { link: "#skills", text: "My Skills" }
];

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleLinkClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className="sm:hidden">
        {isActive ? (
          <IoClose 
            onClick={() => setIsActive(false)} 
            className="text-porcelain text-2xl cursor-pointer hover:text-desert-sand transition-colors duration-300"
          />
        ) : (
          <FaBars 
            onClick={() => setIsActive(true)} 
            className="text-porcelain text-2xl cursor-pointer hover:text-desert-sand transition-colors duration-300"
          />
        )}
      </div>
      {isActive && (
        <nav className="mt-4 sm:hidden absolute top-16 right-4 bg-linear-to-bl from-midnight-violet to-desert-sand   rounded-lg shadow-xl p-4 w-48 z-50 border border-desert-sand/20">
          <ul>
            <li className="flex flex-col gap-3">
              {LINKS.map((e, i) => (
                <a 
                  key={i}
                  href={e.link}
                  onClick={handleLinkClick}
                  className="text-porcelain hover:text-desert-sand duration-300 hover:bg-blackberry-cream/30 rounded-lg p-2 text-center transition-all"
                >
                  {e.text}
                </a>
              ))}
            </li>  
          </ul>
        </nav>
      )}
      <nav className="hidden sm:block">
        <ul>
          <li className="flex justify-center items-center gap-6 text-porcelain text-[1rem]">
            {LINKS.map((e, i) => (
              <div key={i}>
                <a 
                  className="hover:text-desert-sand duration-300 hover:bg-blackberry-cream/30 rounded-lg p-2 transition-all"
                  href={e.link}
                >
                  {e.text}
                </a>
              </div>
            ))}
          </li>  
        </ul>
      </nav>
    </div>
  );
};

export default Menu;