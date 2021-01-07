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
        </div>
    );
};

export default User;