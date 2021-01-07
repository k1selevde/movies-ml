import React from 'react';

import Nav from '../nav/index'
import User from '../User/index'

import './Header.scss'

const Header = () => {
    return (
        <div className="my-header__wrap">
            <div className="my-header">
                <Nav/>
                <User/>
            </div>
        </div>
    );
};

export default Header;