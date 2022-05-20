import React from 'react'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'


function Header() {
    return (
        <nav>
            <div className="left">
                <img className="logo" src={logo} alt="" />
                <ul className="menu-list">
                    <li className="menu-item">Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="right">
                <img className="img-cart" src={cart} alt="" />
                <img className="img-avatar" src={avatar} alt="" />
            </div>
        </nav>
    )
}

export default Header