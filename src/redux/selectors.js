import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = (state) => state.myContacts.contacts;
