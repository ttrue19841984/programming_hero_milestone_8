import PriceOption from "../PriceOption/PriceOption"


const PriceOptions = () => {

    
      const  priceOptions= [
          {
            "id": 1,
            "name": "Basic Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Locker room access",
              "24/7 gym access",
              "Discounts on merchandise"
            ],
            "price": "$29.99/month"
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "features": [
              "Access to gym facilities",
              "Cardio equipment usage",
              "Locker room access",
              "Free group fitness classes",
              "Personal training consultation",
              "Access to sauna and steam room"
            ],
            "price": "$49.99/month"
          },
          {
            "id": 3,
            "name": "Family Membership",
            "features": [
              "Access to gym facilities for the entire family",
              "Cardio equipment usage",
              "Locker room access",
              "Free group fitness classes",
              "Childcare services",
              "Discounts on merchandise"
            ],
            "price": "$79.99/month"
          } 
        ]
      
      


  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
      </div>
    </div>
  )
}

export default PriceOptions
