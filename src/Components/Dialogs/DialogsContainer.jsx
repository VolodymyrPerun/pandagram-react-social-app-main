import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {

    return {
        messagesPage: state.messagesPage
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        }
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
