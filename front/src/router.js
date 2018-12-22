import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';

const Router = () => (
    <Switch>
        <Route exact component={Home} />
    </Switch>
);

export default Router;