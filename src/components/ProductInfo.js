import React from 'react'
import cart from '../images/icon-cart.svg'
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'

function ProductInfo() {
    return (
        <div className='product-info'>
            <h4>sneaker company</h4>
            <h1>Fall Limited Sneakers</h1>

            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

            <div className="price">
                <p>$125.00</p>
                <p>50%</p>
            </div>
            <p>$250.00</p>
            <div className="buttons">
                <button className="subtract"><img className="cart-cart" src={minus} alt="" /> </button>
                3
                <button className="add"><img className="cart-cart" src={plus} alt="" /> </button>
                <button className="addtocart"> <img className="cart-cart" src={cart} alt="" />  Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductInfo