import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaLeaf,
  FaBolt,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaMoneyBillWave size={35} />,
    title: "40–60% Cost Savings",
    desc: "Compared to purchasing new formwork systems.",
  },
  {
    icon: <FaLeaf size={35} />,
    title: "Eco Friendly",
    desc: "Reduces environmental waste through refurbishment.",
  },
  {
    icon: <FaBolt size={35} />,
    title: "Faster Turnaround",
    desc: "Prepare your next project in less time.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Structural Integrity",
    desc: "Maintains quality and safety standards.",
  },
  {
    icon: <FaSyncAlt size={35} />,
    title: "250–300 Repetitions",
    desc: "Extends the lifecycle of formwork panels.",
  },
];

function Benefits() {
  return (
    <section className="py-18 bg-[#f8f5ef]">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          Benefits of Refurbishment
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg text-center"
            >
              <div className="text-orange-500 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Benefits;