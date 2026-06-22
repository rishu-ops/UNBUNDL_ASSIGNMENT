import React, { useState, useEffect } from 'react';
import Input from '../components/ui/Input';
import './BookScanForm.css';

const BookScanForm = () => {
  const [hasGaps, setHasGaps] = useState<string | null>('yes');
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Button is enabled only when name and mobile are non-empty
  const isFormValid =
    fullName.trim().length > 0 && mobileNumber.trim().length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setSubmitted(true);
    setShowToast(true);

    // Reset form
    setFullName('');
    setMobileNumber('');
    setHasGaps('yes');
    setConsent(true);
  };

  // Auto-dismiss toast after 4 seconds
  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 4000);
    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <section className="scan-form-section">
      <div className="scan-form-container container">
        <h2 className="scan-form-title">Do you have Teeth Gaps or Crooked Teeth?</h2>

        <form onSubmit={handleSubmit} className="scan-form">
          <div className="radio-group">
            <label className={`radio-label ${hasGaps === 'yes' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="teeth-gaps"
                value="yes"
                checked={hasGaps === 'yes'}
                onChange={() => setHasGaps('yes')}
              />
              <span className="radio-circle"></span>
              <span className="radio-text">Yes</span>
            </label>

            <label className={`radio-label ${hasGaps === 'no' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="teeth-gaps"
                value="no"
                checked={hasGaps === 'no'}
                onChange={() => setHasGaps('no')}
              />
              <span className="radio-circle"></span>
              <span className="radio-text">No</span>
            </label>
          </div>

          <div className="inputs-row">
            <div className="input-wrapper">
              <Input
                label="Full Name"
                required
                value={fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <Input
                label="Mobile number"
                required
                value={mobileNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobileNumber(e.target.value)}
                startAdornment={<span className="phone-prefix">+91</span>}
                placeholder="Mobile number"
              />
            </div>

            <button
              type="submit"
              className={`submit-scan-btn ${!isFormValid ? 'submit-scan-btn--disabled' : ''}`}
              disabled={!isFormValid}
            >
              Book a Free Scan
            </button>
          </div>

          <div className="consent-row">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConsent(e.target.checked)}
              />
              <span className="checkmark"></span>
              <span className="consent-text">
                I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
              </span>
            </label>
          </div>
        </form>
      </div>

      {/* Success Toast */}
      <div className={`scan-toast ${showToast ? 'scan-toast--visible' : ''}`}>
        <div className="scan-toast__icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#8F62D4" />
            <path
              d="M7 12.5l3.5 3.5 6.5-7"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="scan-toast__body">
          <p className="scan-toast__title">Form Submitted Successfully!</p>
          <p className="scan-toast__msg">We'll get in touch with you shortly to confirm your free scan.</p>
        </div>
        <button
          className="scan-toast__close"
          onClick={() => setShowToast(false)}
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </section>
  );
};

export default BookScanForm;
