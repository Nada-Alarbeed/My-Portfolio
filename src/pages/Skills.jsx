import Title from "../components/Title";
import SkillsCards from "../components/SkillsCards";
import { GiFastArrow } from "react-icons/gi";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import tailwindCss from "../assets/tailwindCss.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import github from "../assets/github.webp";
import cyberSecurity from "../assets/cybersecurity.webp";

const CARDS = [
  {
    img: html,
    title: "HTML",
    p: "Building dynamic web pages with semantic HTML structure, ensuring accessibility and SEO optimization."
  },
  {
    img: css,
    title: "CSS",
    p: "Crafting visually appealing UI components with CSS, utilizing flexbox, grid, and responsive design principles."
  },
  {
    img: tailwindCss,
    title: "Tailwind CSS",
    p: "Streamlining CSS development with Tailwind, leveraging its utility-first approach for rapid prototyping."
  },
  {
    img: js,
    title: "JS",
    p: "Writing efficient, modular JavaScript code for dynamic web applications, utilizing modern syntax and best practices."
  },
  {
    img: react,
    title: "React",
    p: "Building reusable, component-driven UIs with React, utilizing hooks, context API, and optimized rendering techniques."
  },
  {
    img: github,
    title: "Git & Github",
    p: "Managing code versions and collaboration using Git & Github, employing branching strategies and pull requests for effective teamwork."
  },
  {
    img: cyberSecurity,
    title: "Cyber Security",
    p: "Developing cybersecurity awareness to integrate security thinking into every project. Even basic security knowledge helps prevent common vulnerabilities and builds trust with clients."
  }
];

 const Skills = () => {
  return (
    <section id="skills" className=" py-12 bg-linear-to-b from-light to-porcelain" >
      <div className="center-container" data-aos="fade-up">
        <Title 
          title={"My Skills"}
          subtitle={"What I Contribute to Development"}
          icon={<div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-desert-sand to-blackberry-cream blur-lg rounded-full"></div>
            <GiFastArrow size={40}  />
        </div>}
          
        /> 
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16 mb-16">
          {CARDS.map((e, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ display: 'grid' }}  
            >
              <SkillsCards 
                title={e.title}  
                img={e.img} 
                p={e.p} 
              />
            </div>
          ))} 
        </div>
      </div>
    </section>
  );
};

export default Skills;