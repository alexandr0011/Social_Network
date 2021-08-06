import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer = (props) => {
    const state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    const onPostChange = (post) => {
        props.store.dispatch(updateNewPostTextActionCreator(post));
    }

    return(
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText} />
    )
}