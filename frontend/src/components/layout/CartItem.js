import React, { useState } from 'react'
import classes from '../styles/Cart.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';

function CartItem({state, valueHandler}) {

    let defaultPrice = 1500
    const [data, setData] = useState({price: defaultPrice, quantity: 1})

    return (
        <div className={classes.card}>
            <div  className={`${classes['image']}`}>
                <img src="./images/realme Band 2.png" alt="..." />
            </div>
            <div className={`${classes['name']}`}>
                Realme Band 2
            </div>
            <div className={`${classes['price']}`}>
                <div><FontAwesomeIcon icon={faIndianRupeeSign} />{data.price}</div>
            </div>
            <div className={`${classes['quantity']}`}>
                <input type='number' value={data.quantity} min='1' onChange={(e) => setData({quantity: e.target.value, price: defaultPrice*e.target.value})}/>
            </div>
            <div className={`${classes['remove']}`}>
                <Button variant="outline-danger" className={classes.black}>Remove</Button>
            </div>
        </div>
    )
}

export default CartItem