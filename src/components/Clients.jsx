import { motion } from "framer-motion";

import casagrand from "../assets/client/casagrand.webp";
import sobha from "../assets/client/sobha.webp";
import lw from "../assets/client/lw.webp";
import ncc from "../assets/client/ncc.webp";
import vertex from "../assets/client/vertex.webp";
import shriram from "../assets/client/shriram.webp";

const clients = [
  casagrand,
  sobha,
  lw,
  ncc,
  vertex,
  shriram,
];

// Duplicate logos for seamless looping
const allClients = [...clients, ...clients];

function Clients() {
  return (
   <section className="clients-section py-18 bg-[#F8F5EF] overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-12">

          <p className="text-orange-500 tracking-[4px] uppercase font-semibold">
            Trusted By
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Our Clients
          </h2>

        </div>

      </div>

      <motion.div

        className="flex gap-12 w-max"

        animate={{
          x: ["0%", "-50%"],
        }}

        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}

      >

        {allClients.map((logo, index) => (

          <motion.div
  key={index}
  whileHover={{
    scale: 1.08,
    y: -5,
  }}

             className="
    bg-white
    rounded-2xl
    shadow-md
    p-6
    flex
    items-center
    justify-center
    min-w-[220px]
    h-[120px]
    transition-all
    duration-300
  "
>

            <img
              src={logo}
              alt=""
              className="max-h-14 object-contain"
            />

          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}

export default Clients;