import { IoMdSettings } from 'react-icons/io'
import { FaHeadphones } from 'react-icons/fa6'
import { AiFillDollarCircle } from 'react-icons/ai'
import { IoMdCalendar } from 'react-icons/io'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { FiMonitor } from 'react-icons/fi'
import { IoSearch } from 'react-icons/io5'
import { IoLogoFreebsdDevil } from 'react-icons/io'
import { FaRegRectangleList } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen text-black/50 p-[20px] w-[60px] absolute bg-white [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] text-[20px] z-50">
      <div className="cursor-pointer text-[#262846] text-[30px]">
        <Link to={'/welcome'}>
          <IoLogoFreebsdDevil />
        </Link>
      </div>
      <div className="flex flex-col gap-[25px] mt-[-180px] cursor-pointer">
        <Link to={'/welcome'}>
          <IoSearch />
        </Link>
        <Link to={'/welcome'}>
          <FiMonitor />
        </Link>
        <Link to={'/welcome'}>
          <FaRegCircleQuestion />
        </Link>
        <Link to={'/welcome'}>
          <IoMdCalendar />
        </Link>
        <Link to={'/welcome'}>
          <FaRegRectangleList />
        </Link>
        <Link to={'/welcome'}>
          <AiFillDollarCircle />
        </Link>
        <Link to={'/welcome'}>
          <FaHeadphones />
        </Link>
      </div>
      <Link to={'/welcome'}>
        <IoMdSettings />
      </Link>
    </div>
  )
}
export default SideBar
