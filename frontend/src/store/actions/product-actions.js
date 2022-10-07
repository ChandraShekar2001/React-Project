import { ProductsActions } from "../index";
import {SingleProductSliceActions} from '../index'

export const fetchProducts = (
  keyword = "",
  currentPage = 1,
  price = [0, 30000],
  category,
  ratings = 0
) => {
  return async (dispatch) => {
    console.log(keyword);
    const sendRequest = async () => {
      let url;
      if (category)
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte] = ${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      else
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte] = ${price[1]}&ratings[gte]=${ratings}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    };

    const data = await sendRequest();
    dispatch(ProductsActions.setAllProducts(data));
  };
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  const sendRequest = async () => {
    let url;

    url = `http://localhost:4000/api/v1/product/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const data = await sendRequest();

  if(data.success)dispatch(SingleProductSliceActions.setSingleProductSuccess(data))
  else dispatch(SingleProductSliceActions.setSingleProductFail(data))
};
