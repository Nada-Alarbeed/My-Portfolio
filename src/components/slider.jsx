import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsArrowRight, BsEye } from 'react-icons/bs';

const projects = [
  { 
    title: 'EcoBuild', 
    description: 'Built with Html and Tailwind CSS', 
    linear: 'bg-linear-to-br from-midnight-violet via-blackberry-cream/90 to-desert-sand',
    link: 'https://ecobuild-rthg.onrender.com',

  },
  { 
    title: 'Zen Digital', 
    description: 'Html, Tailwind CSS and JavaScript', 
    linear: 'bg-linear-to-bl from-blackberry-cream via-midnight-violet/90 to-desert-sand',
    link: 'https://zen-digital-6kai.onrender.com',
   
  },
  { 
    title: 'Style Shop', 
    description: 'Html and CSS', 
    linear: 'bg-linear-to-tr from-desert-sand via-blackberry-cream/80 to-midnight-violet',
    link: 'https://style-shop-4etg.onrender.com',
   
  },
];

const ProjectsSwiper = () => {
  return (
    <div className="py-12 px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        speed={600}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
        }}
        spaceBetween={30}
        className="mySwiper"  
      >
        {projects.map((e, i) => (
          <SwiperSlide key={i}>
            <div className="group relative h-64 md:h-72 rounded-2xl shadow-xl overflow-hidden">
     
              <div className={`absolute inset-0 ${e.linear} transition-all duration-700 group-hover:scale-105`}></div>
        
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
         
              <div className="absolute -inset-10 bg-linear-to-br from-desert-sand/20 to-blackberry-cream/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
      
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold text-porcelain mb-2 group-hover:text-desert-sand transition-colors duration-300">
                    {e.title}
                  </h3>
              
                  <p className="text-porcelain/90 text-sm md:text-base leading-relaxed">
                    {e.description}
                  </p>
                </div>
                
           
                <div className="mt-4">
                  <a 
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-porcelain/20 backdrop-blur-sm text-porcelain border border-porcelain/30 py-2 px-5 rounded-full font-semibold hover:bg-porcelain hover:text-midnight-violet transition-all duration-300 group/btn hover:scale-105 hover:shadow-lg"
                  >
                    <BsEye className="group-hover/btn:animate-pulse" />
                    View Project
                    <BsArrowRight className="ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .mySwiper .swiper-pagination-bullet {
          background-color: #DBB69C;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .mySwiper .swiper-pagination-bullet:hover {
          opacity: 0.8;
          transform: scale(1.2);
        }
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #511F46;
          width: 28px;
          border-radius: 8px;
        }
        .mySwiper {
          height: 350px;
          padding-bottom: 50px;
        }
        .mySwiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }
        @media (max-width: 768px) {
          .mySwiper {
            height: 320px;
          }
          .mySwiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
          .mySwiper .swiper-pagination-bullet-active {
            width: 24px;
          }
        }
        @media (max-width: 640px) {
          .mySwiper {
            height: 300px;
            padding-bottom: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsSwiper;