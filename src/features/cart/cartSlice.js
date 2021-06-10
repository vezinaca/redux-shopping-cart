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
            console.log('addmore to cart slice');
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
        },
        removeFromCart: (state, action) => {
            console.log('dans slice remove from cart');
            const items = ['a', 'b', 'c', 'd', 'e', 'f'];
            const valueToRemove = 'c';
            const filteredItems = items.filter(item => item !== valueToRemove);
            console.log('filteredItems : ', filteredItems);
            // ["a", "b", "d", "e", "f"]

            
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
        },
        decreaseFromCart: (state, action) => {            
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
        }

    }
});

export const { addToCart, removeFromCart, addMoreToCart, decreaseFromCart } = cartSlice.actions;

//export const selectCart = (state) => state.cart.cartItems;
export const selectCart = state => state.cart.cartItems;

//export const selectCount = (state) => state.counter.value;


export default cartSlice.reducer;