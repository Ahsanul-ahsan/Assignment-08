import Image from "next/image";
import React from "react";
import heroimg from "@/acesst/images-hee.jpg";

const BannerSection = () => {
  return (
    <section 
      className="w-full py-20 md:py-32 bg-cover bg-center relative mb-10 mt-10 max-w-6xl mx-auto md:rounded-2xl overflow-hidden" 
      style={{ 
        backgroundImage: `url(${heroimg.src})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
         
          <h1 className="text-2xl md:text-5xl font-black text-white">
            Discover Your <br className="hidden md:block" />
            <span className="text-white md:text-blue-800">Perfect</span> Aesthetic
          </h1>

          <p className="mt-4 md:mt-6 text-white text-lg md:text-xl max-w-md mx-auto md:mx-0 drop-shadow-sm">
            Explore our premium collection of tiles <br className="hidden md:block" />
            crafted to elevate your space.
          </p>

          <div className="mt-8 md:mt-10 flex flex-row justify-center md:justify-start gap-4">
            <button className="cursor-pointer px-6 py-3 md:px-8 md:py-4 bg-[#001f3f] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all">
              Browse Now
            </button>

            <button className="cursor-pointer px-6 py-3 md:px-8 md:py-4 border-2 border-[#001f3f] text-[#001f3f] font-bold rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-all">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
    </section>
  );
};

export default BannerSection;
