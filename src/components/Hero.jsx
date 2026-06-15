import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import hero1 from "../assets/hero/hero1.webp"; 
import hero2 from "../assets/hero/hero2.webp";
import hero3 from "../assets/hero/hero3.webp";
import hero4 from "../assets/hero/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">

      {images.map((img, index) => (
  <img
    key={index}
    src={img}
    alt=""
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
  current === index
    ? "opacity-100"
    : "opacity-0"
}`}
  />
))}

      {/* Dark Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      {/* Fixed Content */}
    <motion.div
  className="absolute inset-0 flex items-center pt-24 md:pt-0"
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

<div className="max-w-7xl mx-auto w-full px-8 lg:px-16">

    <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg mb-6">
      ESTABLISHED SINCE 2017
    </span>

    <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-[1.1] max-w-3xl">
      Engineering Precision
      <br />
      For Modern Construction
    </h1>

    <p className="text-gray-200 mt-8 text-xl max-w-2xl">
      Formwork Design • Manufacturing • Refurbishment • Technical Support
    </p>

    <div className="mt-10 flex gap-4">

      <a
        href="#services"
className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold shadow-xl"      >
        Explore Services
      </a>

      <a
        href="#contact"
className="border border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full"      >
        Contact Us
      </a>

    </div>

  </div>

</motion.div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-center">
  <div className="text-2xl">⌄</div>
  <p className="text-sm tracking-widest">SCROLL</p>
</div>

    </section>
  );
}

export default Hero;