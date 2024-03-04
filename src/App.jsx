
import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Signin from "./pages/Signin.jsx"
import Login from "./pages/Login.jsx"
import Cart from "./pages/Cart.jsx"
import Categore from "./pages/Categore.jsx"
import Products from "./pages/Products.jsx"
import Notfound from "./pages/Notfound.jsx"
import Hero from "./pages/Hero.jsx"
import Root from "./rotes/Root.jsx"
import './App.css'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
  children: [
    {
      path: '*',
      element: <Notfound/>
    },
    {
      path: '/',
      element: <Home/>
    },
    {
      path: "/Signin",
      element: <Signin/>
    },
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/cart",
      element: <Cart/>
    },
    {
      path: "/Categore",
      element: <Categore/>
    },
    {
      path: "/Products",
      element: <Products/>
    },
    {
      path: "/Hero",
      element: <Hero/>
    }
  ]
},
]);


export default function App() {
  return (
      <RouterProvider router={router} />
  )
}


