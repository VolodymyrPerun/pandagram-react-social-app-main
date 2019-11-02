import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Sidebar/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render = {() => <Dialogs state={props.state.messagesPage}/>} />
                    <Route path='/profile' render = {() => <Profile state={props.state.profilePage}/>} />
                    <Route path='/news' render = {() => <News/>} />
                    <Route path='/music' render = {() => <Music/>} />
                    <Route path='/settings' render = {() => <Settings/>} />
                </div>

            </div>
        </BrowserRouter>);
};


export default App;
