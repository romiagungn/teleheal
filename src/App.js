import React from 'react';
import './App.css';
import SignInOutContainer from './containers/SignIn';
import Home from './containers/home';
import { Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path='/' component={SignInOutContainer} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/klinik' component={Home} />
            <Route exact path='/rs' component={Home} />
            <Route exact path='/profile' component={Home} />
        </Switch>
    );
}

export default App;
