import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import SocialLink from "../components/SocialLink"

const SOCIALS = [
    {
        icon: <FaFacebookF size={20} />, 
        link: "https://facebook.com/nada.alarbeed",
        color: "hover:bg-blue-300"  
    },
    {
        icon: <FaInstagram size={20} />, 
        link: "https://www.instagram.com/nada_alarbeed/", 
        color: "hover:bg-pink-300"
    },
    {
        icon: <FaWhatsapp size={20} />,  
        link: "https://wa.me/+963930666472",
        color: "hover:bg-green-300"
    },
    {
        icon: <IoMdMail size={20} />,    
        link: "mailto:nada.alarbeed04@gmail.com",
        color: "hover:bg-red-300"
    }
]

 const Footer = () => {
    const date = new Date().getFullYear();
    
    return (
        <footer className="bg-blackberry-cream py-6">
            <div className="center-container" >
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex gap-4" >
                        {SOCIALS.map((e, i) => (
                            <SocialLink 
                                key={i} 
                                link={e.link} 
                                icon={e.icon} 
                                color={e.color} 
                            />
                        ))}
                    </div>
                    <p className="text-white text-center text-sm md:text-base">
                        &copy; Copyright {date} - Nada Alarbeed
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;