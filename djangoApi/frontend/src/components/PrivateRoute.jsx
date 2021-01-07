import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest}) {
    const { isAuth } = useAuth()

    return (
        <Route {...rest}
            render={props => {
                return isAuth ? <Component {...props} /> : <Redirect to="/signin" />
            }}
        >
        </Route>
    )
}