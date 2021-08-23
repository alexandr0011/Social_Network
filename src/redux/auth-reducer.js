import {getAuth} from "../api/api";

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
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }

}

export const setAuthUserDataAC = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
};

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    getAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
               dispatch(setAuthUserDataAC(id, email, login));
            }
        });
}