import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/season1">
                SEASON1
            </Link>
            <Link className='option' to="/venues">
                VENUES
            </Link>
        </div>
    </div>
)

export default Header;