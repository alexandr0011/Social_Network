import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";

class HeaderAPIContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator();
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
export const HeaderContainer = connect (mapStateToProps, {getAuthUserDataThunkCreator, logoutThunkCreator})(HeaderAPIContainer);