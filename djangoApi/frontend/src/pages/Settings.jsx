import React from 'react';

import Header from "../components/header";
import MessagesMailer from '../components/MessagesMailer'
import FrequencySend from "../components/FrequencySend";

const Settings = () => {
    return (
        <>
            <Header/>
            <section className="settings__body">
                <div className="settings__container">
                    <h3 className="settings__title">Настройки</h3>
                    <MessagesMailer />
                    <div className="settings__senders">
                        <FrequencySend
                            object={"телефон"}
                            type={"phone"}
                            defValue={"20"}
                        />
                        <FrequencySend
                            object={"почту"}
                            type={"mail"}
                            defValue={"10"}
                        />
                    </div>
                </div>
            </section>
        </>
);
};

export default Settings;