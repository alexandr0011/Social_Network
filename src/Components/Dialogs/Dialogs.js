import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";

export const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsDataElements = state.dialogsData.map((item)=>{
        return <DialogItem name={item.name} id={item.id} />
    })

    const messagesDataElements = state.messagesData.map((item) => {
        return <Message message={item.message}/>
    });

    const addMessage = () => {
        props.sendMessage();
    }

    const onNewMessageChange = (event) => {
        const message = event.target.value;
        props.updateNewMessageText(message);
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
                              value={state.newMessagesText}
                              placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}