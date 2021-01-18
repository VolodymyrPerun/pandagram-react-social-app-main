import {addMessage} from '../../redux/dialogs-reducer';
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

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRegister
)(Dialogs);
