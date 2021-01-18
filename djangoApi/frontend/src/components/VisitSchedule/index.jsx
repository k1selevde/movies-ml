import React, {useState, useEffect} from 'react';
import axios from '../../utils/axiosCore'


import {Line} from 'react-chartjs-2'
import {generateLabelsForTable} from '../../utils/helpers'

import './VisitSchedule.scss'


const VisitSchedule = () => {
    const [cinemas, setCinemas] = useState(null)
    const [currentCinema, setCurrentCinema] = useState(null)
    const [visitData, setVisitData] = useState(null)
    const [isLoadingVisitData, setLoadingVisitData] = useState(false)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)

    const years = [
        {
            name: '2019',
        }
    ]
    const months = [
        {
            name: 'Январь',
            daysCount: 31,
            pres: '01'
        },
        {
            name: 'Февраль',
            daysCount: 28,
            pres: '02'
        },
        {
            name: 'Март',
            daysCount: 31,
            pres: '03'
        },
        {
            name: 'Апрель',
            daysCount: 30,
            pres: '04'
        },
        {
            name: 'Май',
            daysCount: 31,
            pres: '05'
        },
        {
            name: 'Июнь',
            daysCount: 30,
            pres: '06'
        },
        {
            name: 'Июль',
            daysCount: 31,
            pres: '07'
        },
        {
            name: 'Август',
            daysCount: 31,
            pres: '08'
        },
        {
            name: 'Сентябрь',
            daysCount: 30,
            pres: '09'
        },
        {
            name: 'Октябрь',
            daysCount: 31,
            pres: '10'
        },
        {
            name: 'Ноябрь',
            daysCount: 30,
            pres: '11'
        },
        {
            name: 'Декабрь',
            daysCount: 31,
            pres: '12'
        }
    ]


    const selectCinemasHandler = (e) => {
        setCurrentCinema(e.target.value)
    }

    const selectYearHandler = (e) => {
        console.log(e.target.value)
        setSelectedYear(e.target.value)
    }

    const selectMonthHandler = (e) => {
        console.log(e.target.value)
        setSelectedMonth(e.target.value)
    }

    const chartData = {
        labels: (Boolean(selectedMonth) ? generateLabelsForTable(months.find(month => month.pres == selectedMonth).daysCount) : generateLabelsForTable(30)),
        datasets: [{
            label: 'Посещение кинотеатра',
            data: visitData,
            borderColor: ['lightcoral']
        }
        ]
    }

    // get visit data

    useEffect(async () => {
        if (Boolean(currentCinema) && Boolean(selectedYear) && Boolean(selectedMonth)) {
            let currentDaysCount = months.find(month => month.pres == selectedMonth).daysCount
            setLoadingVisitData(true)
            await axios.get(`/api/visit/${currentCinema}/${selectedYear}/${selectedMonth}/${currentDaysCount}`)
                .then((res) => {
                    setVisitData(res.data.visit)
                    setLoadingVisitData(false)
                })
                .catch((e) => {
                    console.log('Server bad visit request', e)
                    setLoadingVisitData(false)
                })
            console.log('current cinema change')
        }

    }, [currentCinema, selectedYear, selectedMonth])


    // get cinemas data
    useEffect(async () => {
        console.log('cinemas request start')
        await axios.get(`/api/cinemas/`)
            .then((res) => {
                setCinemas(res.data)
            })
            .catch((e) => {
                console.log('Server bad cinemas request', e)
            })
        console.log('cinemas requiest end')
    }, [])


    return (
        <div className="visitSchedule">
            <h3 className="visitSchedule__title">Таблица посещения</h3>

            <div className="visitSchedule__top">
                <div>
                    <select
                    disabled={isLoadingVisitData}
                    className="visitSchedule__dropdown"
                    onChange={(e) => selectCinemasHandler(e)}
                    >

                        <option value="default" selected disabled hidden>Выберите кинотеатр</option>
                        {
                            cinemas && cinemas.map((cinema) => {
                                let hallid = cinema.fields.hallid
                                return (
                                    <option value={hallid}>{hallid}</option>
                                )
                            })
                        }

                    </select>
                    {isLoadingVisitData &&
                        <div className="visitSchedule__top__spinner spinner-border text-dark" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                </div>

                <div>

                    <select
                        disabled={isLoadingVisitData}
                        className="visitSchedule__dropdown__month"
                        onChange={(e) => selectMonthHandler(e)}
                    >

                        <option value="default" selected disabled hidden>Выберите месяц</option>
                        {
                            months && months.map((month) => {
                                return (
                                    <option value={month.pres}>{month.name}</option>
                                )
                            })
                        }

                    </select>

                    <select
                        disabled={isLoadingVisitData}
                        className="visitSchedule__dropdown__year"
                        onChange={(e) => selectYearHandler(e)}
                    >
                        <option value="default" selected disabled hidden>Выберите год</option>
                        {
                            years && years.map((year) => {
                                return (
                                    <option value={year.name}>{year.name}</option>
                                )
                            })
                        }

                    </select>

                </div>
            </div>


            <div className="visitSchedule__block">
                <Line
                    data={chartData}
                    width={100}
                    height={50}
                    options={{maintainAspectRatio: false}}
                />
            </div>
        </div>
    );
};

export default VisitSchedule;