import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar as BSNavbar } from 'react-bootstrap';

import { ReactComponent as BrandLogo } from '../assets/brand.svg';

import './Navbar.scss';

function Navbar() {
    return (
        <BSNavbar 
            className="navbar"
            variant="light"
            style={{position: 'sticky', width: '100%', zIndex: '3000', top: '0'}}
        >
        <Link to="/">
            <BSNavbar.Brand style={{color: '#000000'}}>
                <BrandLogo height="40px" />
            </BSNavbar.Brand>
        </Link>
        </BSNavbar>
    );
}

export default Navbar;