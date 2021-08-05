import s from "./Post.module.css"

export const Post = (props) => {
    return(
        <div className={s.post}>
            <div>
                <img src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-snapchat-2019-circle-256.png"/>
            </div>
            <div>{
                props.message}
            </div>
            <div className={s.likesCounter}>
                {props.likesCounter} likes
            </div>
        </div>
    )
}