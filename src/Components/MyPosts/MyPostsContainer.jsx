import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {

    return {
        profilePage: state.profilePage,
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
