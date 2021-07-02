import { createSlice } from "@reduxjs/toolkit";

let localStorageCart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [] ;

const initialState = {
    cartItems: localStorageCart,
    cartInfo : {
        itemCount: localStorageCart.reduce((total, product) => total + product.quantity, 0),
        total: localStorageCart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    },
    checkout: false
}



export const sumItems = (state) => {
    
    state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
    state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState,

    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({...action.payload, quantity : 1});
            //sumItems(state);
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            //sumTest(state);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            
        },
        addMoreToCart: (state, action) => {
            //console.log('addmore to cart slice');
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            
        },
        removeFromCart: (state, action) => {
                      
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            
        },
        decreaseFromCart: (state, action) => {            
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        sumItem: (state) => {
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        },
        clearCart: (state) => {            
            state.cartItems.length = 0;
            state.cartInfo.itemCount = 0;
            state.cartInfo.total = 0;
            localStorage.clear();   
            console.log('clearCart Slice')          
        },
    }
});

export const { addToCart, removeFromCart, addMoreToCart, decreaseFromCart, clearCart } = cartSlice.actions;

//export const selectCart = (state) => state.cart.cartItems;
export const selectCart = state => state.cart.cartItems;
export const selectCartInfo = state => state.cart.cartInfo;

//export const selectCount = (state) => state.counter.value;


export default cartSlice.reducer;