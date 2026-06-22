import React from 'react';
import './AlignerSection.css';

interface AlignerSectionProps {
    heading?: string;
    descriptions?: string[];
    productTitle?: string;
    originalPrice?: string;
    currentPrice?: string;
    features?: string[];
    productImageUrl?: string;
    onLearnMore?: () => void;
}

export const AlignerSection: React.FC<AlignerSectionProps> = ({
    heading = "Dream smiles achieved secretly",
    descriptions = [
        "Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove.",
        "The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists."
    ],
    productTitle = "Whistle Aligners",
    originalPrice = "₹84,000",
    currentPrice = "₹47,999",
    features = ["Offer valid for a limited time", "Easy financing options"],
    // Placeholder image mimicking the purple case in image_800cc3.png
    productImageUrl = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=250&q=80",
    onLearnMore
}) => {
    return (
        <section className="aligner-section">
            <div className="aligner-section__container">

                {/* Left Informational Column */}
                <div className="aligner-section__info">
                    <h2 className="aligner-section__heading">{heading}</h2>
                    <div className="aligner-section__description-wrapper">
                        {descriptions.map((text, index) => (
                            <p key={index} className="aligner-section__description">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right Pricing Card Column */}
                <div className="aligner-section__card">
                    <div className="aligner-section__card-top">
                        <div className="aligner-section__product-details">
                            <h3 className="aligner-section__product-title">{productTitle}</h3>
                            <span className="aligner-section__price-old">{originalPrice}</span>
                            <div className="aligner-section__price-tag">
                                <span className="aligner-section__price-label">starting at</span>
                                <span className="aligner-section__price-current">{currentPrice}</span>
                            </div>
                            <span className="aligner-section__price-tax">inc. of all taxes</span>
                        </div>

                        <div className="aligner-section__image-container">
                            <img src={productImageUrl} alt={productTitle} className="aligner-section__product-img" />
                        </div>
                    </div>

                    <div className="aligner-section__card-bottom">
                        <ul className="aligner-section__features">
                            {features.map((feature, index) => (
                                <li key={index} className="aligner-section__feature-item">
                                    <span className="aligner-section__checkmark">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="aligner-section__cta" onClick={onLearnMore}>
                            Learn more
                            <span className="aligner-section__arrow">→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};