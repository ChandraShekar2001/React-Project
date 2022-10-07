import { createSlice } from "@reduxjs/toolkit";

const SingleProductsSlice = createSlice({
  name: "getProduct",
  initialState: {
    error: null,
    singleProduct: null,
    success: false,
  },
  reducers: {
    setSingleProductSuccess(state, action) {
      state.error = null
      state.success = true;
      state.singleProduct = action.payload.product;
    },
    setSingleProductFail(state, action) {
      state.error = action.payload.message;
    },
    setsSingleProductReset(state) {
        state.error = null;
    },
  },
});

export default SingleProductsSlice;
