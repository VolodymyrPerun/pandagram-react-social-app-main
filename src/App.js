import React, {Component} from 'react';
import './App.scss';
import Settings from "./Components/pages/Settings/Settings";
import News from "./Components/pages/News/News";
import Music from "./Components/pages/Music/Music";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Sidebar from "./Components/pages/Sidebar/Sidebar";
import HeaderContainer from "./Components/basics/Header/HeaderContainer";
import Login from "./Components/basics/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {catchGlobalError, initializeApp} from "./redux/reducers/appReducer/thunks";
import Preloader from "./Components/commons/Preloader/Preloader";
import store from "./redux/index";
import DialogsContainer from "./Components/pages/Dialogs/DialogsContainer";
import ProfileContainer from "./Components/pages/Profile/ProfileContainer";
import FriendsPage from "./Components/pages/FriendsPage/FriendsPage";
import {Page404} from "./Components/pages/Page404/Page404";
import ErrorMessages from "./Components/commons/ErrorMessages/ErrorMessages";


class App extends Component {

    componentDidCatch(error, errorInfo) {
        this.props.catchGlobalError(error);
    };

    catchAllUnhandledErrors = ({reason}) => {
        this.props.catchGlobalError(reason.toString())
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        if (this.props.globalError) {
            return <ErrorMessages globalError={this.props.globalError} history={this.props.history}/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect from={"/"} to={"/profile"}/>}/>
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
                        <Route path='/error' render={() =>
                            <ErrorMessages globalError={this.props.globalError} history={this.props.history}/>}/>
                        <Route path='*' render={() => <Page404 history={this.props.history}/>}/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        globalError: state.app.globalError,
        initialized: state.app.initialized
    }
};

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {catchGlobalError, initializeApp}))(App);

let SocialApp = props => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
};

export default SocialApp;
