import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, authMe} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.authMe()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    };
}

let mapStateToProps = state => {
    // console.log(state.auth.login);
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps,
    {
        setAuthUserData,
        authMe
    })(HeaderContainer);
