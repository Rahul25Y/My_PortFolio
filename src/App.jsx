import './App.css'
import Contact from './COMPONENTS/Contact/Contact'
import Hero from './COMPONENTS/Hero'
import Navbar from './COMPONENTS/Navbar'
import Particle from './COMPONENTS/Particle'
import Projects from './COMPONENTS/Project/Projects'
import Testimonials from './COMPONENTS/Skiils'
import About from './Home/About/About'


function App() {
  

  return (
    <>
    
       <Navbar/>
       <Particle/> 
       <Hero/>
       <About/>
       <Testimonials/>
       <Projects/>
       <Contact/>
    </>
  )
}

export default App
