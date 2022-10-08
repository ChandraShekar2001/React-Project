import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../../src/components/styles/table.css";
import { useSelector, useDispatch } from "react-redux";

import { getAdminProduct } from "../store/actions/product-actions";

const AdminAllProducts = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.adminProducts);

  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  console.log(loading);

  return (
    <div>
      <div className="heading">
        <h1>Products</h1>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </tbody>
        {loading ? (
          <p style={{ color: "black" }}>Loading...</p>
        ) : (
          products.map((item) => {
            return (
              <tbody key={ item._id}>
                <tr>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.Stock}</td>
                  <td>{item.price}</td>
                  <td>
                    <span className="tableicon">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    <span className="tableicon">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default AdminAllProducts;
