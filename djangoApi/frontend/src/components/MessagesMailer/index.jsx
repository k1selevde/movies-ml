import React, { useState, useEffect } from 'react';

import axios from '../../utils/axiosCore'

import './MessagesMailer.scss'

const MessagesMailer = () => {

    // const [localDefValue, setLocalDefValue] = useState('')
    const [curValue, setCurValue] = useState('')
    // const [serverError, setServerError] = useState('')



    useEffect(() => {
        axios.get('/api/message')
            .then(res => {
                setCurValue(res.data)
            })
            .catch((e) => {
                alert(e)
            })
        }, [])


    const handleSubmit = async () => {
        await axios.post('/api/message/', {value: curValue}, {})
            .then((res) => {
                setCurValue(JSON.parse(res.data).value)
                alert('Изменения успешно сохранены')
            })
            .catch((e) => {
                console.log(e)
                alert('Ошибка на сервере. Попробуйте позже')
            })


    }

    const handleChange = (e) => {
        setCurValue(e.target.value)
    }

    return (
        <div className="messagesMailer">
            <div className="messagesMailer__top">
                <h3 className="messagesMailer__title">Рассылка в сообщении</h3>
                <button
                    onClick={handleSubmit}
                    className="btn btn-success"
                    // disabled={localDefValue == curValue}
                >Сохранить</button>
            </div>
            <div className="messagesMailer__wrap">
                <textarea
                    onChange={handleChange}
                    value={curValue}
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