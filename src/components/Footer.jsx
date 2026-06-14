import {
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { FaMapMarkerAlt } from "react-icons/fa";

function Footer() {

  return (

    <footer className="bg-black text-white py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>

            <h2 className="text-3xl font-bold">
              FORMCRAFT
            </h2>

            <p className="text-orange-500 tracking-[5px] mt-1 text-sm">
  CONSULTANCY
</p>


            <p className="mt-4 text-gray-400">
              One-stop formwork engineering partner delivering
              design, refurbishment and technical support.
            </p>
</motion.div>
          </div>

          {/* Quick Links */}

          <div>


            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li className="hover:text-orange-500 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-orange-500 cursor-pointer transition">
                About</li>

              <li className="hover:text-orange-500 cursor-pointer transition">Services</li>

              <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <p className="flex gap-2 text-gray-400">
              <FaPhoneAlt />
              +91 9790354410
            </p>

            <p className="flex gap-2 mt-3 text-gray-400">
              <FaEnvelope />
              formcraftconsultancy@gmail.com
            </p>

            <p className="flex gap-2 mt-3 text-gray-400">
              <FaMapMarkerAlt />
              Ramapuram, Chennai
            </p>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-bold mb-4">
              Follow Us
            </h3>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">

  <FaLinkedin size={22} />

</div>

          </div>

        </div>

        <hr className="my-10 border-gray-800" />

        <p className="text-center text-gray-500">

          © 2026 Formcraft Consultancy.
          All Rights Reserved.

        </p>

      </div>

    </footer>

  )

}

export default Footer;