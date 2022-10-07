import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    productsCount: 0,
    resultPerPage: 0,
    singleProduct: null
  },
  reducers: {
    setAllProducts(state, action) {
      state.allProducts = action.payload.products;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage = action.payload.resultPerPage;
    }
  },
});

export default ProductsSlice;
