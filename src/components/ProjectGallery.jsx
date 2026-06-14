import { motion } from "framer-motion";

import project1 from "../assets/project/project1.webp";
import project2 from "../assets/project/project2.webp";
import project3 from "../assets/project/project3.webp";
import project4 from "../assets/project/project4.webp";
import project5 from "../assets/project/project5.webp";
import project6 from "../assets/project/project6.webp";

const projects = [
  {
    title: "Design & Drawings",
    image: project1,
  },
  {
    title: "Cleaning",
    image: project2,
  },
  {
    title: "Modification",
    image: project3,
  },
  {
    title: "Mock-Up",
    image: project4,
  },
  {
    title: "Technical Support",
    image: project5,
  },
  {
    title: "MS Accessories",
    image: project6,
  },
];

function ProjectGallery() {
  return (
    <section className="py-18 bg-[#f7f5ef]">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((item, index) => (

           <motion.div
  key={index}
  whileHover={{ y: -5 }}
  transition={{ duration: 0.2 }}
  className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl cursor-pointer"
>

  <img
    src={item.image}
    alt={item.title}
    loading="lazy"
    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/30 flex items-end">

    <h3 className="text-white text-2xl font-bold p-6">
      {item.title}
    </h3>

  </div>

</motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProjectGallery;