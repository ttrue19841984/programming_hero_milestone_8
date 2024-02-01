
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";
import DashbordLayout from "../DashbordLayout/DashbordLayout";
import Dashbord from "../DashbordLayout/Dashbord";
import Profile from "../DashbordLayout/Profile";
import EditProfile from "../DashbordLayout/EditProfile";




const myCreatedRouter = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
        children : [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/products',
            element: <Products></Products>,
            loader: () =>fetch(`https://dummyjson.com/products`)
          },
          {
            path: '/products/:id',
            element: <Product></Product>,
            loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
          },
          {
            path: '/dashbord',
            element: <DashbordLayout></DashbordLayout>,
            children:[
                {
                    path:'/dashbord',
                    element: <Dashbord></Dashbord>

                },
                {
                    path: '/dashbord/profile',
                    element: <Profile></Profile>
                },
                {
                    path: '/dashbord/editprofile',
                    element: <EditProfile></EditProfile>
                }
            ]
          },
          
        ]
    },
     
  ])

export default myCreatedRouter;
