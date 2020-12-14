import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuardedRoute = ({ component: Component, appProps, ...rest }) => {
    console.log(Component, appProps, rest);
    return (
        <Route {...rest} render={(props) => {
            appProps.auth === true ? <Component {...props} /> : <Redirect to="/" />
        }} />
    );
};

export default GuardedRoute;