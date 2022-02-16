import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://620cefe8b5736325939f0787.mockapi.io/';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const addContact = createAsyncThunk('contacts/addContact',
  async ({ name, phone }) => {
    const contact = {
      name,
      phone,
    };
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

