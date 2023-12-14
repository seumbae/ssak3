import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return <div className='header'>
                    <button className='backBtn'>Back</button>
                    <h4 className='serviceName'>돈기브업</h4>
                </div>;
    }
}

export default Header;