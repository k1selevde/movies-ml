import React, { useState, useEffect } from 'react';

import axios from '../../utils/axiosCore'

import './VisitSchedule.scss'

const VisitSchedule = () => {
    const [visitData, setVisitData] = useState('')

    useEffect(() => {
        axios.get('/api/visit')
            .then((res) => {
                setVisitData(res.data.visit)
            })
            .catch((e) => {
                console.log('Server bad visit request', e)
            })
    }, [])

    return (
        <div className="visitSchedule">
            <h3 className="visitSchedule__title">Таблица посещения</h3>
            <div className="visitSchedule__block"></div>
        </div>
    );
};

export default VisitSchedule;