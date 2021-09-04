import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) return <Redirect to="/login" />;
    return <Route {...props} />;
}
