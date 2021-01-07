import {Route, Redirect, Switch} from "react-router-dom"

import logo from './logo.svg';
import {Auth, Settings, Statistics} from './pages'
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";


function App() {
    const { isAuth } = useAuth();
    return (
        <div>
            <Switch>
                <Route
                    exact
                    path="/signin"
                    render={() => {
                        console.log(isAuth)
                       return (isAuth ? <Redirect to="/" /> : <Auth />)
                    }}
                />
                <PrivateRoute
                    exact
                    path="/settings"
                    component={Settings}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={Statistics}
                />
            </Switch>
        </div>
  );
}

export default App;
