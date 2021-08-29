import React, {useState} from "react";

export const ProfileStatusWithHoc = (props) => {

    const [editMode, setEditMode] =  useState(false);
    const [status, setStatus] =  useState(props.status);
    const activateMode = () => {setEditMode(true);}
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value)
    }


    return(
        <div>
            { !editMode &&
            <div onDoubleClick={activateMode}>{props.status || '_______'}</div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    )
}