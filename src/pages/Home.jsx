// import { Route,Routes } from 'react-router-dom'
// import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection'
import Maincontent from '../components/Maincontent'
import Maincontent2 from '../components/Maincontent2'
import Maincontent3 from '../components/Maincontent3'
import Maincontent4 from '../components/Maincontent4'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Maincontent/>
   <Maincontent2/>
   <Maincontent3/>
   <Maincontent4/>
   {/* <Footer/> */}
    </>
  )
}
