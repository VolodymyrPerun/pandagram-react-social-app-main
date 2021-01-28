import React from 'react';
import './App.scss';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/reducers/appReducer/thunks";
import Preloader from "./Components/commons/Preloader/Preloader";
import store from "./redux/index";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import FriendsPage from "./Components/FriendsPage/FriendsPage";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friendsPage'
                           render={() => <FriendsPage/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

let mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SocialApp = props => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialApp;
