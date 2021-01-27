import MyPosts from "./MyPosts";
import {addPost} from '../../redux/profile-reducer';
import {connect} from 'react-redux';


let mapStateToProps = ({profilePage}) => {

    return {
        profilePage
    }
};

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
