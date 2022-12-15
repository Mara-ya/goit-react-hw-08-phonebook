import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axios.post('/contacts', data);
            return response.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
    );
    
    export const removeContact = createAsyncThunk(
        'contacts/deleteContact',
        async (id , {rejectWithValue}) => {
            try {
                const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);