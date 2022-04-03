import React from 'react';
import  CustomLink  from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <h2>This is Header</h2>
            </div>
            <div className='nav-link'>
            <CustomLink className='link' to='/home'>HOME</CustomLink>
            <CustomLink className='link' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='link' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='link' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='link' to='/about'>ABOUT</CustomLink>
            </div>
        </div>
    );
};

export default Header;