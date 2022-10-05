import React, { useState } from 'react'
import classes from '../components/styles/Cart.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import CartItem from '../components/layout/CartItem';

function Cart() {

    const [state, setState] = useState({subtotal: 0, tax: 0, shipping: 0, grandTotal: 0})

    const valueHandler = (value) => {
        setState(...state,{
            subtotal: state.subtotal+value,
            tax: state.subtotal*(0.05),
            shipping: 150,
            grandTotal: state.subtotal+state.tax
        })
    } 
    return (
        <section className={classes.cart} onChange={valueHandler}>
            <div className={classes.heading}>
                Cart
            </div>
            
            <div className={classes['cart-body']}>
                <div className={classes['cart-body-attribute']}>
                    Subtotal
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} />1500</div>
                </div>
                <div className={classes['cart-body-attribute']}>
                    Tax(5%)
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} />500</div>
                </div>
                <div className={classes['cart-body-attribute']}>
                    Shipping
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} />150</div>
                </div>
                <div className={classes['cart-body-attribute']}>
                    Grand Total
                    <div><FontAwesomeIcon icon={faIndianRupeeSign} />2150</div>
                </div>
                <div className={classes['checkout']}>
                    <Button variant="dark">Checkout</Button>
                </div>
            </div>

            <div className={classes['items-list']}>
                <CartItem/>
                <CartItem/>
            </div>
        </section>
    )
}

export default Cart