import React, { Component } from 'react';
import Router from './router';
import NavBar from './components/common/Navbar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Router/>

            </div>
        );
    }
}

export default App;