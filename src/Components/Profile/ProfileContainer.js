import React from "react";
import {Profile} from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileAPIComponent extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 18959;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfileAC(response.data);
            });
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
        profile: state.profilePage.profile
    }
};

const withUrlDataContainerComponent = withRouter(ProfileAPIComponent);

export const ProfileContainer = connect (mapStateToProps, {setUserProfileAC}) (withUrlDataContainerComponent);