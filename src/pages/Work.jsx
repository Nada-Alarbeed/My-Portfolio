import Title from "../components/Title"
import { FaFolderOpen } from "react-icons/fa";
import ProjectsSwiper from "../components/slider"

 const Work = () => {
  return (
    <section id="work" className="py-12 bg-linear-to-b from-porcelain via-light to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-desert-sand/10 to-blackberry-cream/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-midnight-violet/5 to-desert-sand/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="center-container relative z-10 " data-aos="fade-up">
        <Title 
          title="My Work"
          subtitle="Where Vision Meets Code"
          icon={<div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-desert-sand to-blackberry-cream blur-lg rounded-full"></div>
            <FaFolderOpen size={40}  />
        </div>}
          
        />
        
      
        
        <div data-aos="zoom-in-up">
          <ProjectsSwiper/>
        </div>
      </div>
    </section>
  )
}

export default Work;