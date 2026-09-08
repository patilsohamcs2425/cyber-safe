import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Premium, modern animation presets tailored for CyberSafe
export const GSAP_CONFIG = {
  ease: {
    smooth: 'power2.out',
    snappy: 'power3.out',
    elastic: 'back.out(1.4)',
    gentle: 'power1.out'
  },
  duration: {
    fast: 0.25,
    standard: 0.45,
    relaxed: 0.65,
    hero: 0.75
  },
  distance: {
    micro: 6,
    subtle: 14,
    medium: 24,
    deep: 36
  }
} as const;

export { gsap, ScrollTrigger };
