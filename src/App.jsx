import About  from "./pages/About"
import  Hero  from "./pages/Hero"
import Skills from "./pages/Skills"
import Work from "./pages/Work"
import Error from "./pages/Error"
import Layout from './layout/Layout.jsx'
import { Navigate, Route, Routes, } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"
import ScrollToTopButton from "./components/ScrollToTopButton.jsx"

 const App = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 200);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    
    AOS.init({
  
    });
  }, []);
  return (

    <>
       <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Layout>
               <Hero />
              <About />
              <Work />
              <Skills />
              <ScrollToTopButton isActive={isActive} />
             </Layout>
            
            </>
          } 
        />

  <Route path="/404" element={<Error/>}/>
  <Route path="*" element={<Navigate to={"/404"}/>}/>
      </Routes>
    </>
 
  )
}

export default App