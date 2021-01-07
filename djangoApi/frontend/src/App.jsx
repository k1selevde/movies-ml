import {Route, Redirect, Switch} from "react-router-dom"

import logo from './logo.svg';
import {Auth, Settings, Statistics} from './pages'
import Header from './components/header'
import './App.css';

function App() {
  return (
        <div className="my-container">
            <Header />
            <Switch>
                <Route
                    exact
                    path="/signin"
                    component={Auth}
                />
                <Route
                    exact
                    path="/settings"
                    component={Settings}
                />
                <Route
                    exact
                    path="/"
                    component={Statistics}
                />
            </Switch>
        </div>
  );
}

export default App;
