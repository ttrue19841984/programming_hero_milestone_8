import { Link, Outlet } from "react-router-dom"


const DashbordLayout = () => {
  return (
    <div className="flex">
      <div className="w-[20%] bg-red-200">
        <ul>
            <li>
                <Link to="/dashbord" >Dashbord</Link>
            </li>
            <li>
                <Link to='/dashbord/profile' >Profile</Link>
            </li>
            <li>
                <Link to="/dashbord/editprofile" >EditProfile</Link>
            </li>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default DashbordLayout
