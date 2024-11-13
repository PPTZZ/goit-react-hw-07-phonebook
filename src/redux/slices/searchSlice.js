import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value:''
};

const searchSlice = createSlice({
	name: 'searchContacts',
	initialState,
	reducers: {
		setSearch(state, action) {
			state.value = action.payload;
		},
	},
});

export const { setSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
