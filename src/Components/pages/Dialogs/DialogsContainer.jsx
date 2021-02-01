import {addMessage, setIsFetching} from '../../../redux/reducers/dialogsReducer/actions';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = ({messagesPage, auth}) => {

    return {
        messagesPage,
        isAuth: auth.isAuth,
        isFetching: messagesPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {addMessage, setIsFetching}),
    withAuthRedirect
)(Dialogs);
