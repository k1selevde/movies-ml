import React, {useState, useEffect} from 'react';
import cn from 'classnames'



import Header from "../components/header";

// test data

const testUserList = [
    {id: '123213411', some: 'any'},
    {id: '123213412', some: 'any'},
    {id: '123213413', some: 'any'},
    {id: '123213414', some: 'any'},
    {id: '123213415', some: 'any'},
    {id: '123213416', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213412', some: 'any'},
    {id: '1232134217', some: 'any'},
    {id: '13123123', some: 'any'},
    {id: '123цук7', some: 'any'},
    {id: '123324417', some: 'any'},
    {id: '1232цу417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '12321кцу417', some: 'any'},
    {id: '1232134кцу7', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'},
    {id: '123213417', some: 'any'}
]


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

    useEffect(() => {
        // get user list
    }, [])


    // current user change
    useEffect(() => {
        // get new user data
    }, [currentUser.id])


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