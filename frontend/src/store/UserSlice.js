import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        user: null,
        message: null,
        isUpdated: false,
        updateMessage: null
    },
    reducers: {
        setUser(state, action) {
            state.isAuthenticated = action.payload.success;
            if (action.payload.success) { state.user = action.payload.user; state.message = ''}
            else state.message = action.payload.message;
        },

        logOutUser(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.message = null;
        },
        clearError(state) {
            state.message = null;
            state.updateMessage = null;
            state.isUpdated = false;
        },
        updatePwd(state, action) {
            state.isUpdated = action.payload.success         
            state.updateMessage = action.payload.message
        },
        setUserUpdate(state) {
            state.isUpdated = true
        },
        setisUpdate(state) {
            state.isUpdated = false
            state.updateMessage = null;
        },
        stateReset(state){
            state.isUpdated = false;
            state.updateMessage = null
        }

    }
})

export default userSlice;