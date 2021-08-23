import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18959;
        }
        this.props.getUserProfileThunkCreator(userId);
    }

    render () {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>;

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
        isAuth: state.auth.isAuth
    }
};

const withUrlDataContainerComponent = withRouter(ProfileAPIComponent);

export const ProfileContainer = connect (mapStateToProps, {getUserProfileThunkCreator}) (withUrlDataContainerComponent);