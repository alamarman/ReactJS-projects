import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",       
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
            state.cartTotalAmount += item.price;
            state.cartTotalQuantity += 1;
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === itemId);
            if (existingItem) {
                state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
                state.cartTotalAmount -= existingItem.price * existingItem.quantity;
                state.cartTotalQuantity -= existingItem.quantity;
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartTotalAmount = 0;
            state.cartTotalQuantity = 0;
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.cartItems.find((i) => i.id === itemId);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                state.cartTotalAmount -= existingItem.price;
                state.cartTotalQuantity -= 1;
            } else if (existingItem && existingItem.quantity === 1) {
                // Remove item if quantity reaches 0
                state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
                state.cartTotalAmount -= existingItem.price;
                state.cartTotalQuantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
