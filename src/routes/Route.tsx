import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import ROUTE from './RouterName';
import Login from '../pages/layout/Login';
import Application from '../pages/layout/Application';
import storeState from '../store/store-state';

export default function RouterWrapper(props: any) {
    let { component: Component, isPrivate, ...rest  } = props;

    const { signed } = storeState().auth;

    if (!signed && isPrivate) {
        return <Redirect to={ROUTE.LOGIN} />
    }

    if (signed && !isPrivate) {
        return <Redirect to={ROUTE.HOME} />
    }

    const Layout = signed ? Application : Login;

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouterWrapper.propType = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouterWrapper.defaultTypes = {
    isPrivate: false
};
