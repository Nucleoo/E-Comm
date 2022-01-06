import React from 'react';
import './Header.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const fun = () => {
        document.getElementById("active").checked = false;
    }
    return (
        <Fragment>
            <input className='checkForNav' type='checkbox' id='active' />
            <label for="active" className='menu-btn'><i className='fas fa-bars' /></label>
            <div className='wrapper'>
                <ul className='menu'>
                    <h1 className='heads'>E-Comm</h1>

                    <li>
                        <Link onClick={fun} className='link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={fun} className='link' to="/products">Products</Link>
                    </li>
                    <li>
                        <Link onClick={fun} className='link' to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={fun} className='link' to="/about">About</Link>
                    </li>

                    <ol className='icons'>
                        <li>
                            <Link onClick={fun} className='link' to="/search"><i className="fas fa-search" /></Link>
                        </li>
                        <li>
                            <Link onClick={fun} className='link' to="/cart"><i className="fas fa-cart-plus" /></Link>
                        </li>
                        <li>
                            <Link onClick={fun} className='link' to="/login"><i className='fas fa-user' /></Link>
                        </li>
                    </ol>
                </ul>
            </div>
        </Fragment>
    )
}

export default Header;
