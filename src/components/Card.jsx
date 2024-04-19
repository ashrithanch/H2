import { BiSolidCreditCardFront } from 'react-icons/bi'

const Card = ({ num, color }) => {
  return (
    <>
      <div className="bg-[#fefefe] h-[150px] w-[240px] rounded-lg [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] flex justify-center flex-col p-6 gap-[10px] hover:scale-105 cursor-pointer">
        <div className={`text-[30px] ${color}`}>
          <BiSolidCreditCardFront />
        </div>
        <h4>My Saved Library {num}</h4>
        <p className="text-[12px] text-black/50">dd-mm-yy</p>
      </div>
    </>
  )
}
export default Card
