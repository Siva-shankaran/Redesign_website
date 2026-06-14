import { motion } from "framer-motion";
import about from "../assets/about.jpg";

function About() {
  return (

<section id="about" className="py-18 bg-[#F8F5EF]">

<div className="max-w-7xl mx-auto px-8">

<div className="grid lg:grid-cols-2 gap-16 items-center">

<motion.div

initial={{opacity:0,x:-80}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>

<img

src={about}

alt="about"

className="rounded-3xl shadow-2xl"

 />

</motion.div>

<motion.div

initial={{opacity:0,x:80}}

whileInView={{opacity:1,x:0}}

transition={{duration:0.8}}

viewport={{once:true}}

>

<p className="text-orange-500 font-bold tracking-widest">

ABOUT FORMCRAFT

</p>

<h2 className="text-5xl font-bold mt-4">

Engineering Solutions

Built on Experience

</h2>

<p className="mt-8 text-gray-600 leading-8">

Established in 2017, Formcraft Consultancy
specializes in formwork refurbishment,
engineering support and manufacturing
solutions helping customers reduce costs
while retaining asset quality.

</p>

<div className="grid grid-cols-2 gap-6 mt-10">

<div>

✅ Design Expertise

</div>

<div>

✅ Manufacturing

</div>

<div>

✅ Refurbishment

</div>

<div>

✅ Technical Support

</div>

</div>

</motion.div>

</div>

</div>

</section>

  );
}

export default About;