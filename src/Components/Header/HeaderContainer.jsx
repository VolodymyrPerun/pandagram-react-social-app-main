import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../API/API";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
    }

    render() {

        return (
            <Header {...this.props}/>
        )
    };
}

let mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
};

export default connect(mapStateToProps,
    {
        setAuthUserData
    })(HeaderContainer);
