import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import ProjectDetails from './containers/ProjectDetails/ProjectDetails';
import Profile from './containers/Profile/Profile';

const Router = () => (
    <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Projects"} component={Projects} />
        <Route exact path={"/ProjectDetails"} component={ProjectDetails} />
        <Route exact path={"/Profile"} component={Profile} />
    </Switch>
);

export default Router;