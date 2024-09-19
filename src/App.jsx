import Workflow from './components/Workflow'
import './App.css'
import FeatureSection from './components/featureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Price from './components/Price'
import Testimonial from './components/testimonial'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
     <Navbar />
     <HeroSection />
     <div className='max-w-7xl mx-auto pt-20 px-6'>
        <FeatureSection/>
        <Workflow/>
        <Price/>
        <Testimonial/>
        <Footer/>
      </div>
    
    </>
  )
}

export default App
