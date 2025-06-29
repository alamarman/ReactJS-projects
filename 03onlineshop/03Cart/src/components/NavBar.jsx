import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <nav className="nav bg-black text-cyan-300 p-4 rounded-lg shadow-lg sticky top-0 z-50">
        
      <ul className="flex space-x-6 justify-end items-center">
        <li>
          <NavLink to="/" className="hover:text-white font-semibold transition">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="hover:text-white font-semibold transition">
            Cart 🛒
            <span className="text-xs bg-gray-800 text-white rounded-full px-2 py-1 ml-2">
              {cartTotalQuantity}
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
