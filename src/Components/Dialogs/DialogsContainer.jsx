import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRegister} from "../../HOC/withAuthRegister";
import {compose} from "redux";


let mapStateToProps = state => {

    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
};

let mapDispatchToProps = dispatch => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: text => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRegister
)(Dialogs);
