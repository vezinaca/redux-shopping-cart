import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    sumItem : 0,
    checkout: false
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState,

    reducers: {
        addToCart: (state) => {
            //state.cartItems.push('produit');
            console.log('dansCartSlice add');
        },
        removeFromCart: (state) => {
            state.checkout = true;
        }
    }
});

export const { addToCart, removeFromCart} = cartSlice.actions;

export const selectCart = state => state.cartItems;

export default cartSlice.reducer;