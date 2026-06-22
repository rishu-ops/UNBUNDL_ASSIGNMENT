import React, { useState } from 'react';
import { logo } from '../assets';
import './ComparisonTable.css';

interface ComparisonItem {
    feature: string;
    whistle: string | React.ReactNode;
    others: string | React.ReactNode;
    description: string;
}

export const ComparisonTable: React.FC = () => {
    // Green checkmark SVG
    const checkIcon = (
        <span className="comp-badge comp-badge--check" aria-label="Yes">
            <svg viewBox="0 0 24 24" className="comp-badge-icon">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </span>
    );

    // Red crossmark SVG
    const crossIcon = (
        <span className="comp-badge comp-badge--cross" aria-label="No">
            <svg viewBox="0 0 24 24" className="comp-badge-icon">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </span>
    );

    const comparisonData: ComparisonItem[] = [
        {
            feature: "Easy to complex cases",
            whistle: "Yes, mild to complex",
            others: "No, only mild to moderate",
            description: "Whistle treats a full spectrum of dental alignment issues, including severe crowding, spacing, overbites, and underbites, overseen by senior orthodontists. Other brands often only accept mild cosmetic cases."
        },
        {
            feature: "Clear-cut Pricing",
            whistle: checkIcon,
            others: crossIcon,
            description: "With Whistle, you get a fixed all-inclusive quote upfront with zero hidden charges, covering all aligners, dentist visits, and refinements. Other brands frequently add surprise charges for scans, doctor consultations, or mid-course corrections."
        },
        {
            feature: "Aligner Change",
            whistle: "Every 10 days",
            others: "Every 2 weeks",
            description: "Our advanced multi-layer material allows safely changing aligners every 10 days, speeding up treatment by 30%. Other brands use older single-layer plastics requiring 14-day changes."
        },
        {
            feature: "Clinical Partnership",
            whistle: checkIcon,
            others: crossIcon,
            description: "We partner with established dental clinics nationwide, ensuring you are always treated in a physical clinic by certified orthodontists. Other brands rely heavily on DIY scans at home without in-person clinical supervision."
        },
        {
            feature: "Movement Between Cities",
            whistle: checkIcon,
            others: crossIcon,
            description: "Move cities mid-treatment? Whistle offers seamless transfer between any of our 450+ partner clinics nationwide without extra fees. Other brands have isolated networks, forcing you to pay to restart or travel back."
        },
        {
            feature: "Complimentary Teeth Scaling",
            whistle: checkIcon,
            others: crossIcon,
            description: "To prepare your teeth for scans and attachment placement, we include free professional teeth cleaning (scaling) at the start of your journey. Other brands charge extra for pre-treatment scaling."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleRow = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="comparison-section">
            <div className="comparison-container container">
                <h2 className="comparison-heading">What sets Whistle apart?</h2>

                <div className="comparison-table-wrapper">
                    {/* Header Row */}
                    <div className="comparison-header-row">
                        <div className="comp-col comp-col--feature-header">
                            Features
                        </div>
                        <div className="comp-col comp-col--whistle-header">
                            <img src={logo} alt="Whistle logo" className="comp-logo-img" />
                        </div>
                        <div className="comp-col comp-col--others-header">
                            Other Brands
                        </div>
                    </div>

                    {/* Comparison Item Rows */}
                    <div className="comparison-rows-list">
                        {comparisonData.map((item, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div 
                                    key={idx} 
                                    className={`comparison-item-block ${isOpen ? 'comparison-item-block--open' : ''}`}
                                >
                                    <div 
                                        className="comparison-row" 
                                        onClick={() => toggleRow(idx)}
                                        role="button"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="comp-col comp-col--feature">
                                            <span className="feature-text">{item.feature}</span>
                                            <svg 
                                                viewBox="0 0 24 24" 
                                                className={`comp-chevron ${isOpen ? 'comp-chevron--open' : ''}`}
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                        <div className="comp-col comp-col--whistle">
                                            <span className="comp-value-text">{item.whistle}</span>
                                        </div>
                                        <div className="comp-col comp-col--others">
                                            <span className="comp-value-text">{item.others}</span>
                                        </div>
                                    </div>

                                    {/* Collapsible Details Row */}
                                    <div className="comparison-details-wrapper">
                                        <div className="comparison-details-content">
                                            <div className="comparison-description-block">
                                                <p className="comparison-description-text">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
