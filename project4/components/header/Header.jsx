import React from 'react';
import './Header.css';
//import dog from './garlic_dog.jpg';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <img src={'header3.png'} width="100%" height="100"/>
            </div>
        );
    }
}

export default Header;