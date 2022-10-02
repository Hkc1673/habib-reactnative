import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import apiInstance from "@services/api";

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`api/products`);
            return response?.data
        } catch (error) {
            return rejectWithValue({ error })
        }
    },
);

export const fetchCategories = createAsyncThunk(
    'fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiInstance.get(`api/categories/`);
            return response?.data
        } catch (error) {
            return rejectWithValue({ error })
        }
    },
);

export const createProducts = createAsyncThunk(
    'createProducts',
    async (data, { rejectWithValue }) => {
        try {
            const response = await apiInstance.post(`api/products`, data);
            return response?.data
        } catch (error) {
            return rejectWithValue({ error })
        }
    },
);

interface Iproducts {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface Icategories {
    id: number;
    name: string;
}

type ProductsState = {
    products: Iproducts[];
    categories: Icategories[];
    loading: boolean;
};


const initialState:ProductsState = {
    products: [],
    categories: [],
    loading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled.type]: (state, { payload }) => {
            state.products = payload?.products;
            state.loading = false;
        },
        [fetchProducts.rejected.type]: (state ) => {
            state.loading = false;
        },
        [fetchCategories.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchCategories.fulfilled.type]: (state, { payload }) => {
            state.categories = payload?.categories;
            state.loading = false;
        },
        [fetchCategories.rejected.type]: (state ) => {
            state.loading = false;
        },
        [createProducts.pending.type]: (state) => {
            state.loading = true;
        },
        [createProducts.fulfilled.type]: (state) => {
            state.loading = false;
        },
        [createProducts.rejected.type]: (state) => {
            state.loading = false;
        },

    },
});

