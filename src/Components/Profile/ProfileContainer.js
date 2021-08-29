import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    updateStatusThunkCreator} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";
import {compose} from "redux";
import {getProfile, getStatus} from "../../redux/profile-selectors";
import {getAuthorizedUserId, getIsAuth} from "../../redux/auth-selectors";

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render () {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusThunkCreator}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getIsAuth(state)
    }
};

export const ProfileContainer = compose(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect)(ProfileAPIComponent)