import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/whithAuthRedirect";
import {compose} from "redux";
import {getIsAuth} from "../../redux/auth-selectors";
import {getDialogsPage, getNewMessagesText} from "../../redux/dialogs-selectors";

const mapStateToProps = (state) => {
    return {
        dialogsPage: getDialogsPage(state),
        newMessagesText: getNewMessagesText(state),
        isAuth: getIsAuth(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageActionCreator(newMessageBody))
        },
    }
};

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Dialogs);