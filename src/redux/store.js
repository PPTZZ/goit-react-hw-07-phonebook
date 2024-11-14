import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { searchReducer } from './slices/searchSlice';
import { alertReducer } from './slices/alertSlice';
import { myContactsReducer } from './slices/myContactsSlice';

const persistConfigure = {
	key: 'root',
	storage,
};

const reducer = combineReducers({
	search: searchReducer,
	alert: alertReducer,
	myContacts: myContactsReducer,
});

const persistedReducer = persistReducer(persistConfigure, reducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export { store };
