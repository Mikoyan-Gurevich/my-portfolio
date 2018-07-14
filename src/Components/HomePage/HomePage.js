import React, { Component } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className='homePage'>
                <div className='flex'>
                    <div className='first'>Hello, I am <span className='name'>Gaurav Sharma</span>.</div>
                    <div>I am a Javascript engineer.</div>
                    <Link to="/about"><button className='button'>Know me more !</button></Link>
                </div>
            </div>
        );
    }
}

export default App;
