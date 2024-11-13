import { createSlice, nanoid } from '@reduxjs/toolkit';

// const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));

const initialState = {
	value: [
		{ id: 0, name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 1, name: 'Hermione Kline', number: '443-89-12' },
		{ id: 2, name: 'Eden Clements', number: '645-17-79' },
		{ id: 3, name: 'Annie Copeland', number: '227-91-26' },
	]
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		addContact: {
			reducer: (state, action) => {
				state.value.push(action.payload);
			},
			prepare: (item) => {
				return {
					payload: {
						id: nanoid(),
						...item,
					},
				};
			},
		},
		removeContact(state, action) {
			state.value = state.value.filter(
				(contact) => contact.id != action.payload
			);
		},
	},
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
