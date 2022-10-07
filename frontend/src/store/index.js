import { configureStore } from '@reduxjs/toolkit'
import ProductsSlice from './ProductsSlice'
import UserSlice from './UserSlice'
import ProfileSlice from './ProfileSlice'
import forgotPasswordSlice from './ForgotPasswordSlice'
import resetForgotPasswordSlice from './ResetForgotPassword'
import SingleProductSlice from './SingleProductSlice'


const store = configureStore({
    reducer: {
        products: ProductsSlice.reducer,
        user: UserSlice.reducer,
        profile: ProfileSlice.reducer,
        forgotPassword: forgotPasswordSlice.reducer,
        resetForgotPassword: resetForgotPasswordSlice.reducer,
        getProduct: SingleProductSlice.reducer
    }
})

export const ProductsActions = ProductsSlice.actions
export const UserActions = UserSlice.actions
export const ProfileActions = ProfileSlice.actions
export const forgotPasswordActions = forgotPasswordSlice.actions
export const resetForgotPasswordActions = resetForgotPasswordSlice.actions
export const SingleProductSliceActions = SingleProductSlice.actions

export default store;
