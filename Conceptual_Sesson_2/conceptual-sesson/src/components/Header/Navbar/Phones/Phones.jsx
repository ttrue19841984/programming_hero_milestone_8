import PhonesCard from "./PhonesCard"


const Phones = ({phones}) => {
    // console.log(phones)
  return (
    <div>
      <h2 className="text-2xl text-center">All categories phones</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {
            phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
        }
      </div>
    </div>
  )
}

export default Phones
