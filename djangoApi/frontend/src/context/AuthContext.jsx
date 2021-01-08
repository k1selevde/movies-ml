import React, {useContext, useEffect, useState} from 'react'


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [isAuth, setAuth] = useState(false);
    const [serverError, setError] = useState('');

    async function signin(email,password) {
        await setAuth(true)
    }

    function logout() {
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