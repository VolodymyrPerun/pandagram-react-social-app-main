import {addMessage, setIsFetching} from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = state => {

    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
        isFetching: state.messagesPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, setIsFetching}),
    withAuthRedirect
)(Dialogs);
