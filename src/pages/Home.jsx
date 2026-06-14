import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Clients from "../components/Clients";
import ScrollTop from "../components/ScrollTop";
import ProjectGallery from "../components/ProjectGallery";
import Stats from "../components/Stats";
import Whatsapp from "../components/Whatsapp";
import ScrollProgress from "../components/ScrollProgress";
import FadeIn from "../components/FadeIn";
import SectionDivider from "../components/SectionDivider";

function Home() {
  return (
 <>
 <ScrollProgress />
 
  <Navbar />

  <Hero />

  <FadeIn>
  <About />
</FadeIn>

  <FadeIn>
    <Stats />
  </FadeIn>

  <FadeIn>
    <Features />
  </FadeIn>

  <FadeIn>
  <Services />
</FadeIn>

 <FadeIn>
  <ProjectGallery />
</FadeIn>

  <Benefits />

 <FadeIn>
    <Clients />
  </FadeIn>

  <FadeIn>
    <Contact />
  </FadeIn>

  <Footer />

  <ScrollTop />

  <Whatsapp/>
</>
  );
}

export default Home;