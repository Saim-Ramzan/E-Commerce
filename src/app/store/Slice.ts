import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "@/lib/firebase";

interface ProductsInterface {
  name: string;
  description: string;
  price: number;
  images: []; // Array of image URLs
}

interface ProductsState {
  products: ProductsInterface[];
  loading: boolean;
  error: string | null;
  productsLength: number
}

const initialState: ProductsState = {
  products: [],
  productsLength: 0,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const productsList: ProductsInterface[] = [];
  querySnapshot.forEach((doc) => {
    productsList.push(doc.data() as ProductsInterface);
  });
  return productsList;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.productsLength = action.payload.length
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const productsReducer = productsSlice.reducer;
