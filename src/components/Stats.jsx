import { motion } from "framer-motion";

const stats = [
  {
    number: "2017",
    title: "Established",
  },
  {
    number: "40-60%",
    title: "Cost Savings",
  },
  {
    number: "250-300",
    title: "Panel Repetitions",
  },
  {
    number: "100+",
    title: "Projects",
  },
];

function Stats() {
  return (
    <section className="py-24 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="text-orange-500 tracking-[4px] uppercase font-semibold">
            Why Choose Formcraft
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Engineering Excellence Since 2017
          </h2>

        </div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute top-6 left-0 w-full h-[2px] bg-orange-500"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >

                <div className="w-5 h-5 bg-orange-500 rounded-full mx-auto mb-6 border-4 border-[#111111]"></div>

                <h3 className="text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="text-gray-300 mt-3">
                  {item.title}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;