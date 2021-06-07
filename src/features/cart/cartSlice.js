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
            state.cartItems.push({...action.payload});
            //console.log('dansCartSlice add');
            //console.log(current(state));
            //console.log("state.cartItems dans cartSlice: ", state.cartItems);
        },
        removeFromCart: (state, action) => {
            state.checkout = true;
        }
    }
});

export const { addToCart, removeFromCart} = cartSlice.actions;

//export const selectCart = (state) => state.cart.cartItems;
export const selectCart = state => state.cart.cartItems;

//export const selectCount = (state) => state.counter.value;


export default cartSlice.reducer;