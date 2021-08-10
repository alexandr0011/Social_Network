const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    usersData: [
        // {   id: 1,
        //     photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
        //     followed: false,
        //     fullName: 'Alex',
        //     status: 'Hey iam here',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus'
        //     }
        // },
        // {   id: 2,
        //     photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
        //     followed: true,
        //     fullName: 'Dmitry',
        //     status: 'Yo',
        //     location: {
        //         city: 'Moscow',
        //         country: 'Russia'
        //     }
        // },
        // {   id: 3,
        //     photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
        //     followed: false,
        //     fullName: 'Sofia',
        //     status: 'Hello',
        //     location: {
        //         city: 'London',
        //         country: 'England'
        //     }
        // },
        // {   id: 4,
        //     photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
        //     followed: true,
        //     fullName: 'Mark',
        //     status: 'Iam here',
        //     location: {
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     }
        // },
        // {   id: 5,
        //     photoUrl: 'https://stuki-druki.com/biofoto3/dolph-lundgren-01.jpg',
        //     followed: true,
        //     fullName: 'David',
        //     status: 'Hi',
        //     location: {
        //         city: 'Rome',
        //         country: 'Italian'
        //     }
        // },
    ],
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
        case SET_USERS: {
            return { ...state, usersData: [...state.usersData, ...action.users]}
        }
        default:
            return state;
    }

}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}