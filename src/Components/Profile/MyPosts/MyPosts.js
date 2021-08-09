import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import React from "react";

export const MyPosts = (props) => {

    const postsElements = props.postsData.map((item) => {
        return <Post message={item.message} likesCounter={item.likesCount}/>
    })

    const onAddPost = () => {
        props.addPost();
    };
    const onNewPostChange = (event) => {
        const post = event.target.value;
        props.updateNewPostText(post);
    }

    return(
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onNewPostChange}
                                  value={props.newPostText}
                                  placeholder='Enter your message'/>
                    </div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

                <div>
                    {postsElements}
                </div>
            </div>
    )
}