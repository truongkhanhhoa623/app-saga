import { NavLink } from 'react-router-dom';
import './styles.scss';

export function Sitebar() {
    return (
        <div className="sitebar">
            <NavLink className="sitebar__link" to="/admin/dashboard">
                Dashboard
            </NavLink>

            <NavLink className="sitebar__link" to="/admin/student">
              Student
            </NavLink>
        </div>
    );
}
