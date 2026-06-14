import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const services = [

{
title:"Design & Drawings",
desc:"Project study, software design, shell drawings and BOQ preparation."
},

{
title:"Cleaning",
desc:"Chemical and manual cleaning of concrete residuals."
},

{
title:"Modification",
desc:"Resizing, cutting, welding and rectification."
},

{
title:"Mock-Up & Technical Support",
desc:"Panel numbering, mock-up preparation and site guidance."
},

{
title:"MS Accessories",
desc:"Stub pins, tie rods, wing nuts, wedge clamps and more."
},

];

function Services(){

return(

<section id="services" className="py-18 bg-[#F8F5EF]">
    
<div className="max-w-7xl mx-auto px-8">

<div className="text-center mb-8">
  <p className="text-orange-500 font-semibold tracking-widest uppercase">
    What We Do
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mt-2">
    Our Services
  </h2>

  <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
    Comprehensive formwork engineering, refurbishment and technical support solutions.
  </p>
</div>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

{services.map((service,index)=>(

            <motion.div

            key={index}

            whileHover={{
            x:5,
            }}

            className="border rounded-3xl p-8 flex justify-between items-center cursor-pointer hover:bg-orange-500 hover:text-white transition-all duration-300"

            >

<div>

<h3 className="text-2xl font-bold">
{service.title}
</h3>

<p className="mt-3 opacity-80">
{service.desc}
</p>

</div>

<FaArrowRight size={28}/>

</motion.div>

))}

</div>

</div>

</section>

)

}

export default Services;