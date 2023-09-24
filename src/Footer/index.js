import './footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="footer">
                <a href='https://github.com/PEmbarach' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon' size='2xl' />
                </a>
                <a href='https://www.linkedin.com/in/pablo-embarach-boeira' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='icon' size='2xl' />
                </a>
                <a href='/Contact' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className='icon' size='2xl' />
                </a>
            </div>
        </footer>
    );
}

export default Footer