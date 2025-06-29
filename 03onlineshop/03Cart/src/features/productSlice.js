import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// This file defines a Redux slice for managing product data in a React application.
const initialState = {
 items:[],
 status: null
};
export const productsFetch= createAsyncThunk(
    "products/fetchProducts",
   async ()=>{
       const response = await axios.get("http://localhost:5000/products")
       return response?.data
     
    }
);


const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(productsFetch.pending, (state) => {
            state.status = "loading";
          })
          .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.items = action.payload;
          })
          .addCase(productsFetch.rejected, (state) => {
            state.status = "failed";
          });
      }
})

export default productsSlice.reducer;