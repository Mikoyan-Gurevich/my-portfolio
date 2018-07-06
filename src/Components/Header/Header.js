import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLink: 2
        };
        this.list = [
            { id: 1, name: 'Home', url: '/' },
            { id: 2, name: 'About', url: '/about' },
            { id: 3, name: 'Portfolio', url: '/portfolio' },
            { id: 4, name: 'Blog', url: '/blog' },
            { id: 5, name: 'Contact', url: '/contact' },
        ];
        this.selectLink = this.selectLink.bind(this);
    }

    selectLink(id) {
        this.setState({ selectedLink: id });
    }

    render() {
        let { selectedLink } = this.state;
        const { selectLink } = this;
        return (
            <div className='header'>
                {this.list.map((item) => {
                    return (<div key={item.id} className='links' onClick={() => { selectLink(item.id) }}><Link className={this.props.match.url === item.url ? 'selectedLink' : ''} to={item.url} >{item.name}</Link></div>);
                })}
            </div>
        );
    }
}

export default Header;