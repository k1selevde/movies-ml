import React, {useState} from 'react';
import {validateAuth} from "../utils/helpers";

const Auth = () => {
    const [authData, setAuthData] = useState({username: '', password: ''})
    const [erorr, setError] = useState('')

    const changeHandler = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        console.log(fieldValue)
        setAuthData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let error = validateAuth(authData.password, authData.username)
        console.log(authData.password, authData.username)
    }

    return (
        <div className="auth__outer">
            <div className="form__container">
                <h3 className="form__title">LOGIN</h3>
                <p className="form__error">{erorr}</p>
                <form onSubmit={submitHandler} className="form">
                    <div className="form__group">
                        <label
                            className="form__label"
                            htmlFor="username"
                        >Username</label>
                        <input
                            onChange={changeHandler}
                            value={authData.username}
                            type="text"
                            className="form__input"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                        />
                    </div>
                    <div className="form__group">
                        <label
                            className="form__label"
                            htmlFor="password"
                        >Password</label>
                        <input
                            onChange={changeHandler}
                            value={authData.password}
                            type="password"
                            name="password"
                            className="form__input"
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="form__btn--wrap">
                        <button type="submit" className="form__btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;