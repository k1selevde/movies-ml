import React from 'react';


import {ReactComponent as UserSvg} from '../../static/img/user.svg'

import './User.scss'



const User = () => {
    return (
        <div className="user__wrap">
            <p className="user__name">Administrator</p>
            <div className="user__avatar">
                <UserSvg />
            </div>
            <div className="user__logout">
                <p className="user__logout--text">ВЫЙТИ</p>
            </div>
        </div>
    );
};

export default User;