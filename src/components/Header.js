import React from 'react';
import logo from '../assets/DotControl-logo.png'

const Header = () => {

    return (
        <section className='header'>
            <img src={logo} alt='DotControl logo' />
            <p>Movie info</p>
            <button>More information</button>
        </section>
    );
}

export default Header;