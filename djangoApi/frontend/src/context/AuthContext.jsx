import React, {useContext, useEffect, useState} from 'react'


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const defAuth = Boolean(localStorage.getItem('isAuth')) ? localStorage.getItem('isAuth') : false;

    const [isAuth, setAuth] = useState(defAuth);
    const [serverError, setError] = useState('');

    async function signin(email,password) {
        await setAuth(true)
    }

    async function logout() {
        await localStorage.removeItem('isAuth')
        setAuth(false)
    }

    const value = {
        logout,
        signin,
        isAuth,
        serverError
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}