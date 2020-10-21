import React from 'react';
import MenuItem from '../menu-item/menu-item-component';
import './directory-styles.scss'; 

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections :[
            {
                title: 'My Courses',
                imageUrl: 'https://www.flaticon.es/svg/static/icons/svg/1783/1783361.svg',
                id: 1,
                linkUrl: 'MyCourses'
            },
            {
                title: 'Instant Meeting',
                imageUrl: 'https://www.flaticon.es/svg/static/icons/svg/1783/1783454.svg',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'My Account',
                imageUrl: 'https://www.flaticon.es/svg/static/icons/svg/1783/1783396.svg',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'Upgrade Account',
                imageUrl: 'https://www.flaticon.es/svg/static/icons/svg/1783/1783279.svg',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'Contact Us',
                imageUrl: 'https://www.flaticon.es/svg/static/icons/svg/1783/1783316.svg',
                size: 'large',
                id: 5,
                linkUrl: ''

            }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                { //quan vulguem passar les props, si les DESTRUCTUREM, 
                  //llavors no cal que escriguim cada cop el props.elquesigui
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl = {imageUrl} size={size} linkUrl={linkUrl}/>
                    ))
                }
            </div>

        );
    }
}

export default Directory;