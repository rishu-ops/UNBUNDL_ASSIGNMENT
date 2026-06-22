import Header from './components/Header'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import BookScanForm from './sections/BookScanForm'
import { PromoBanner } from './components/PromoBanner';

function App() {
  const promoText = (
    <span>
      Starting at{' '}
      <span style={{ textDecoration: 'line-through', color: '#768989', margin: '0 4px' }}>
        Rs 69,999
      </span>{' '}
      <span>Rs 47,999</span>. Hurry! Offer ends soon.
    </span>
  );

  const launchTexts = [
    <span key="1" style={{ color: '#181C1C', fontWeight: 400 }}>
      <strong style={{ fontWeight: 800 }}>Free orthodontic consultation</strong> worth ₹1500
    </span>,
    <span key="2" style={{ color: '#181C1C', fontWeight: 800 }}>
      Our inaugural launch benefit
    </span>,
    <span key="3" style={{ color: '#181C1C', fontWeight: 400 }}>
      <strong style={{ fontWeight: 800 }}>Free teeth scan</strong> worth ₹500
    </span>,
    <span key="4" style={{ color: '#181C1C', fontWeight: 400 }}>
      <strong style={{ fontWeight: 800 }}>Free teeth scan</strong> worth ₹500
    </span>
  ];

  return (
    <>
      <Header />
      <Marquee
        texts={promoText}
        shouldAnimate={false}
      />
      <Hero />
      <BookScanForm />
      <PromoBanner />
      <Marquee
        texts={launchTexts}
        shouldAnimate={true}
        speed={25}
        textStyle={{
          fontSize: '0.95rem',
          letterSpacing: '0.02em',
        }}
      />
    </>
  )
}

export default App
