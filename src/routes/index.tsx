import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import ROUTES from './RouterName';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes() {
    return (
        <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.HOME} exact component={Home} isPrivate />
        </Switch>
    );
}
