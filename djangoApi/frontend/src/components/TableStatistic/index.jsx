import React, { useState, useEffect } from 'react';

import axios from "../../utils/axiosCore";

import './TableStatistics.scss'

let defaultValues = [
        {parametr: 'Количество людей не поситивших кинотеатр после получения рекомендаций', value: 21321},
        {parametr: 'Количество людей, которые отказались от рассылки', value: 21321},
        {parametr: 'Количество людей не посетивших кинотеатр после получения рекомендации', value: 21321},
        {parametr: 'Количество людей, посетивших кинотеатр без учета рекомендации (пошли не на предложенный фильм)', value: 21321}
    ]

const TableStatistic = () => {

    const [tableValues, setTableValues] = useState(defaultValues)


    useEffect(() => {
        axios.get('/api/baseStat')
            .then((res) => {
                setTableValues(res.data.values)
            })
            .catch((e) => {
                console.log(`Server bad table request. ${e}`)
            })
    }, [])

    return (
        <div className="tableStatistics__wrap">
            <table style={{background: '#576597'}} className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Параметр</th>
                    <th scope="col">Значение</th>
                </tr>
                </thead>
                <tbody>
                {tableValues.map((v,index) => (
                    <tr key={v.parametr}>
                        <th scope="row">{index + 1}</th>
                        <td>{v.parametr}</td>
                        <td>{v.value}</td>
                    </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TableStatistic;