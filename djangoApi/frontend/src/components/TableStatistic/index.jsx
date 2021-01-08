import React from 'react';

import './TableStatistics.scss'

let defaultValues = [
        {parametr: 'Количество людей не поситивших кинотеатр после получения рекомендаций', value: 21321},
        {parametr: 'Количество людей, которые отказались от рассылки', value: 21321},
        {parametr: 'Количество людей не посетивших кинотеатр после получения рекомендации', value: 21321},
        {parametr: 'Количество людей, посетивших кинотеатр без учета рекомендации (пошли не на предложенный фильм)', value: 21321}
    ]

const TableStatistic = ({values = defaultValues}) => {
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
                {values.map((v,index) => (
                    <tr>
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