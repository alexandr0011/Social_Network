import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessagesText: state.newMessagesText,
        isAuth: state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageText: (message) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);