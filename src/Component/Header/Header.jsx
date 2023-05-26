import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>login</Link>
        </nav>
    );
};

export default Header;