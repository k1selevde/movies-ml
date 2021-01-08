import React, {useState} from 'react';

import './MessagesMailer.scss'

const MessagesMailer = ({defValue ='ewrwerwerwerwrewer'}) => {

    const [localDefValue, setLocalDefValue] = useState(defValue)
    const [curValue, setCurValue] = useState(defValue)

    const handleSubmit = (e) => {
        alert(`Изменения сохранены, ${curValue}`)
        setLocalDefValue(curValue)
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