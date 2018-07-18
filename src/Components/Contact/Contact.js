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
                    <a target="_blank" href='https://www.linkedin.com/in/gaurav-sharma-2557514b/'><img src={linkedInLogo} alt="Logo" /></a>
                    <a target="_blank" href='https://www.facebook.com/bloodlordsharma/'><img src={fbLogo} alt="Logo" /></a>
                    <a target="_blank" href='https://www.instagram.com/bloodlordsharma/'><img src={instagramLogo} alt="Logo" /></a>
                </div>
                <div className='form'>
                    <div className='field'>
                        <input placeholder='Your Name' />
                    </div>
                    <div className='field'>
                        <input placeholder='Your Email' />
                    </div>
                    <div className='field'>
                        <textarea placeholder="What' s up ?" />
                    </div>
                    <div className='field'>
                        <button>Send</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;