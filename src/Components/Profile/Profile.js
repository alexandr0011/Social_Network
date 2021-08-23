import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import React from "react";


export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile ={props.profile} />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}