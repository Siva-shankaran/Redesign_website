import { motion } from "framer-motion";
import Counter from "./Counter";
const stats = [
  {
    number: 2017,
    suffix: "",
    title: "Established",
  },
  {
    number: 60,
    suffix: "%",
    title: "Cost Savings",
  },
  {
    number: 300,
    suffix: "+",
    title: "Panel Repetitions",
  },
  {
    number: 100,
    suffix: "+",
    title: "Projects Supported",
  },
];

function Stats() {
  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full top-0 left-0"></div>

      <div className="absolute w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.7}}
          className="text-center mb-20"
        >

          <div className="w-20 h-[3px] bg-orange-500 mx-auto mb-6"></div>

          <p className="uppercase tracking-[6px] text-orange-500 font-semibold">
            Why Choose Formcraft
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Engineering Excellence
            <br />
            Since 2017
          </h2>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          <div className="absolute top-8 left-0 w-full h-[2px] bg-orange-500 hidden md:block"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            {stats.map((item, index) => (

              <motion.div

                key={index}

                initial={{opacity:0,y:60}}

                whileInView={{opacity:1,y:0}}

                viewport={{once:true}}

                transition={{
                  duration:0.6,
                  delay:index*0.15
                }}

                whileHover={{
                  y:-8
                }}

                className="relative text-center"

              >

                {/* Timeline Dot */}

                <div className="hidden md:block absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_25px_#ff7300]"></div>

                {/* Mobile Dot */}

                <div className="md:hidden w-4 h-4 bg-orange-500 rounded-full mx-auto mb-6 shadow-[0_0_20px_#ff7300]"></div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mt-10 md:mt-16">

<Counter end={item.number} duration={2000} />
                  {item.suffix}

                </h2>

                <p className="text-gray-300 text-lg mt-3">
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