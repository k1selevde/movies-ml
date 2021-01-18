import React, {useState, useEffect} from 'react';
import cn from 'classnames'



import Header from "../components/header";

const UserItem = ({curUser, user, clickHandler}) => {
    return (
        <div
            onClick={() => clickHandler(user)}
            key={user.id}
            className={cn("analytics__userItem__wrap",
                    {"flow": curUser.id === user.id}
                )}

        >
            <p className="analytics__userItem__id">{user.id}</p>
        </div>
    )
}




const AnaliticsMl = () => {

    const [currentUser, setCurrentUser] = useState({id: '123213417', some: 'any'})
    const [userList, setUserList] = useState(testUserList)


    const userLinkHandler = (user) => {
        console.log(`Click : ${user.id}`)
        setCurrentUser(user)
    }


    return (
        <>
            <Header/>

            <section className="analytics__body">
                <div className="analytics__container">
                    <h3 className="analytics__title">Аналитка ML</h3>
                    <div className="analytics__wrap">
                        <div className="analytics__userList">
                            <h3 className="analytics__userList__title">Список зрителей</h3>
                            <div className="analytics__userList__wrap">
                                {userList.map(user => (
                                    <UserItem user={user} curUser={currentUser} clickHandler={userLinkHandler}/>
                                ))}
                            </div>
                        </div>
                        <div className="analytics__currentUser">
                            <h4>Current user, {currentUser.id}</h4>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AnaliticsMl;