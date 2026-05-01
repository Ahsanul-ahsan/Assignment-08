import Image from "next/image";
import React from "react";
import hero from "@/acesst/image.png"

const HeroSection = () => {
    return (
        <section className="w-full py-16">
      <div className="max-w-6xl bg-blue-50 p-4 rounded shadow mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Grow your future with NovaSkill
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Learn Build Grow Your journey to future skills starts here.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Browse Courses
            </button>

            <button className="cursor-pointer px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative rounded-md w-full h-80">
            <Image
              src={hero}
              alt="Student learning"
              fill
              className="object-contain"
            />
            
          </div>
        </div>
      </div>
    </section>
    );
};

export default HeroSection;
