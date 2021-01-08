import React, {useState, useEffect} from 'react';

import axios from '../../utils/axiosCore'

import './FrequencySend.scss'


const FrequencySend = ({object, defValue}) => {

    const [localDefValue, setLocalDefValue] = useState(defValue)
    const [curValue,setCurrentValue ] = useState(defValue)

    useEffect(() => {
        axios.get('/api/freq')
            .then(res => {
                setLocalDefValue(res.data.value)
            })
            .catch((e) => {
                console.log('freq',e)
            })
    }, [])

    const toodlerHandler = (e) => {
        setCurrentValue(e.target.value)
    }

    const saveHandler = async () => {
        await axios.post('/api/freq', {}, {})
            .then(() => {
                setLocalDefValue(curValue)
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
                    disabled={curValue == localDefValue}
                    onClick={saveHandler}
                    className="btn btn-success freqSend__btn"
                >
                    Сохранить</button>
            </div>
            <div className="freqSend__middle">
                <div className="freqSend__result">
                    <div>{curValue}</div>
                </div>
                <p>раз / мин</p>
            </div>
            <div>
                <input
                    onChange={toodlerHandler}
                    type="range"
                    className="form-control-range freqSend__toddler"
                    id="formControlRange"
                    defaultValue={localDefValue}
                />
            </div>
        </div>
    );
};

export default FrequencySend;