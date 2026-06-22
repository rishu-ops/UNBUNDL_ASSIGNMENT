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
                  {/* Top-left: opening quotes ❝ */}
                  <div className="smiler-quote smiler-quote--top">
                    <svg viewBox="0 0 448 512" className="quote-icon" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V216z" fill="#ffffff"/>
                    </svg>
                  </div>

                  <img
                    src={smiler.image}
                    alt={smiler.name}
                    className="smiler-avatar"
                  />

                  {/* Bottom-right: closing quotes ❞ */}
                  <div className="smiler-quote smiler-quote--bottom">
                    <svg viewBox="0 0 448 512" className="quote-icon" xmlns="http://www.w3.org/2000/svg">
                      <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v136z" fill="#ffffff"/>
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
