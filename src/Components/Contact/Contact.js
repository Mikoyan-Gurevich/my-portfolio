import React, { Component } from 'react';
import './Contact.css';
import linkedInLogo from '../../assets/if_LinkedIn_3380448.png';
import fbLogo from '../../assets/if_Facebook_3380457.png';
import instagramLogo from '../../assets/if_Instagram_3380456.png';



class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='title'>Get in Touch !</div>
                <div className='subject'>Feel like discussing around some of the fantastic engineering stuff ?</div>
                <div className='subject'>Get in touch by dropping a note or connect on social media.</div>
                <div className='social'>
                    <img src={linkedInLogo} alt="Logo" />
                    <img src={fbLogo} alt="Logo" />
                    <img src={instagramLogo} alt="Logo" />
                </div>
                <div className='form'>
                    <div className='field'>
                        <div className='label'>Your Name</div>
                        <input />
                    </div>
                    <div className='field'>
                        <div className='label'>Your Email</div>
                        <input />
                    </div>
                    <div className='field'>
                        <div className='label'>What's up ?</div>
                        <textarea />
                    </div>
                    <div className='field'>
                        <button>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;