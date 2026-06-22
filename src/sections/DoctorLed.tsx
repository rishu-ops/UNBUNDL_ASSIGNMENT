import React from 'react';
import { doctorImage } from '../assets';
import './DoctorLed.css';

export const DoctorLed: React.FC = () => {
    return (
        <section className="doctor-led">
            <div className="doctor-led__left">
                <div className="doctor-led__content">
                    <h2 className="doctor-led__heading">
                        We are Doctor-led, not direct-to-customers
                    </h2>
                    <p className="doctor-led__text">
                        We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.
                    </p>
                    <button className="doctor-led__btn">
                        Get a Callback
                    </button>
                </div>
            </div>
            <div className="doctor-led__right">
                <img 
                    src={doctorImage} 
                    alt="Orthodontist doctor in clinic" 
                    className="doctor-led__img" 
                />
            </div>
        </section>
    );
};

export default DoctorLed;
