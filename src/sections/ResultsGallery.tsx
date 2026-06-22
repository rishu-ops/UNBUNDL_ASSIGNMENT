import React from 'react';
import './ResultsGallery.css';

interface CaseCardProps {
    beforeImg: string;
    afterImg: string;
    concern: string;
    duration: string;
}

// Sub-component for individual card item scalability
const CaseCard: React.FC<CaseCardProps> = ({ beforeImg, afterImg, concern, duration }) => {
    return (
        <div className="results-card">
            {/* Side-by-side Images Container */}
            <div className="results-card__image-wrapper">
                <div className="results-card__img-container">
                    <img src={beforeImg} alt={`${concern} before treatment`} className="results-card__img" />
                </div>
                <div className="results-card__img-container">
                    <img src={afterImg} alt={`${concern} after treatment`} className="results-card__img" />
                </div>
            </div>

            {/* Label Indicators Sub-track */}
            <div className="results-card__labels">
                <span className="results-card__label">Before</span>
                <span className="results-card__label">After</span>
            </div>

            {/* Metadata Metrics Rows */}
            <div className="results-card__details">
                <div className="results-card__row">
                    <span className="results-card__property">Concern</span>
                    <span className="results-card__value">{concern}</span>
                </div>
                <div className="results-card__row">
                    <span className="results-card__property">Duration</span>
                    <span className="results-card__value">{duration}</span>
                </div>
            </div>
        </div>
    );
};

export const ResultsGallery: React.FC = () => {
    const casesData: CaseCardProps[] = [
        {
            concern: "Gaps",
            duration: "8 months",
            beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80",
            afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&q=80"
        },
        {
            concern: "Crooked Teeth",
            duration: "8 months",
            beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80",
            afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&q=80"
        },
        {
            concern: "Open Bite",
            duration: "8 months",
            beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80",
            afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&q=80"
        },
        {
            concern: "Protruding Teeth",
            duration: "8 months",
            beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=200&q=80",
            afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&q=80"
        }
    ];

    return (
        <section className="results-gallery">
            <h2 className="results-gallery__title">Results You'll Love</h2>
            <div className="results-gallery__grid">
                {casesData.map((item, idx) => (
                    <CaseCard key={idx} {...item} />
                ))}
            </div>
        </section>
    );
};
