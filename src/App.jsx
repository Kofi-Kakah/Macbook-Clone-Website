import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductViewer from "./Components/ProductViewer";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Showcase from "./Components/Showcase";

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
    </main>
  )
}

export default App