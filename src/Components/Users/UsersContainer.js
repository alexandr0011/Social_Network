import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);