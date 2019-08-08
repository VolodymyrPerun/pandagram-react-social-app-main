import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
<div>
  <a href="#s">Home</a>
  <a href="#s">News Feed</a>
  <a href="#s">Messages</a>
</div>
  );
}

const Technologies = () => {
  return (
<div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
      </ul>
    </div>
  );
}

export default App;
