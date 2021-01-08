import React, {useEffect, useState } from 'react';


import VisitSchedule from '../components/VisitSchedule'
import Header from "../components/header";




import TableStatistic from "../components/TableStatistic";

const Statistics = () => {



    useEffect(() => {

    }, [])

    return (
        <>
            <div>
                <Header/>
                <section className="statistics__body">
                    <div className="statistics__wrap">
                        <div className="statistics__container">
                            <h3 className="statistics__title">Статистика</h3>
                            <VisitSchedule/>
                            <TableStatistic/>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Statistics;