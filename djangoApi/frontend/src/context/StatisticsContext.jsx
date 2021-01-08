import React, {useContext, useEffect, useState} from 'react'


const StatisticsContext = React.createContext();

export function useAuth() {
    return useContext(StatisticsContextContext)
}



export function AuthProvider({children}) {


    const [mainParams, setMainParams] = useState();
    const [serverError, setError] = useState('');

    async function getMainParams() {
        setAuth(false)
    }



    const value = {
        statistics
    }

    return (
        <StatisticsContextContext.Provider value={value}>
            {children}
        </StatisticsContextContext.Provider>
    )
}