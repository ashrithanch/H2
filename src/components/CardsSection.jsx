import Card from './Card'

const CardsSection = () => {
  return (
    <div className="flex gap-[30px] pl-[100px] absolute top-[85px] ">
      <Card num="1" color="text-[#00B0FF]" />
      <Card num="2" color="text-[#6C63FF]" />
      <Card num="3" color="text-[#F50057]" />
      <Card num="4" color="text-[#F98F26]" />
      <Card num="5" color="text-[#00BFA6]" />
    </div>
  )
}
export default CardsSection
