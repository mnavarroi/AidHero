import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';

const Router = () => (
    <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Projects"} component={Projects} />
    </Switch>
);

export default Router;