import React from 'react';
import '../App.css'
import cart from '../assets/cart.svg'
import search from '../assets/search.svg'
import user from '../assets/user.svg'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <div className="navBrand">
                    FancyKart
                </div>
                <div className="navLinks">
                    <li>
                        <div className="search"><img src={search} alt="" /></div>
                    </li>
                    <li>
                        <div className="cart"><img src={cart} alt="" /></div>
                    </li>
                    <li>
                        <div className="profile"><img src={user} alt="" /><p>Hi Daksh</p></div>
                    </li>
                </div>
            </div>
        </nav>

    )
}

export default Nav;