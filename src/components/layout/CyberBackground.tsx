import React, { useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '../../animations/gsapConfig';

export const CyberBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const nodePill1Ref = useRef<SVGCircleElement>(null);
  const nodePill2Ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Check for reduced motion OR mobile device
    const isMobile = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (prefersReducedMotion() || isMobile) {
      // On mobile or reduced motion, skip continuous GSAP RAF loops to guarantee 100% 60fps/120fps buttery smooth scrolling
      return;
    }

    const ctx = gsap.context(() => {
      // Smooth, slow ambient drift only on desktop where GPU has plenty of headroom
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: 40,
          y: -30,
          duration: 12,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: -35,
          y: 40,
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: 25,
          y: 25,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (nodePill1Ref.current) {
        gsap.to(nodePill1Ref.current, {
          scale: 1.4,
          opacity: 0.85,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'center center'
        });
      }

      if (nodePill2Ref.current) {
        gsap.to(nodePill2Ref.current, {
          scale: 1.4,
          opacity: 0.8,
          duration: 3.8,
          delay: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'center center'
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none bg-[#f8fafc]"
      style={{ transform: 'translateZ(0)' }}
      aria-hidden="true"
    >
      {/* 1. VISIBLE HIGH-TECH CYBER DOT & COORDINATE GRID */}
      {/* Crisp, clearly visible dot grid across viewport */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(148, 163, 184, 0.45) 1.2px, transparent 1.2px),
            radial-gradient(circle, rgba(203, 213, 225, 0.6) 0.8px, transparent 0.8px)
          `,
          backgroundSize: '28px 28px, 56px 56px',
          backgroundPosition: '0 0, 14px 14px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 75%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 75%, transparent 100%)'
        }}
      />

      {/* 2. ZERO-LAG NATIVE RADIAL GRADIENT BLOOMS (No expensive CSS blur filters!) */}
      {/* Orb 1: Upper-Right Cyan / Sky Blue Bloom */}
      <div
        ref={orb1Ref}
        className="absolute -top-16 -right-16 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(186, 230, 253, 0.65) 0%, rgba(199, 210, 254, 0.35) 45%, transparent 70%)'
        }}
      />

      {/* Orb 2: Middle-Left Indigo / Lavender Bloom */}
      <div
        ref={orb2Ref}
        className="absolute top-1/4 -left-20 w-[580px] h-[580px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(199, 210, 254, 0.55) 0%, rgba(224, 231, 255, 0.35) 45%, transparent 70%)'
        }}
      />

      {/* Orb 3: Lower-Right Soft Teal / Emerald Safety Bloom */}
      <div
        ref={orb3Ref}
        className="absolute bottom-10 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(209, 250, 229, 0.55) 0%, rgba(224, 242, 254, 0.3) 50%, transparent 70%)'
        }}
      />

      {/* 3. VISIBLE SVG CYBER NETWORK CONSTELLATION & DEFENSE MOTIFS */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle high-tech crosshairs pattern at 140px intervals */}
          <pattern id="tech-cross-grid" width="140" height="140" patternUnits="userSpaceOnUse">
            {/* Coordinate Crosshair */}
            <path 
              d="M 70 64 L 70 76 M 64 70 L 76 70" 
              stroke="#64748b" 
              strokeWidth="1.2" 
              opacity="0.35"
            />
            {/* Faint connecting dashed grid line */}
            <path 
              d="M 140 0 L 140 140 M 0 140 L 140 140" 
              stroke="#cbd5e1" 
              strokeWidth="0.6" 
              strokeDasharray="4 8" 
              opacity="0.5"
            />
          </pattern>
        </defs>

        {/* Repeating crosshairs background layer */}
        <rect width="100%" height="100%" fill="url(#tech-cross-grid)" />

        {/* Network Constellation Connection Links (Clearly visible) */}
        <g stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.45">
          {/* Upper Right Network Cluster */}
          <line x1="75%" y1="10%" x2="88%" y2="18%" />
          <line x1="88%" y1="18%" x2="94%" y2="30%" />
          <line x1="88%" y1="18%" x2="78%" y2="28%" />
          <line x1="78%" y1="28%" x2="84%" y2="42%" />

          {/* Left Mid-Tier Network Cluster */}
          <line x1="8%" y1="32%" x2="16%" y2="44%" />
          <line x1="16%" y1="44%" x2="10%" y2="60%" />
          <line x1="16%" y1="44%" x2="24%" y2="54%" />

          {/* Lower Center Security Route */}
          <line x1="32%" y1="80%" x2="46%" y2="88%" />
          <line x1="46%" y1="88%" x2="60%" y2="84%" />
        </g>

        {/* Security Hexagon Motif (Upper Left Perimeter) */}
        <polygon 
          points="160,80 205,105 205,155 160,180 115,155 115,105"
          fill="none" 
          stroke="#2563eb" 
          strokeWidth="1" 
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <circle cx="160" cy="130" r="3" fill="#2563eb" opacity="0.6" />
        <circle cx="160" cy="130" r="8" fill="none" stroke="#60a5fa" strokeWidth="0.8" opacity="0.4" />

        {/* Concentric Defense Radar Arcs (Bottom Right) */}
        <circle cx="90%" cy="90%" r="90" fill="none" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
        <circle cx="90%" cy="90%" r="150" fill="none" stroke="#94a3b8" strokeWidth="0.6" strokeDasharray="6 8" opacity="0.3" />

        {/* Network Nodes (Crisp, visible dots with halos) */}
        <g>
          {/* Top-Right Nodes */}
          <circle cx="75%" cy="10%" r="3.5" fill="#2563eb" opacity="0.75" />
          <circle ref={nodePill1Ref} cx="88%" cy="18%" r="6" fill="#3b82f6" opacity="0.25" />
          <circle cx="88%" cy="18%" r="3.5" fill="#1d4ed8" opacity="0.9" />
          <circle cx="94%" cy="30%" r="3" fill="#0284c7" opacity="0.7" />
          <circle cx="78%" cy="28%" r="3" fill="#64748b" opacity="0.65" />
          <circle cx="84%" cy="42%" r="3.5" fill="#3b82f6" opacity="0.75" />

          {/* Left Nodes */}
          <circle cx="8%" cy="32%" r="3" fill="#64748b" opacity="0.6" />
          <circle ref={nodePill2Ref} cx="16%" cy="44%" r="6.5" fill="#6366f1" opacity="0.25" />
          <circle cx="16%" cy="44%" r="3.5" fill="#4f46e5" opacity="0.9" />
          <circle cx="10%" cy="60%" r="3" fill="#64748b" opacity="0.65" />
          <circle cx="24%" cy="54%" r="3.5" fill="#0284c7" opacity="0.7" />

          {/* Lower Nodes */}
          <circle cx="32%" cy="80%" r="3" fill="#2563eb" opacity="0.7" />
          <circle cx="46%" cy="88%" r="3.5" fill="#059669" opacity="0.8" />
          <circle cx="60%" cy="84%" r="3" fill="#2563eb" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
