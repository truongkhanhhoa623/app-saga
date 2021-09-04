import { NotFound, PrivateRoute } from 'components/common';
import { AdminLayout } from 'components/layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss'
function App() {
    useEffect(() => {});
    return (
        <Switch>
            <Route exact path='/'>
            <LoginPage/>
            </Route>
            <Route exact path='/login'>
            <LoginPage/>
            </Route>
            <PrivateRoute path="/admin">
                <AdminLayout/>
            </PrivateRoute>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default App;
