import Dashboard from 'features/dashboard';
import Student from 'features/student';
import { Switch, Route } from 'react-router-dom';

export function Main() {
    return (
        <Switch>
            <Route path="/admin/dashboard">
                <Dashboard />
            </Route>
            <Route path="/admin/student">
                <Student />
            </Route>
        </Switch>
    );
}
