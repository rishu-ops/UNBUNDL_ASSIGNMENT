import { useEffect, useState } from 'react';
import './HappySmilers.css';

interface Smiler {
  name: string;
  image: string;
}

const highResImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&h=533&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&h=533&q=80"
];

const HappySmilers = () => {
  const [smilers, setSmilers] = useState<Smiler[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Shuffle and pick 5 high-resolution face images on mount
    const selectedFaces = [...highResImages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);

    fetch('https://randomuser.me/api/?results=5')
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((user: any, index: number) => ({
          name: `${user.name.first} ${user.name.last}`,
          image: selectedFaces[index] || user.picture.large,
        }));
        setSmilers(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch from randomuser.me, loading fallbacks.', err);
        setSmilers(
          selectedFaces.map((face, index) => {
            const fallbackNames = ["Ananya Sharma", "Priya Patel", "Kriti Sen", "Rohan Malhotra", "Meera Nair"];
            return {
              name: fallbackNames[index] || "Happy Smiler",
              image: face,
            };
          })
        );
        setLoading(false);
      });
  }, []);

  return (
    <section className="smilers-section">
      <div className="smilers-container container">
        <h2 className="smilers-title">Happy Smilers!</h2>
        
        {loading ? (
          <div className="smilers-loading">
            <div className="spinner"></div>
            <p>Loading smilers...</p>
          </div>
        ) : (
          <div className="smilers-list">
            {smilers.map((smiler, idx) => (
              <div key={idx} className="smiler-card">
                <div className="smiler-card-header">
                  <div className="smiler-logo">
                    <span className="smiler-logo-main">whistle</span>
                    <span className="smiler-logo-sub">AND SMILE</span>
                  </div>
                </div>

                <div className="smiler-image-container">
                  {/* Top-left quote */}
                  <div className="smiler-quote smiler-quote--top">
                    <svg viewBox="0 0 24 24" className="quote-icon">
                      <path d="M9.9 19c-2.3 0-4.3-1.8-4.7-4.1-.3-1.8.4-3.5 1.7-4.6 1-1 2.3-1.5 3.7-1.5.3 0 .6 0 .9.1-.5-1.5-1.9-2.5-3.6-2.5-.3 0-.6 0-.9.1.5-2.1 2.4-3.5 4.5-3.5 2.5 0 4.5 2 4.5 4.5 0 3.2-1.7 6.1-4.4 7.7.3.5.7 1.1 1 1.7C14 14.8 14.9 12.3 14.9 9.5c0-3.6-2.9-6.5-6.5-6.5-1.4 0-2.8.5-3.8 1.4-1.3 1.1-2 2.8-1.7 4.6.4 2.8 2.8 4.9 5.6 4.9.4 0 .9-.1 1.3-.2-.5 2.1-2.4 3.5-4.5 3.5-2.5 0-4.5-2-4.5-4.5 0-2.8 1.5-5.3 3.9-6.7z" />
                    </svg>
                  </div>

                  <img 
                    src={smiler.image} 
                    alt={smiler.name} 
                    className="smiler-avatar" 
                  />

                  {/* Bottom-right quote */}
                  <div className="smiler-quote smiler-quote--bottom">
                    <svg viewBox="0 0 24 24" className="quote-icon">
                      <path d="M9.9 19c-2.3 0-4.3-1.8-4.7-4.1-.3-1.8.4-3.5 1.7-4.6 1-1 2.3-1.5 3.7-1.5.3 0 .6 0 .9.1-.5-1.5-1.9-2.5-3.6-2.5-.3 0-.6 0-.9.1.5-2.1 2.4-3.5 4.5-3.5 2.5 0 4.5 2 4.5 4.5 0 3.2-1.7 6.1-4.4 7.7.3.5.7 1.1 1 1.7C14 14.8 14.9 12.3 14.9 9.5c0-3.6-2.9-6.5-6.5-6.5-1.4 0-2.8.5-3.8 1.4-1.3 1.1-2 2.8-1.7 4.6.4 2.8 2.8 4.9 5.6 4.9.4 0 .9-.1 1.3-.2-.5 2.1-2.4 3.5-4.5 3.5-2.5 0-4.5-2-4.5-4.5 0-2.8 1.5-5.3 3.9-6.7z" />
                    </svg>
                  </div>
                </div>

                <div className="smiler-card-footer">
                  <span className="smiler-tag">HAPPY- MONIALS</span>
                  <span className="smiler-name">BY {smiler.name.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HappySmilers;
