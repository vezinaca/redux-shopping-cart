import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartInfo : {
        itemCount: 0,
        total: 0
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
            
        },
        addMoreToCart: (state, action) => {
            console.log('addmore to cart slice');
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            
        },
        removeFromCart: (state, action) => {
                      
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
            
        },
        decreaseFromCart: (state, action) => {            
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        },
        sumItem: (state) => {
            state.cartInfo.itemCount = state.cartItems.reduce((total, product) => total + product.quantity, 0);
            state.cartInfo.total = state.cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        },
        sumTest: (state) => {
            let test = 2342;
            console.log("test: ", test);
        }

    }
});

export const { addToCart, removeFromCart, addMoreToCart, decreaseFromCart } = cartSlice.actions;

//export const selectCart = (state) => state.cart.cartItems;
export const selectCart = state => state.cart.cartItems;
export const selectCartInfo = state => state.cart.cartInfo;

//export const selectCount = (state) => state.counter.value;


export default cartSlice.reducer;