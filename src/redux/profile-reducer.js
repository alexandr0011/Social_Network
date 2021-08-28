import {getProfile, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

const initialState = {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'Its my first post', likesCount: 20}
        ],
        profile: null,
        status: '',
    };

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 5,
                    message: action.newPostBody,
                    likesCount: 0
                }],
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostBody) => {
    return {
        type: ADD_POST,
        newPostBody
    }
}

export const setStatusAC = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setUserProfileAC = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatusAC(data))
            });
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            });
    }
}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            });
        }
    }