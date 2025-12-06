import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Brief from './components/Brief';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#f5f5f7]">
      <Navbar />
      <main>
        <Brief />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
