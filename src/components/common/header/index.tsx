import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSclice';
import './styles.scss';

export function Header(){
    const dispatch = useAppDispatch();
    return(
        <div className='header'>
            <h1 className='header__title'>Student Management</h1>
            <button className='header__btn--logout' onClick={() => dispatch(authActions.logout())}>Logout</button>
        </div>
    )
}