import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

export const Dialogs = (props) => {

    const dialogsDataElements = props.state.dialogsData.map((item)=>{
        return <DialogItem name={item.name} id={item.id} />
    })

    const messagesDataElements = props.state.messagesData.map((item) => {
        return <Message message={item.message}/>
    });

    const newMessageText = props.state.newMessagesText;

    const addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (event) => {
        const message = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(message));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsDataElements}

            </div>
            <div className={s.messages}>
                <div>
                    {messagesDataElements}
                </div>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={newMessageText}
                              placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}