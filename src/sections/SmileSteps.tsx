import './SmileSteps.css';

const SmileSteps = () => {
  const steps = [
    {
      num: 1,
      title: "Scan",
      desc: "We use an AI-powered scanner to take a detailed 3D image of your teeth."
    },
    {
      num: 2,
      title: "Plan",
      desc: "Our Orthodontists design your customized smile enhancement plan using highly advanced software."
    },
    {
      num: 3,
      title: "Fabricate",
      desc: "We manufacture your custom aligners leveraging 3D printing & laser technology."
    },
    {
      num: 4,
      title: "Wear",
      desc: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey."
    }
  ];

  return (
    <section className="steps-section">
      <div className="steps-container container">
        <div className="steps-card">
          <div className="steps-left">
            <h2 className="steps-heading">Get your perfect smile in four simple steps</h2>
            
            <div className="steps-grid">
              {steps.map((step) => (
                <div key={step.num} className="step-item">
                  <div className="step-number-circle">
                    <span className="step-number">{step.num}</span>
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="steps-right">
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/w71Nw_4-YQ0?autoplay=0&mute=1&loop=1"
                title="Get your perfect smile in four simple steps"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="steps-video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileSteps;
