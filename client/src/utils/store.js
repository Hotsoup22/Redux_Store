// Creates a Redux store that holds the state of the app. Only o5JUD store should exist.
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Importing the reducer file that is mostly unchanged
import reducers from './reducers';
import cartSlice from '../utils/slices/cartSlice'
import categoriesSlice from '../utils/slices/categoriesSlice'
import productSlice from '../utils/slices/productSlice'

export default configureStore({


	reducer: {
		cart: cartSlice,
		category: categoriesSlice,
		product: productSlice
	},

});