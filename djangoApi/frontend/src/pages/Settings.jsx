import React from 'react';

import Header from "../components/header";
import MessagesMailer from '../components/MessagesMailer'
import FrequencySend from "../components/FrequencySend";

const Settings = () => {
    return (
        <div className="my-container">
            <Header />
            <section className="settings__body">
                <h3 className="settings__title">Settings</h3>
                <MessagesMailer/>
                <div className="settings__senders">
                    <FrequencySend
                        object={"телефон"}
                        defValue={'20'}
                    />
                    <FrequencySend
                        object={"почту"}
                        defValue={'40'}
                    />
                </div>
            </section>
        </div>
    );
};

export default Settings;