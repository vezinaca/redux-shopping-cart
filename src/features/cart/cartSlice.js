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
        addToCart: (state, action) => {
            state.cartItems.push({...action.payload, quantity : 1});
            
        },
        addMoreToCart: (state, action) => {
            console.log('addmore to cart');
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
        },
        removeFromCart: (state, action) => {
            state.checkout = true;
        }
    }
});

export const { addToCart, removeFromCart, addMoreToCart} = cartSlice.actions;

//export const selectCart = (state) => state.cart.cartItems;
export const selectCart = state => state.cart.cartItems;

//export const selectCount = (state) => state.counter.value;


export default cartSlice.reducer;