import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>{`Weather App ${new Date().getFullYear()}`}</p>
        </footer>
    )
}

export default Footer;