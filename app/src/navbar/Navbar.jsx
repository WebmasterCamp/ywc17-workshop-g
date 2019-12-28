import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar as BSNavbar } from 'react-bootstrap';

import { ReactComponent as BrandLogo } from '../assets/brand.svg';

import './Navbar.scss';

function Navbar() {
    return (
        <BSNavbar 
            className="navbar"
            variant="light">
        <Link to="/">
            <BSNavbar.Brand style={{color: '#000000'}}>
                <BrandLogo height="2em" />
            </BSNavbar.Brand>
        </Link>
        </BSNavbar>
    );
}

export default Navbar;