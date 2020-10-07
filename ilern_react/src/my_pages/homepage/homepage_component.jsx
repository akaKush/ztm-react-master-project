import React from 'react';
import './homepage_styles.scss';

import Directory from '../../components/directory/directory-component';

//La idea es posar My courses i Instant Meeting a dalt més grossos,
//i settings, upgrade, logout a sota mes petits (com a ztm pero al reves)


const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>
);

export default HomePage;