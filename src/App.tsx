import Header from './components/Header'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import BookScanForm from './sections/BookScanForm'

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

  return (
    <>
      <Header />
      <Marquee
        texts={promoText}
        shouldAnimate={false}
      />
      <Hero />
      <BookScanForm />
    </>
  )
}

export default App
