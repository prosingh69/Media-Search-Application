import { configureStore } from '@reduxjs/toolkit';
import searchSliceReducer from "../STORE/FEATURES/SearchSlice"
import WishSliceReducer from "../STORE/FEATURES/WishlistSlice"
export const store =configureStore({
    reducer:{
        search : searchSliceReducer,
        like : WishSliceReducer,
    },
})
