import {Dialogs} from "./Dialogs";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

export const DialogsContainer = (props) => {
    const state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    }

    return (
        <Dialogs updateNewMessageText={onNewMessageChange}
                 sendMessage={addMessage}
                 dialogsPage={state.dialogsPage}
                 newMessagesText={state.dialogsPage.newMessagesText}/>
    )
}