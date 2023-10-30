import React from 'react';
import myStore from '../assets/store.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-heading">
                <p style={{ color: 'orange', fontSize: '35px', fontWeight: '500', fontFamily: 'Exo', marginTop: '1rem', marginLeft: '2rem' }}>Create</p>
                <br />
                <span style={{ fontWeight: '300', fontSize: '26px', color: 'black', fontFamily: 'Georgia, "Times New Roman", Times, serif', marginLeft: '10px' }}>your own mobile Library</span>
                <br /><br />
                <p>Create your own library on your phone easily with mobile apps. Get it free on Google Play Store for Android and Download on the App Store for iOS for free.</p>
            </div>
            <div className="footer-img">
                <img src={myStore} alt="Store" />
            </div>
        </div>
    );
};

export default Footer;

