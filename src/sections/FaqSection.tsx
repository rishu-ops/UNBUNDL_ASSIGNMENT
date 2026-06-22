import React, { useState } from 'react';
import './FaqSection.css';

interface FaqItem {
    question: string;
    answer: string;
}

export const FaqSection: React.FC = () => {
    const faqData: FaqItem[] = [
        {
            question: "What are Aligners?",
            answer: "Aligners are clear, custom-made medical-grade plastic trays that fit snugly over your teeth. They apply gentle, continuous pressure to gradually shift your teeth into their desired positions, offering a discreet, comfortable alternative to traditional metal braces."
        },
        {
            question: "How do Aligners work?",
            answer: "Aligners work by applying calculated orthodontic forces on specific teeth at different stages of your treatment. You wear each set of trays for about 1-2 weeks (for 20-22 hours a day) before progressing to the next set in the series, slowly moving your teeth."
        },
        {
            question: "Can any dentist do irregular teeth treatment?",
            answer: "While general dentists can offer basic care, complex teeth alignment (orthodontics) is best designed and monitored by certified Orthodontists. Orthodontists undergo 2-3 years of specialized postgraduate training in tooth movement and facial alignment."
        },
        {
            question: "Are there any restriction on eating or drinking?",
            answer: "There are no dietary restrictions with clear aligners! You simply remove the trays before eating or drinking anything other than plain cool water, clean your teeth, and then put them back in."
        },
        {
            question: "How long does the treatment take?",
            answer: "The duration depends on the complexity of your case. On average, mild to moderate alignment cases take between 6 to 12 months, while more complex cases can take longer. Your orthodontist will provide a precise custom timeline after your initial 3D scan."
        }
    ];

    // Track open state for each item (null if all closed, or index of the open item)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-container container">
                <h2 className="faq-heading">
                    <span className="faq-heading__purple">Got Questions?</span>{" "}
                    <span className="faq-heading__black">We've got answers</span>
                </h2>

                <div className="faq-list">
                    {faqData.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div 
                                key={idx} 
                                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                            >
                                <button 
                                    className="faq-question-btn" 
                                    onClick={() => toggleFaq(idx)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq-question-text">{item.question}</span>
                                    <span className="faq-icon-wrapper">
                                        <span className="faq-icon-line faq-icon-line--horizontal"></span>
                                        <span className="faq-icon-line faq-icon-line--vertical"></span>
                                    </span>
                                </button>
                                <div className="faq-answer-wrapper">
                                    <div className="faq-answer-content">
                                        <p className="faq-answer-text">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
