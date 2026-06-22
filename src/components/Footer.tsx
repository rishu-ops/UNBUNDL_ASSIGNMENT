import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                
                {/* Column 1: Quick Links */}
                <div className="footer__col">
                    <h4 className="footer__title">Quick Links</h4>
                    <ul className="footer__list">
                        <li><a href="#home" className="footer__link">Home</a></li>
                        <li><a href="#book-scan" className="footer__link">Book a Free Scan</a></li>
                        <li><a href="#how-it-works" className="footer__link">How it Works</a></li>
                        <li><a href="#aligners" className="footer__link">Range of Aligners</a></li>
                        <li><a href="#vs-braces" className="footer__link">Aligners vs Braces</a></li>
                        <li><a href="#faqs" className="footer__link">FAQs</a></li>
                    </ul>
                </div>

                {/* Column 2: Get in Touch Now! */}
                <div className="footer__col">
                    <h4 className="footer__title">Get in Touch Now!</h4>
                    <ul className="footer__list footer__list--contacts">
                        <li className="footer__contact-item">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="footer__icon"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:011-6932-8350" className="footer__link">011-6932-8350</a>
                        </li>
                        <li className="footer__contact-item">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="footer__icon"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:support@whistle.in" className="footer__link">support@whistle.in</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Follow us on */}
                <div className="footer__col">
                    <h4 className="footer__title">Follow us on</h4>
                    <div className="footer__socials">
                        {/* Instagram */}
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Follow us on Instagram">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Follow us on Facebook">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        {/* X */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Follow us on X">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="22" 
                                height="22" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Column 4: Privacy Policy & Terms of Service */}
                <div className="footer__col footer__col--legal">
                    <ul className="footer__list footer__list--legal">
                        <li><a href="#privacy" className="footer__link">Privacy Policy</a></li>
                        <li><a href="#terms" className="footer__link">Terms of Service</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
