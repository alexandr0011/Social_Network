import {getAuth, login, logout} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }

}

export const setAuthUserDataAC = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
};

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
               dispatch(setAuthUserDataAC(id, email, login, true));
            }
        });
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
    login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }else {
                dispatch(stopSubmit('login', {_error: 'Email or Password is wrong'}));
            }
        });
}

export const logoutThunkCreator = () => (dispatch) => {
    logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false));
            }
        });
}