import { combineReducers } from '@reduxjs/toolkit';
import { productsSlice } from './slice/productsSlice';

const rootReducer = combineReducers({
    products: productsSlice.reducer,
});


export default rootReducer;