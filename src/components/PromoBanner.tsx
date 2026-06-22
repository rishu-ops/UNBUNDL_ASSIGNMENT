import React from 'react';
import { promoSecImage } from '../assets';
import './PromoBanner.css';

interface PromoBannerProps {
    text?: string;
    logoAlt?: string;
    linkText?: string;
    onLinkClick?: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
    text = "Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.",
    logoAlt = "Clove Dental Logo",
    linkText = "Find Clinic",
    onLinkClick
}) => {
    return (
        <div className="promo-banner-wrapper">
            <div className="promo-banner container">
                <div className="promo-banner__content">
                    <h2 className="promo-banner__text">{text}</h2>
                </div>

                <div className="promo-banner__actions">
                    <div className="promo-banner__logo-container">
                        <img 
                            src={promoSecImage} 
                            alt={logoAlt} 
                            className="promo-banner__logo" 
                        />
                    </div>
                    <button className="promo-banner__link" onClick={onLinkClick}>
                        <span className="promo-banner__link-text">{linkText}</span>
                        <svg
                            className="promo-banner__icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;