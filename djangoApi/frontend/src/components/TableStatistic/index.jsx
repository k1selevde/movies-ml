import React, { useState, useEffect } from 'react';

import axios from "../../utils/axiosCore";

import './TableStatistics.scss'


const getCount = (obj_entries, movie) => {
    return obj_entries.find(entry => entry[0] == movie.id)[1]
}

const TableStatistic = () => {

    const [movies, setMovies] = useState([])
    const [counts, setCounts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(async () => {
        setLoading(true)
        await axios.get('/api/rec/')
            .then((res) => {
                setCounts(Object.entries(res.data.rec))
                setMovies(res.data.movies)
                setLoading(false)
            })
            .catch((e) => {
                console.log(`Server bad table request. ${e}`)
                alert(`Server bad table request.`)
                setLoading(false)
            })
    }, [])




    return (
        <div className="tableStatistics__wrap">
            <h3 style={{fontSize: '18px', fontWeight: '500',marginBottom: '15px' }}>Таблица самых рекомендуемых фильмов</h3>
            <table style={{background: '#576597'}} className="table table-hover">
                <thead>
                <tr>
                    <th style={{textAlign: 'center'}} scope="col">id</th>
                    <th style={{textAlign: 'center'}} scope="col">НАЗВАНИЕ</th>
                    <th style={{textAlign: 'center'}} scope="col">РЕЙТИНГ</th>
                    <th style={{textAlign: 'center'}} scope="col">ОБНОВЛЕНО</th>
                    <th style={{textAlign: 'center'}} scope="col">ID ЖАНРА</th>
                    <th style={{textAlign: 'center'}} scope="col">ПРОДОЛЖИТЕЛЬНОСТЬ</th>
                    <th style={{textAlign: 'center'}} scope="col">КОЛИЧЕСТВО</th>
                </tr>
                </thead>
                <tbody>
                {
                    loading ? (
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <div style={{margin: '10px 0 10px 15px'}} className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                            </div>
                    ) :
                        movies.map((v,index) => (
                        <tr key={v.id}>
                            <td style={{textAlign: 'center'}}>{v[0].id}</td>
                            <td>{v[0].name}</td>
                            <td style={{textAlign: 'center'}}>{v[0].rate}</td>
                            <td style={{textAlign: 'center'}}>{v[0].updatedat.slice(0,10)}</td>
                            <td style={{textAlign: 'center'}}>{v[0].genreid_id}</td>
                            <td style={{textAlign: 'center'}}>{v[0].duration}</td>
                            <td style={{textAlign: 'center'}}>{getCount(counts,v[0])}</td>
                        </tr>
                        )
                    )
                }


                </tbody>
            </table>
        </div>
    );
};

export default TableStatistic;