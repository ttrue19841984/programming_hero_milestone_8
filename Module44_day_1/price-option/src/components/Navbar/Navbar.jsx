
import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu} from 'react-icons/io';
import { AiOutlineCloseSquare} from 'react-icons/ai';




const Navbar = () => {

const [open,setOpen] = useState(false)

    const routes =[
        {id: 1, path: '/', name: 'Home'},
        {id: 2, path: '/about', name: 'About'},
        {id: 3, path: '/services', name: 'Services'},
        {id: 4, path: '/contact', name: 'Contact'},
        {id: 5, path: '*', name: 'NotFound'}
    ]

  return (
    <nav className="text-black p-6 bg-yellow-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
          open === true ? 
          <IoIosMenu></IoIosMenu>
          :<AiOutlineCloseSquare></AiOutlineCloseSquare>  
        }
      </div>
      <ul className={`md:flex absolute md:static duration-1000
      ${open ? 'top-16' : '-top-60'}
       bg-yellow-200 px-6 `}>
      {
        routes.map(route =><Link key={route.id} route={route} ></Link>)
      }
      </ul>
    </nav>
  )
}

export default Navbar
