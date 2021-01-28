import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/reducers/profileReducer/thunks";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../commons/Preloader/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            let {authorizedUserId, history} = this.props;
            userId = authorizedUserId;
            if (!userId) {
                history.push("/login");
            }
        }

        let {getUserProfile, getUserStatus} = this.props;
        getUserProfile(userId);
        getUserStatus(userId);
    }


    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader/> : <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />}
            </div>
        );
    };
}

let mapStateToProps = state => {

    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};


export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer);
