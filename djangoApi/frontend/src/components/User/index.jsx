import React from 'react';
import { useAuth } from "../../context/AuthContext";

import {ReactComponent as UserSvg} from '../../static/img/user.svg'

import './User.scss'



const User = () => {
    const { logout } = useAuth()

    const handleLogout = () => {
        console.log('log out')
        logout()
    }
    return (
        <div className="user__wrap">
            <p className="user__name">Administrator</p>
            <div className="user__avatar">
                <UserSvg />
            </div>
            <div>
                <button
                    onClick={handleLogout}
                    className="user__logout"
                >
                    <p

                        className="user__logout--text"
                    >ВЫЙТИ</p>
                </button>
            </div>
        </div>
    );
};

export default User;