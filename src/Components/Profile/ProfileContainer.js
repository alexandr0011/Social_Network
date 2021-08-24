import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
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
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
    }
};

export const ProfileContainer = compose(
    connect(mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect)(ProfileAPIComponent)