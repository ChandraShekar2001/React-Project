import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './ProductsSlice'


const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer
    }
})

export const ProductsActions = ProductsSlice.actions

export default store;
