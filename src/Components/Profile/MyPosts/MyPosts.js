import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

export const MyPosts = (props) => {

    const postsElements = props.postsData.map((item) => {
        return <Post message={item.message} likesCounter={item.likesCount}/>
    })

    const text = React.createRef()

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    const onPostChange = () => {
        const post = text.current.value;
        props.dispatch(updateNewPostTextActionCreator(post));
    }

    return(
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={text}
                                  value={props.newPostText} />
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>

                <div>
                    {postsElements}
                </div>
            </div>
    )
}