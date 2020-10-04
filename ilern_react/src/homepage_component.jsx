import React from 'react';

import './homepage_styles.scss';

//La idea es posar My courses i Instant Meeting a dalt més grossos,
//i settings, upgrade, logout a sota mes petits (com a ztm pero al reves)


const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MY COURSES</h1>
                    <span className='subtitle'>Explore</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>CREATE INSTANT MEETING</h1>
                    <span className='subtitle'>Create</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SETTINGS</h1>
                    <span className='subtitle'>My Account</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>UPGRADE ACCOUNT</h1>
                    <span className='subtitle'>Try iLern with unlimited features!</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>LOGOUT</h1>
                    <span className='subtitle'>Exit Account Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;