import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                Copyright &copy; 2018  Gaurav Sharma. All Rights Reserved.
            </div>
        );
    }
}

export default Footer;