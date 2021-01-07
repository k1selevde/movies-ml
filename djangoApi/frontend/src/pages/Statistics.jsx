import React, {useEffect, useState } from 'react';
import Header from "../components/header";

import TableStatistic from "../components/TableStatistic";

const Statistics = () => {



    useEffect(() => {

    }, [])

    return (
        <div className="my-container">
            <Header />
            <h3 className="statistics__title">Статистика</h3>
            <TableStatistic />
        </div>
    );
};

export default Statistics;