import React, { useContext } from 'react';
import './CartsItem.css';
import { ShopContext } from '../../Contex/ShopContex';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartsItem = () => {
    const { getTotalCartAmount , all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartsItem'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='cart-icon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='carts-item-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitem-remove' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartItems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartoterms-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartoterms-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartoterms-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-procode">
                    <p>If you have a promo code, enter it here</p>

                    <div className="cartitems-promobox">
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartsItem;
