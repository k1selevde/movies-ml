import React, { useState, useEffect } from 'react';

import axios from '../../utils/axiosCore'

import './MessagesMailer.scss'

const MessagesMailer = ({defValue ='Мое сообщение кинолюбителям'}) => {

    const [localDefValue, setLocalDefValue] = useState(defValue)
    const [curValue, setCurValue] = useState(defValue)
    // const [serverError, setServerError] = useState('')


    useEffect(() => {
        axios.get('/api/message')
            .then(res => {
                setLocalDefValue(res.data.value)
            })
            .catch((e) => {
                alert(e)
            })
        }, [])


    const handleSubmit = async () => {
        await axios.post('/api/message', {value: curValue}, {})
            .then(() => {
                setLocalDefValue(curValue)
                alert('Изменения успешно сохранены')
            })
            .catch((e) => alert('Ошибка на сервере. Попробуйте позже'))


    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setCurValue(e.target.value)
    }

    return (
        <div className="messagesMailer">
            <div className="messagesMailer__top">
                <h3 className="messagesMailer__title">Рассылка в сообщении</h3>
                <button
                    onClick={handleSubmit}
                    className="btn btn-success"
                    disabled={localDefValue == curValue}
                >Сохранить</button>
            </div>
            <div className="messagesMailer__wrap">
                <textarea
                    onChange={handleChange}
                    defaultValue={localDefValue}
                    placeholder="Введите новое сообщение"
                    className="messagesMailer__textarea"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                >
                </textarea>
            </div>
        </div>
    );
};

export default MessagesMailer;