import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";

export const Dialogs = (props) => {

    const dialogsDataElements = props.state.dialogsData.map((item)=>{
        return <DialogItem name={item.name} id={item.id} />
    })

    const messagesDataElements = props.state.messagesData.map((item) => {
        return <Message message={item.message}/>
    });

    const text = React.createRef();

    const addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    }

    const onMessageChange = () => {
        const message = text.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: message});
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>

                {dialogsDataElements}

            </div>
            <div className={s.messages}>

                {messagesDataElements}
                <textarea onChange={onMessageChange}
                          ref={text}
                          value={props.state.newMessagesText}/>
                <div>
                    <button onClick={addMessage}>Add</button>
                </div>
            </div>
        </div>
    )
}