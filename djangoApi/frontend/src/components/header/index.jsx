import React from 'react';

import Nav from '../Nav/index'
import User from '../User/index'

import './Header.scss'

const Header = () => {
    return (
        <div className="my-container">
            <div className="my-header__wrap">
                <div className="my-header">
                    <Nav/>
                    <User/>
                </div>
            </div>
        </div>
    );
};

export default Header;