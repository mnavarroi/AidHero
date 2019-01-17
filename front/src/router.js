import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Projects from './containers/Projects/Projects';
import ProjectDetails from './containers/ProjectDetails/ProjectDetails';
import Profile from './containers/Profile/Profile';
import FAQ from './containers/FAQ/FAQ';
import Schedule from './containers/Profile/Schedule';


const Router = () => (
    <Switch>
        <Route exact path={"/"} component={Home} />
            <Route exact path={"/Profile"} component={Profile} />
        <Route exact path={"/Projects"} component={Projects} />
        <Route exact path={"/ProjectDetails/:id"} component={ProjectDetails} />

        <Route exact path={"/FAQ"} component={FAQ} />
        <Route exact path={"/Schedule"} component={Schedule} />
    </Switch>
);

export default Router;