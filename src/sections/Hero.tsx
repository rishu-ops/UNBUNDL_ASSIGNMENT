import { heroSecGirl } from '../assets';
import './hero.css';

const Hero = () => {
    return (
        <section className="hero-section ">
            <div className="hero-container container">
                <div className="hero-content">
                    <h2 className="hero-title">Invisible Aligners for a dream smile</h2>
                    <h1 className="hero-subtitle">
                        Book a Scan and avail a free Orthodontist Consult{' '}
                        <span className="highlight-purple">worth ₹1500</span>
                    </h1>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        src={heroSecGirl}
                        alt="Invisible Aligners Smile"
                        className="hero-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;