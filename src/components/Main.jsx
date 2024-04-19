import Aside from './Aside'
import CardsSection from './CardsSection'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import SideBar from './SideBar'

const Main = () => {
  return (
    <div className="relative">
      <SideBar />
      <Navbar />
      <CardsSection />
      <HeroSection />
      <Aside />
    </div>
  )
}
export default Main
