import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {getNewPostText, getPostsData} from "../../../redux/profile-selectors";

const mapStateToProps = (state) => {
    return{
        postsData: getPostsData(state),
        newPostText: getNewPostText(state),
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