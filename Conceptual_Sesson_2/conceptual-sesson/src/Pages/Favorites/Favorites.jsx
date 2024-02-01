import { useEffect, useState } from "react"
import FavoriteCard from "./FavoriteCard";


const Favorites = () => {


const [favorites, setFavorites] = useState([]);
const [noFound, setNofound] = useState(false);

const [isShow, setIsShow] = useState(false);

const [totalPrice, setTotalPrice] = useState(0)


useEffect( () => {


  

  const favoritesItems = JSON.parse(localStorage.getItem('favorites'));


  if(favoritesItems){
    setFavorites(favoritesItems)
    const total = favoritesItems.reduce((preValue,currentItem) => preValue + currentItem.price, 0);
  setTotalPrice(total)
  }
  else{
    setNofound('No Data found')
  }
  

},[])

console.log(favorites)

const handleRemove = () =>{
  localStorage.clear();
  setFavorites([]);
  setNofound('No Data found');
}


  return (
    <div>
      {noFound? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>: 
      <div>

      {
        favorites.length > 0 && (
      <div>
        <button onClick={handleRemove} className="px-5 bg-green-200 mx-auto block">Deleded All Favorites</button>

        <h1>Total price : {totalPrice}</h1>
      </div>
       )}


        <div className="grid grid-cols-2 gap-5">
          {
            isShow ? favorites.map(phone=> <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>) 
            
            :
            
            favorites.slice(0, 2).map(phone=> <FavoriteCard key={phone.id} phone={phone}></FavoriteCard>)
          }
        </div>

        {favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 mx-auto block">
          {isShow ? 'See less' : 'See more'}
          </button>}




      </div>}
    </div>
  )
}

export default Favorites
