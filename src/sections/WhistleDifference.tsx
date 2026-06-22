import React, { useRef } from 'react';
import { nextGen, hassleFree, transparentPricing, whislistDiffrenceRightImage } from '../assets';
import './WhistleDifference.css';

export const WhistleDifference: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    const diffFeatures = [
        {
            icon: nextGen,
            title: "Next-Gen",
            desc: "Crafted with top-notch 3D printing, laser tech, and Zendura FLX material."
        },
        {
            icon: hassleFree,
            title: "Hassle-Free",
            desc: "Predictable, comfortable & lifestyle-friendly for an easy smile transformation."
        },
        {
            icon: transparentPricing,
            title: "Transparent Pricing",
            desc: "Everything's included - from scans to aligners, doctor consults, and retainers - no hidden costs."
        }
    ];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X coordinate relative to element
        const y = e.clientY - rect.top;  // Mouse Y coordinate relative to element
        
        const width = rect.width;
        const height = rect.height;
        
        const centerX = width / 2;
        const centerY = height / 2;
        
        const deltaX = x - centerX;
        const deltaY = y - centerY;
        
        // Tilt limit of 12 degrees
        const maxTilt = 12;
        const rotateY = (deltaX / centerX) * maxTilt;
        const rotateX = -(deltaY / centerY) * maxTilt;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseEnter = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.8, 0.25, 1)';
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    return (
        <section className="difference-section">
            <div className="difference-container container">
                <div className="difference-grid">
                    
                    {/* Left Card: Features */}
                    <div className="difference-card difference-card--left">
                        <h2 className="difference-title">The Whistle Difference</h2>
                        
                        <div className="difference-features-list">
                            {diffFeatures.map((item, index) => (
                                <div key={index} className="diff-feature-item">
                                    <div className="diff-icon-container">
                                        <img src={item.icon} alt={item.title} className="diff-icon-img" />
                                    </div>
                                    <div className="diff-content">
                                        <h3 className="diff-feature-title">{item.title}</h3>
                                        <p className="diff-feature-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card: Manufacturing Image with 3D Tilt handler */}
                    <div 
                        ref={cardRef}
                        className="difference-card difference-card--right"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img 
                            src={whislistDiffrenceRightImage} 
                            alt="Whistle 3D printing aligner manufacturing" 
                            className="difference-main-img" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhistleDifference;
