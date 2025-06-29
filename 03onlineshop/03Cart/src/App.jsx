
import './App.css'
import Home from './components/Home'
import{createBrowserRouter,RouterProvider} from "react-router-dom"
import React from 'react'
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><NavBar/>
    <Home/></div>
  },
  {
    path: "/cart",
    element: <div><NavBar/>
    <Cart/></div>
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
function App() {
  

  return (
   <RouterProvider router={router} />
  )
}



export default App
