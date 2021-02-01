import MyPosts from "./MyPosts";
import {addPost} from '../../../redux/reducers/profileReducer/actions';
import {connect} from 'react-redux';


let mapStateToProps = ({profilePage}) => {

    return {
        profilePage
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
