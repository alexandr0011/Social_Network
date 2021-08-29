import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator, logoutThunkCreator} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/auth-selectors";

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
        isAuth: getIsAuth(state),
        login: getLogin(state),
    }
}
export const HeaderContainer = connect (mapStateToProps, {getAuthUserDataThunkCreator, logoutThunkCreator})(HeaderAPIContainer);