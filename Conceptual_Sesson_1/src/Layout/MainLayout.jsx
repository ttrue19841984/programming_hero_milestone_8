import { NavLink, Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"


const MainLayout = () => {
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <div>
           <h1 className="text-xl font-bold">Amajhon</h1> 
        </div>
        <nav>
          <ul className="flex gap-5">
            <NavLink to="/"
              className={({isActive,isPending}) => isPending ? "pending" : isActive ? "bg-green-400" : ""
              }>
              Home
            </NavLink>
            <NavLink to="/products"
              className={({isActive,isPending}) => isPending ? "pending" : isActive ? "bg-red-400" : ""
              }>
              Products
            </NavLink>
            <NavLink to="/dashbord"
              className={({isActive,isPending}) => isPending ? "pending" : isActive ? "bg-yellow-400" : ""
              }>
              Dashboard
            </NavLink>
            
          </ul>
        </nav>
      </section>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>

      <Footer></Footer>

    </div>
  )
}

export default MainLayout
