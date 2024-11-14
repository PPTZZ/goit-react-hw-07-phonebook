import { createSlice } from '@reduxjs/toolkit';
import { fetchAPI } from '../../services/fetchAPI';

const myContactsSlice = createSlice({
	name: 'myContacts',
	initialState: {
		contacts: [],
		isLoading: false,
		error: null,
        filter: ""
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAPI.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchAPI.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.contacts = action.payload;
			})
			.addCase(fetchAPI.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { addContact, removeContact } = myContactsSlice.actions;

export const myContactsReducer = myContactsSlice.reducer;
