import { authActions, LoginPayload } from './authSclice';
import { fork, take, call, put, delay } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';

function* handleLogin(action: PayloadAction<LoginPayload>) {
    try {
            // call Api User Login 
        yield delay(1000)
        localStorage.setItem('access_token', 'isLogin')
        yield put(authActions.loginSuccess(action.payload))
        //Redirect to Admin Dashboard
        yield put(push('/admin'))
    } catch (error) {
        yield put(authActions.loginFailure(error.message))
    }
}
function* handleLogout() {
    yield delay(500)
    localStorage.removeItem('access_token')
    // Redirect to login page
    yield put(push('/login'))
}

function* LoginFlow() {
    while(true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
            yield fork(handleLogin, action);    
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(LoginFlow);
}
