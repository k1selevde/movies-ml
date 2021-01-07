import React from 'react';
import {NavLink} from 'react-router-dom'

import'./Nav.scss'

const Nav = () => {
    return (
        <div>
            <div className="nav__wrap">
                <div className="nav__item">
                    <NavLink
                        strict
                        activeClassName='nav__link--active'
                        className="nav__link"
                        to="/"
                    >
                        Статистика
                    </NavLink>
                </div>
                <div className="nav__item">
                    <NavLink
                        strict
                        activeClassName='nav__link--active'
                        className="nav__link"
                        to="/settings"
                    >
                        Настройки
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;