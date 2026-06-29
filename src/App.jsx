import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductViewer from "./Components/ProductViewer";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
    </main>
  )
}

export default App