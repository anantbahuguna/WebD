import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
import Weather from './pages/Weather'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Chat from './Chat'
import Editor from './pages/Editor'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile/:id' component={Profile} />
        <Route exact path='/weather' component={Weather} />
        <Route exact path='/chat' component={Chat} />
        <Route exact path='/editor' component={Editor} />
      </div>
    </Router>
  );
}

export default App;
