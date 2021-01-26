import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../commons/Preloader/Preloader";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
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
