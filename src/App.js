import React from 'react';
import './App.scss';
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {Route} from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import FriendsPage from "./Components/FriendsPage/FriendsPage";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() =>
                        <DialogsContainer state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    <Route path='/profile' render={() =>
                        <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friendsPage' render={() =>
                        <FriendsPage state={props.state.sidebar} dispatch={props.dispatch}/>}/>
                </div>
            </div>);
};

export default App;
