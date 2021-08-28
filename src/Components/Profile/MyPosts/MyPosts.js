import s from "./MyPosts.module.css"
import {Post} from "./Post/Post"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators'
import {Textarea} from "../../common/FormsControls/FormsControls";

export const MyPosts = (props) => {

    const postsElements = props.postsData.map((item) => {
        return <Post message={item.message}
                     likesCounter={item.likesCount}
                     key={item.id}/>
    })

    const addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return(
            <div className={s.myPosts}>
                <h3>My posts</h3>
                <AdPostMessageReduxForm onSubmit={addNewPost}/>
                <div>
                    {postsElements}
                </div>
            </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.postInput}>
            <div>
                <Field validate={[requiredField, maxLength30]}
                       component={Textarea}
                       name='newPostBody'
                       placeholder='Post message'/>
            </div>
            <button className={s.postBtn}>Add post</button>
        </form>
    )
}

const AdPostMessageReduxForm = reduxForm({form: 'profileAddPostForm'}) (AddNewPostForm)