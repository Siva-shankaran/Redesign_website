import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

  const [show,setShow]=useState(false);

  useEffect(()=>{

    window.addEventListener("scroll",()=>{

      if(window.scrollY>400){

        setShow(true);

      }

      else{

        setShow(false);

      }

    })

  },[])

  return(

    show&&(

      <button

      onClick={()=>window.scrollTo({
        top:0,
        behavior:"smooth"
      })}

      className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"

      >

      <FaArrowUp/>

      </button>

    )

  )

}

export default ScrollTop;