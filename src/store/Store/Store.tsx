import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/CartSlice';

const Store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default Store;