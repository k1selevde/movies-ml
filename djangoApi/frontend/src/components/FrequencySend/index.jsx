import React, {useState, useEffect} from 'react';

import axios from '../../utils/axiosCore'
import { getCurrentDayStr } from "../../utils/helpers";

import './FrequencySend.scss'




const FrequencySend = ({object, type}) => {

    const [curValue,setCurrentValue] = useState(0)



    const toodlerHandler = (e) => {
        setCurrentValue(e.target.value)
    }


    useEffect(() => {
        axios.get(`/api/freq/${type}/${curValue}/`)
            .then(res => {
                setCurrentValue(res.data)
            })
            .catch((e) => {
                console.log('freq get:  ', e)
                alert(`Ошибка на сервере.Попробуйте позже. ${e}`)
            })
    }, [])




    const saveHandler = async () => {
        await axios.post(`/api/freq/${type}/${curValue}/`, {}, {})
            .then(() => {
                setCurrentValue(curValue)
                alert('Изменения сохранены')
            })
            .catch((e) => {
                alert(`Ошибка на сервере.Попробуйте позже. ${e}`)
            })
    }


    return (
        <div>
            <div className="freqSend__top">
                <h4 className="freqSend__title">Частота отправки на {object}</h4>
                <button
                    onClick={saveHandler}
                    className="btn btn-success freqSend__btn"
                >
                    Сохранить</button>
            </div>
            <div className="freqSend__middle">
                <p className="freqSend__middle--left">1 раз в </p>
                <div className="freqSend__result">
                    <div>{curValue}</div>
                </div>
                <p>{getCurrentDayStr(curValue)}</p>
            </div>
            <div>
                <input
                    max={50}
                    onChange={toodlerHandler}
                    type="range"
                    className="form-control-range freqSend__toddler"
                    id="formControlRange"
                />
            </div>
        </div>
    );
};

export default FrequencySend;