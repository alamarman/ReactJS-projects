import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import productsReducer, { productsFetch } from './features/productSlice.js'
import { productApi } from './features/Productapi.js'
import './index.css'
import App from './App.jsx'
import cartReducer from './features/CartSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer, // This key must be 'cart'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

store.dispatch(productsFetch());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
