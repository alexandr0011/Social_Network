import {addPostActionCreator} from "../../../redux/profile-reducer";
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
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody))
        },
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);