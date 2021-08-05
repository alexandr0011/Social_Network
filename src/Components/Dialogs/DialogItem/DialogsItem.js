import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    let pass = '/dialogs/'+ props.id
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={pass} >{props.name}</NavLink>
        </div>
    )
}