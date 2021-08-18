import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import React from "react";

export const MyPosts = (props) => {

    const postsElements = props.postsData.map((item) => {
        return <Post message={item.message}
                     likesCounter={item.likesCount}
                     key={item.id}/>
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
                <div className={s.postInput}>
                    <div>
                        <textarea className={s.input} onChange={onNewPostChange}
                                  value={props.newPostText}
                                  placeholder='Enter your message'/>
                    </div>
                    <button className={s.postBtn} onClick={onAddPost}>Add post</button>
                </div>

                <div>
                    {postsElements}
                </div>
            </div>
    )
}