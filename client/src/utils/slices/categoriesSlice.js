import { createSlice } from '@reduxjs/toolkit'
// import {
// 	UPDATE_CATEGORIES,
// 	UPDATE_CURRENT_CATEGORY,
// } from '../actions';

export const categorySlice = createSlice({
	name: 'category',
	initialState: {
		categories: [],
		currentCategory: " ",
	},
	reducers: {
		UPDATE_CATEGORIES: (state, action) => {
			return {
				...state,
				categories: [...action.categories],
			}
		},

		UPDATE_CURRENT_CATEGORY: (state, action) => {
			return {
				...state,
				currentCategory: action.currentCategory,
			};
		},
	}

})
export const { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } = categorySlice.actions
export default categorySlice.reducer