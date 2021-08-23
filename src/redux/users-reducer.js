import {getUsers, follow, unfollow} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
    usersData: [],
    pageSize: 20,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {...state, usersData: state.usersData.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user;
            })
            };
        case UNFOLLOW:
            return {...state, usersData: state.usersData.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return { ...state, usersData: action.users};

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };

        default:
            return state;
    }

}

export const followAC = (userId) =>({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingAC(true));

        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setCurrentPageAC(currentPage))
                dispatch(setTotalUsersCountAC(data.totalCount));
            });
    }
};

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
        });
    }
};

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId));
        unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId));
                }
                dispatch(toggleFollowingProgressAC(false, userId));
            });
    }
};