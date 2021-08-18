import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component{
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(
                        response.data.data.id,
                        response.data.data.email,
                        response.data.data.login);
                }
            });
    }

    render () {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export const HeaderContainer = connect (mapStateToProps, {setAuthUserDataAC})(HeaderAPIContainer);