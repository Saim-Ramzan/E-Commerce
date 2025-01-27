import { productsReducer } from '@/app/store/Slice';
import { configureStore } from '@reduxjs/toolkit';

export const makeStore = () => 
  configureStore({
    reducer: {
      products: productsReducer,
    },
  });

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof makeStore>;
