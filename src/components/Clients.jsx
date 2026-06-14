import { motion } from "framer-motion";

import casagrand from "../assets/clients/Casagrand-Logo1.png";
import sobha from "../assets/clients/shoba.png";
import lw from "../assets/clients/L & W Logo.avif";
import ncc from "../assets/clients/NCC.jpeg";
import vertex from "../assets/clients/VERTEX.webp";
import shriram from "../assets/clients/SHRIRAM.png";

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
  className="clients-track flex gap-12 w-max"
            key={index}

            whileHover={{
              scale: 1.1,
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