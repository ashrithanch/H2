import { FaRegCalendar } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-[#262846] pt-6 flex justify-between pl-[130px] pb-14 pr-12">
      <div className=" ">
        <h4 className="text-[15px] text-white font-bold">
          Good Afternoon, Akshay
        </h4>
        <p className="text-[10px] text-white/50">
          You are subscribed to Retail plan.
        </p>
      </div>
      <div className="flex text-white items-center gap-[10px]">
        <div className="text-[20px]">
          <Link to={'/welcome'}>
            <FaRegCalendar />
          </Link>
        </div>

        <div>Today, 14 February</div>
        <div className="text-[20px]">
          <Link to={'/welcome'}>
            <FaRegClock />
          </Link>
        </div>

        <p>16:42</p>
        <div className="ml-[40px] text-[20px]">
          <Link to={'/welcome'}>
            <FaRegBell />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Navbar
