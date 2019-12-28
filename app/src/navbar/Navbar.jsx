import React from 'react';

import { Navbar as BSNavbar } from 'react-bootstrap';

import './Navbar.scss';

function Navbar() {
    return (
        <BSNavbar 
            className="navbar"
            variant="light">
        <BSNavbar.Brand style={{color: '#000000'}}>Homesi-res</BSNavbar.Brand>
        </BSNavbar>
    );
}

export default Navbar;