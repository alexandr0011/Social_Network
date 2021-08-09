import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (post) => {
            dispatch(updateNewPostTextActionCreator(post))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);