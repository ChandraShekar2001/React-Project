import React from "react";
import "../components/styles/AdminCreateProduct.css";
// import { arrAction } from "../store/reducers/productArr-slice";
import {  useSelector } from "react-redux";

const AdminCreateProduct = () => {
//   const dispatch = useDispatch();
  const show = useSelector((state) => state.FormShow.show);
//   const [data, setData] = useState({
//     productName: "",
//     price: "",
//     productDiscription: "",
//     item: "",
//     stock: "",
//   });

//   const onChangeInputHandler = (e) => {
//     setData({ ...setData, [e.target.id]: e.target.value });
//   };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // dispatch(arrAction.AddDataToArr(data));
    // setData({
    //   productName: "",
    //   price: "",
    //   productDiscription: "",
    //   item: "",
    //   stock: "",
    // });
  };

  return (
    <>
      <div className="completeForm" style={{ left: show ? "44%" : "37%" }}>
        <form className="productForm" onSubmit={onSubmitHandler}>
          <div className="createProductForm">
            <div
              style={{ marginLeft: -40, marginTop: -20 }}
              className="heading"
            >
              <h1>Add Product</h1>
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="text"
                placeholder="Product Name"
                className="inputField"
                id="productName"
                // value={data.productName}
              />
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="number"
                placeholder="Price"
                className="inputField"
                id="price"
                // value={data.price}
              />
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="text"
                placeholder="Product Discription"
                className="inputField"
                id="productDiscription"
                // value={data.productDiscription}
              />
            </div>
            <div className="divInput">
              <select
                className="inputField selectOption"
                id="item"
                // onChange={onChangeInputHandler}
                value="laptop"
              >
                <option id="dropDown-items">Laptop</option>
                <option className="dropDown-items">Mobile</option>
                <option className="dropDown-items">Ear Phones</option>
                <option className="dropDown-items">Digital Watches</option>
                <option className="dropDown-items">TV</option>
                <option className="dropDown-items">Camera</option>
              </select>
            </div>
            <div className="divInput">
              <input
                // onChange={onChangeInputHandler}
                type="number"
                placeholder="Stock*"
                className="inputField"
                id="stock"
                // value={data.stock}
              />
            </div>
            <button type="submit" className="createButton">
              CREATE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminCreateProduct;
