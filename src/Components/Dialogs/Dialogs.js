import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export const Dialogs = (props) => {

    const state = props.dialogsPage;

    const dialogsDataElements = state.dialogsData.map((item)=>{
        return <DialogItem name={item.name} id={item.id} key={item.id} />
    })

    const messagesDataElements = state.messagesData.map((item) => {
        return <Message message={item.message} key={item.id} />
    });

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
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
            <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const maxLength30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[requiredField, maxLength30]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);