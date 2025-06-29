import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from '../features/CartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.cartItems.map(item => (
              <li key={item.id} className="mb-4 border-b pb-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="flex gap-2 mt-2">
                      <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 bg-gray-300 rounded">-</button>
                      <button onClick={() => dispatch(addToCart(item))} className="px-2 py-1 bg-gray-300 rounded">+</button>
                      <button onClick={() => dispatch(removeFromCart(item.id))} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="font-bold">Total Quantity: {cart.cartTotalQuantity}</p>
            <p className="font-bold">Total Amount: ${cart.cartTotalAmount}</p>
            <button onClick={() => dispatch(clearCart())} className="mt-2 px-4 py-2 bg-red-700 text-white rounded">Clear Cart</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
