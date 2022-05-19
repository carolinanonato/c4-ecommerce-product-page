import React from 'react'
import logo from '../images/logo.svg'
import cart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'


function Header() {
    return (
        <nav>
            <div className="left">
                <img src={logo} alt="" />
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="right">
                <img src={cart} alt="" />
                <img src={avatar} alt="" />
            </div>
        </nav>
    )
}

export default Header