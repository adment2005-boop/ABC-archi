import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Lenis smooth scroll ──────────────────────────────────────────────────────
const lenis = new Lenis({
  duration: 1.4,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.85,
  touchMultiplier: 1.5,
});

// Connect Lenis scroll position to GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);

// Tick Lenis on every GSAP frame
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Let GSAP manage its own tick (no native RAF conflict)
gsap.ticker.lagSmoothing(0);

// Expose lenis globally so components can access it if needed
(window as any).__lenis = lenis;

createRoot(document.getElementById('root')!).render(<App />);
