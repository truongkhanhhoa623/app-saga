import { useAppDispatch } from 'app/hooks'
import React from 'react'
import { authActions } from '../authSclice'
import './styles.scss'
interface LoginPageProps {
    
}

export default function LoginPage(props: LoginPageProps){
    const dispatch = useAppDispatch()

    const handleLoginPage = () => {
        //Get username and password from Form login page
        dispatch(authActions.login({
            username: 'truongkhanhhoa',
            password: '123456789',
        }))
    }

    return (
        <div className="login-page">
           <h1> Login Page</h1>
           <button onClick={handleLoginPage}>Login</button>
        </div>
    )
}
