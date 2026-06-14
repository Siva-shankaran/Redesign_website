import { motion } from "framer-motion";
import {
  FaDraftingCompass,
  FaIndustry,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";

const features = [
  {
    icon: <FaDraftingCompass size={40} />,
    title: "Design & Engineering",
    desc: "Software design, shell drawings and complete BOQ preparation.",
  },

  {
    icon: <FaIndustry size={40} />,
    title: "Manufacturing & Refurbishment",
    desc: "Professional refurbishment and manufacturing expertise.",
  },

  {
    icon: <FaCheckCircle size={40} />,
    title: "Quality Assurance",
    desc: "Strict quality checks and testing standards.",
  },

  {
    icon: <FaTools size={40} />,
    title: "Technical Support",
    desc: "On-site rectification and engineering guidance.",
  },
];

function Features() {
  return (
    <section className="py-18 bg-[#F8F5EF]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: index * 0.2 }}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="bg-white rounded-3xl p-8 shadow-lg cursor-pointer"

            >

              <div className="text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;