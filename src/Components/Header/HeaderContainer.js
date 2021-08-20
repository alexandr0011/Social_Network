import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {getAuth} from "../../api/api";

class HeaderAPIContainer extends React.Component{
    componentDidMount() {
        getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserDataAC(
                        data.data.id,
                        data.data.email,
                        data.data.login);
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