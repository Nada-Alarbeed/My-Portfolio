import Title from "../components/Title"
import { BsPersonCircle, BsCodeSlash, BsLightbulb, BsBook, BsAward, BsBriefcase, BsTools } from "react-icons/bs"
import AboutInfo from "../components/AboutInfo"
import Button from "../components/Button"
import { AboutRight, Experience } from "../components/AboutRight"

const experience = [
    {
        dot:"•",
        p:"Developed 5+ responsive websites using React.js, HTML5, CSS3"
    },
    {
        dot:"•",
        p:"Created mobile-friendly designs ensuring cross-device compatibility"
    },
    {
        dot:"•",
        p:"Implemented SEO optimization strategies"
    },
    {
        dot:"•",
        p:"Contributed to Flutter-based mobile app (University project)"
    }
]

const technologies = [
    { title: "React.js" },
    { title: "JavaScript" },
    { title: "HTML5" },
    { title: "Tailwind CSS" },
    { title: "Git" },
    { title: "Responsive Design" },
    { title: "Flutter" },
]

const About = () => {
    return (
        <section id="about" className="py-12 bg-linear-to-b from-porcelain via-light to-white">
            <div className="center-container">
                
                <div className="text-center mb-16" data-aos="fade-up">
                    <Title 
                        title="About Me"
                        subtitle="Passionate Web Developer & Continuous Learner"
                        icon={<div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-desert-sand to-blackberry-cream blur-lg rounded-full"></div>
                            <BsPersonCircle size={40}  />
                        </div>}
                     
                    />
                </div>

                <div data-aos="fade-up">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                       
                
                        <div className="lg:w-2/5 " data-aos="fade-right"  >
                            <div   className=" bg-porcelain p-8 rounded-2xl shadow-xl border border-desert-sand/30 hover:border-desert-sand transition-all duration-500  "> 
                                <p className="text-lg text-dark mb-6 leading-relaxed font-medium">
                                    A passionate web developer from Syria, currently pursuing my degree in 
                                    Software Engineering at the University of Damascus.
                                </p>
                                
                                <div className="flex flex-col gap-4" data-aos="fade-up">
                                    <AboutInfo 
                                        title="Specialized in React.js & Frontend Development"
                                        icon={<BsCodeSlash />}  
                                    />
                                    <AboutInfo 
                                        title="Passionate about learning new technologies"
                                        icon={<BsLightbulb />}
                                    />
                                    <AboutInfo 
                                        title="Currently exploring cybersecurity"
                                        icon={<BsBook />}
                                    />
                                </div>
                            </div>
                        </div>

                    
                        <div className="lg:w-3/5" data-aos="fade-left" >
                            <div className="flex flex-col gap-8">
                                <AboutRight 
                                    head={
                                        <div className="flex items-center gap-2">
                                            <BsBook className="text-desert-sand" />
                                            <span>Education</span>
                                        </div>
                                    }
                                >
                                    <div className="p-4 bg-linear-to-r from-light to-porcelain rounded-lg" data-aos="fade-up" >
                                        <h5 className="text-xl font-bold text-midnight-violet">University of Damascus</h5>
                                        <p className="text-blackberry-cream font-medium">Faculty of Information Technology</p>
                                        <p className="text-dark text-sm mt-1">BSc in Software Engineering (2022 - Present)</p>
                                        <div className="mt-3 w-full bg-light rounded-full h-2">
                                            <div 
                                                className="bg-linear-to-r from-desert-sand to-blackberry-cream h-2 rounded-full" 
                                                style={{ width: '75%' }}
                                            ></div>
                                        </div>
                                        <p className="text-dark text-xs mt-2">Progress: 75% completed</p>
                                    </div>
                                </AboutRight>
                                
                                <AboutRight 
                                    head={
                                        <div className="flex items-center gap-2">
                                            <BsBriefcase className="text-desert-sand" />
                                            <span>Experience & Projects</span>
                                        </div>
                                    }
                                >
                                    {experience.map((e, i) => (
                                         <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                                                 <Experience dot={e.dot} p={e.p} />
                                         </div>
                                   
                                    ))}
                                </AboutRight>
                                
                                <AboutRight 
                                    head={
                                        <div className="flex items-center gap-2">
                                            <BsTools className="text-desert-sand" />
                                            <span>Technologies</span>
                                        </div>
                                    }
                                    direction="flex flex-wrap gap-3"
                                >
                                    {technologies.map((e, i) =><div key={i} data-aos="zoom-in" data-aos-delay={i * 50}>
                                        <Button 
                                          
                                            title={e.title}  
                                            className="bg-porcelain border border-desert-sand/30 text-midnight-violet rounded-full w-fit px-4 py-2 shadow text-sm font-medium hover:border-desert-sand hover:bg-desert-sand/10 hover:scale-105 transition-all duration-300"  
                                        /> </div>
                                    )}
                                </AboutRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About