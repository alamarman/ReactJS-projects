import React from 'react'
import { useGetProductsQuery } from '../features/Productapi'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';

const Home = () => {
  
const { data, error, isLoading } = useGetProductsQuery();
const dispatch = useDispatch();

  return (
    <div className='home-container flex flex-wrap flex-col justify-center  gap-4 p-4'>
      {isLoading?(<p>Loading...</p>):error?(<p>error occured..</p>):
      <>
      <h2 className='text-xl font-bold'>New arrivals</h2>
      <div className='products flex '>
        {data && data.map( product => <div key={product.id} className='product   border p-4 rounded shadow-lg'>
          <img className='h-50 w-auto' src={product.image} alt={product.name} />
          <h2 className=' font-bold '>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button
  onClick={() => {
    console.log('Adding to cart:', product);
    dispatch(addToCart(product));
  }}
  className='bg-cyan-900 text-white p-2 hover:bg-cyan-700 rounded'
>
  Add to Cart
</button>
        </div>
        )}  
      </div>
      </>}
    </div>
  )
}

export default Home
