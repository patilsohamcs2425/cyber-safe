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
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Gentle, floating ambient glow orbs (8-14s subtle wander)
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          x: 35,
          y: -25,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          x: -30,
          y: 35,
          duration: 13,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      if (orb3Ref.current) {
        gsap.to(orb3Ref.current, {
          x: 20,
          y: 20,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      // Faint beacon pulsing on selected network nodes
      if (nodePill1Ref.current) {
        gsap.to(nodePill1Ref.current, {
          scale: 1.35,
          opacity: 0.55,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: 'center center'
        });
      }

      if (nodePill2Ref.current) {
        gsap.to(nodePill2Ref.current, {
          scale: 1.4,
          opacity: 0.5,
          duration: 4,
          delay: 1.5,
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
      aria-hidden="true"
    >
      {/* 1. Subtle Cyber Dot-Grid Texture with Radial Vignette Falloff */}
      <div 
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0),
            radial-gradient(circle at 25px 25px, #e2e8f0 0.8px, transparent 0)
          `,
          backgroundSize: '40px 40px, 80px 80px',
          maskImage: 'radial-gradient(ellipse at 50% 35%, black 45%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 35%, black 45%, transparent 85%)'
        }}
      />

      {/* 2. Soft Ambient Radial Gradient Blooms (Floating Orbs) */}
      {/* Orb 1: Upper-Right Sky/Blue Glow */}
      <div
        ref={orb1Ref}
        className="absolute -top-24 right-0 lg:right-1/6 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-blue-100/65 via-sky-100/50 to-indigo-50/20 blur-[130px]"
      />

      {/* Orb 2: Middle-Left Indigo/Violet Glow */}
      <div
        ref={orb2Ref}
        className="absolute top-1/3 -left-20 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-indigo-100/55 via-blue-50/50 to-purple-50/20 blur-[140px]"
      />

      {/* Orb 3: Lower-Right Soft Teal/Emerald Safety Tint */}
      <div
        ref={orb3Ref}
        className="absolute bottom-12 right-1/4 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-emerald-100/35 via-teal-50/40 to-blue-50/20 blur-[125px]"
      />

      {/* 3. High-Tech SVG Network Mesh & Connection Nodes */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-35" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle grid pattern definition */}
          <pattern id="cyber-grid-pattern" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Delicate crosshairs at intersection */}
            <path 
              d="M 80 75 L 80 85 M 75 80 L 85 80" 
              stroke="#94a3b8" 
              strokeWidth="0.8" 
              opacity="0.35"
            />
            {/* Very faint dashed grid line */}
            <path 
              d="M 160 0 L 160 160 M 0 160 L 160 160" 
              stroke="#e2e8f0" 
              strokeWidth="0.5" 
              strokeDasharray="4 6" 
              opacity="0.4"
            />
          </pattern>
        </defs>

        {/* Repeating crosshairs layer */}
        <rect width="100%" height="100%" fill="url(#cyber-grid-pattern)" />

        {/* Cyber Network Constellation: Nodes and Connection Links */}
        <g stroke="#94a3b8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.45">
          {/* Top-Right constellation */}
          <line x1="82%" y1="12%" x2="92%" y2="22%" />
          <line x1="92%" y1="22%" x2="78%" y2="34%" />
          <line x1="78%" y1="34%" x2="88%" y2="45%" />

          {/* Left-Side constellation */}
          <line x1="12%" y1="38%" x2="18%" y2="52%" />
          <line x1="18%" y1="52%" x2="8%" y2="68%" />

          {/* Center-Bottom subtle security mesh */}
          <line x1="35%" y1="78%" x2="48%" y2="88%" />
          <line x1="48%" y1="88%" x2="62%" y2="82%" />
        </g>

        {/* Delicate Security Hexagon Motif (Upper Left) */}
        <polygon 
          points="180,90 220,115 220,165 180,190 140,165 140,115"
          fill="none" 
          stroke="#94a3b8" 
          strokeWidth="0.75" 
          strokeDasharray="3 3"
          opacity="0.25"
        />
        <circle cx="180" cy="140" r="2" fill="#3b82f6" opacity="0.3" />

        {/* Faint Concentric Security Radar Rings (Bottom-Right) */}
        <circle cx="85%" cy="85%" r="80" fill="none" stroke="#cbd5e1" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.35" />
        <circle cx="85%" cy="85%" r="130" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="6 8" opacity="0.25" />

        {/* Network Nodes (Dots with subtle glowing halos) */}
        <g>
          {/* Node A (Upper Right) */}
          <circle cx="82%" cy="12%" r="2.5" fill="#3b82f6" opacity="0.45" />
          <circle ref={nodePill1Ref} cx="92%" cy="22%" r="4" fill="#60a5fa" opacity="0.35" />
          <circle cx="92%" cy="22%" r="2" fill="#2563eb" opacity="0.6" />
          <circle cx="78%" cy="34%" r="2.5" fill="#3b82f6" opacity="0.4" />
          <circle cx="88%" cy="45%" r="3" fill="#64748b" opacity="0.4" />

          {/* Node B (Mid Left) */}
          <circle cx="12%" cy="38%" r="3" fill="#64748b" opacity="0.35" />
          <circle ref={nodePill2Ref} cx="18%" cy="52%" r="4.5" fill="#818cf8" opacity="0.3" />
          <circle cx="18%" cy="52%" r="2" fill="#4f46e5" opacity="0.6" />
          <circle cx="8%" cy="68%" r="2.5" fill="#64748b" opacity="0.35" />

          {/* Node C (Lower Center) */}
          <circle cx="35%" cy="78%" r="2.5" fill="#3b82f6" opacity="0.35" />
          <circle cx="48%" cy="88%" r="3" fill="#10b981" opacity="0.4" />
          <circle cx="62%" cy="82%" r="2.5" fill="#3b82f6" opacity="0.35" />
        </g>
      </svg>
    </div>
  );
};
