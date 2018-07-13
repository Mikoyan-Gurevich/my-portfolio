import React, { Component } from 'react';
import './About.css';
import myPic from '../../assets/mypic.jpg';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div>
                    <a>
                        <img className='imagedropshadow' src={myPic} alt="Logo" />
                    </a>
                </div>
                <div className='description'>
                    Senior Software Engineer with 5 years of experience who provides the experience and critical thinking necessary to successfully create feature rich seamless user interfaces. Specialised in web application development using javascript libraries like ReactJS and frameworks like AngularJS. Learning enthusiast. Knowledgeable about various tools needed for rapid and robust web applications development. Experienced with leading team of engineers to deliver complex applications on time. Enhanced the performance and scalability of web applications by using techniques like server side rendering. Developed electron based application. Hands on with web technologies like indexedDB, websockets, webRTC.
                </div>
            </div>
        );
    }
}

export default About;