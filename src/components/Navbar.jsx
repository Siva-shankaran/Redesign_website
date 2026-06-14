import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">

      <div className="max-w-7xl mx-auto mt-5 px-8">

        <div
  className={`rounded-full flex justify-between items-center transition-all duration-500
  ${
    scrolled
      ? "bg-white shadow-xl px-8 py-3"
      : "backdrop-blur-md bg-black/20 border border-white/20 px-10 py-5"
  }`}
>

          {/* Logo */}

          <div className="cursor-pointer hover:scale-105 transition-all duration-300">

            <h1
              className={`text-2xl font-bold transition ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              FORMCRAFT
            </h1>

            <p
              className={`text-[10px] tracking-[5px] transition ${
                scrolled ? "text-orange-500" : "text-orange-300"
              }`}
            >
              CONSULTANCY
            </p>

          </div>

          {/* Menu */}

          {/* Desktop Menu */}

<ul
  className={`hidden md:flex gap-10 font-medium ${
    scrolled ? "text-black" : "text-white"
  }`}
>
  {[
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ].map(([name, link]) => (
    <li key={name}>
      <a
        href={link}
        className="relative group transition-all duration-300 hover:text-orange-500"
      >
        {name}

        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  ))}
</ul>

{/* Mobile Menu Button */}

<button
  className={`md:hidden ${
    scrolled ? "text-black" : "text-white"
  }`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
</button>

        </div>

      </div>

{menuOpen && (
  <div
    className="
      fixed
      inset-0
      z-50
      bg-black/90
      backdrop-blur-lg
      flex
      flex-col
      justify-center
      items-center
      md:hidden
    "
  >
    <button
      className="absolute top-8 right-8 text-white"
      onClick={() => setMenuOpen(false)}
    >
      <FaTimes size={30} />
    </button>

    <ul className="flex flex-col gap-8 text-white text-3xl font-semibold">

      <li>
        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
      </li>

      <li>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          About
        </a>
      </li>

      <li>
        <a href="#services" onClick={() => setMenuOpen(false)}>
          Services
        </a>
      </li>

      <li>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </li>

    </ul>
  </div>
)}

    </nav>

  );

}

export default Navbar;