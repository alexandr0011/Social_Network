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

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18959;
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
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
};

export const ProfileContainer = compose(
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator}),
    withRouter,
    withAuthRedirect)(ProfileAPIComponent)