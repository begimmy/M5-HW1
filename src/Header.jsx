import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header >
        <Link className='logo' to={'/'}>Logo</Link>
        <Link className='header' to={'/'}>Home</Link>
        <Link className='header' to={'/page1'}>Page 1</Link>
        <Link className='header' to={'/page2'}>Page 2</Link>
    
      </header>
    );
}

export default Header;
