import { User } from 'models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface LoginPayload {
    username: string;
    password: string;
}

export interface authState {
    loading: boolean;
    isLoggedIn?: boolean;
    currentUser?: User;
}

const initialState = {
    loading: false,
    isLoggedIn: false,
    currentUser: undefined,
};

const authSclice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<LoginPayload>) => {
            state.loading = true;
        },
        loginSuccess: (state, action: PayloadAction<User | any>) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});
//actions
export const authActions  = authSclice.actions
// selected
export const selectAuth = (state: RootState) => state.auth
//reducers
export default authSclice.reducer;
