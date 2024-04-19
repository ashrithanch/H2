import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import HeroCard from './HeroCard'
import img1 from '../assets/pic1.jpg'
import img3 from '../assets/pic3.jpg'
import img4 from '../assets/pic4.svg'
import img5 from '../assets/pic5.jpg'
import img6 from '../assets/pic6.jpg'

const HeroSection = () => {
  return (
    <div className="[box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] w-[1020px] p-5 rounded-xl flex flex-col items-center gap-3 ml-[100px] absolute top-[260px]">
      <div className="flex gap-[15px] items-center">
        <div className="cursor-pointer text-[20px]">
          <FaArrowAltCircleLeft />
        </div>

        <HeroCard img={img1} heading="State of Markets" />
        <HeroCard img={img5} heading="The Central Capex Surge" />
        <HeroCard img={img3} heading="Direct Taxes and Business" />
        <HeroCard img={img6} heading="Banking Monitor" />
        <div className="cursor-pointer text-[20px]">
          <FaArrowAltCircleRight />
        </div>
      </div>
      <div className="flex gap-[30px] mt-[10px]">
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
        <div className="bg-black/40 w-[5px] h-[5px] rounded-md"></div>
      </div>
      <button className="bg-[#0f193d] text-white p-3 text-[10px] rounded-md font-[500]">
        View More
      </button>
    </div>
  )
}
export default HeroSection
