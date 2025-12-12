import Button from "../components/Button"


 const Hero = () => {
  const cvLink = "https://drive.google.com/file/d/1v2M5yi0AdYNzhow0J-P65EPtsWVbBIkW/view?usp=view";
  return (
   <section className="py-12  h-screen bg-hero-gradient relative overflow-hidden ">
    <div className="center-container relative z-10">
       <div className="flex flex-col justify-center items-center gap-10 mt-10">
         <Button 
            className="bg-porcelain/10 text-porcelain border border-porcelain/30 rounded-full w-fit px-6 py-3 shadow hover:bg-porcelain/20 hover:scale-105 transition-all duration-300" 
            title="Hello 👋" 
          />
        
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-porcelain mb-4">
            I'm <span className="text-desert-sand">Nada</span>
            <span className="text-3xl md:text-5xl font-semibold text-porcelain/90"> a Web Developer </span>
          </h1>
        
        </div>
      
        <p className="text-xl md:text-2xl text-porcelain/90 max-w-[90%] text-center leading-relaxed font-medium">
          Turning vision into reality, one line of code at a time. 
          Where the art of web development meets the science of exceptional user experiences.
        </p>
        
     
        <Button 
            className="bg-desert-sand text-midnight-violet hover:bg-porcelain hover:text-midnight-violet rounded-full w-fit px-6 py-3 duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold transition-all" 
            title="View my resume" 
            link={cvLink}
          />  
       </div>
    </div>
    
  
   </section>
  );
};

export default Hero;