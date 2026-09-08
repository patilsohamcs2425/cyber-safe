import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap, ScrollTrigger, prefersReducedMotion, GSAP_CONFIG } from './gsapConfig';
import './animations.css';

export const GSAPGlobal: React.FC = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 1. Immediately respect reduced motion preferences
    if (prefersReducedMotion()) {
      return;
    }

    // Capture main container element safely
    mainRef.current = document.querySelector('main');

    // Create a GSAP Context for seamless, automatic cleanup on route change
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      // =========================================================================
      // 1. PAGE ENTRANCE ANIMATION
      // =========================================================================
      if (mainRef.current) {
        gsap.fromTo(
          mainRef.current,
          { opacity: 0.4, y: GSAP_CONFIG.distance.subtle },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.standard,
            ease: GSAP_CONFIG.ease.smooth,
            clearProps: 'transform,opacity'
          }
        );
      }

      // =========================================================================
      // 2. HERO SECTION ANIMATION (Homepage & Page Top)
      // =========================================================================
      const heroSection = document.querySelector('main section:first-of-type');
      if (heroSection) {
        const heroTitle = heroSection.querySelector('h1');
        const heroBadge = heroSection.querySelector('.inline-flex');
        const heroParagraph = heroSection.querySelector('p');
        const heroActions = heroSection.querySelector('.flex-col, .sm\\:flex-row');
        const heroVisual = heroSection.querySelector('.lg\\:col-span-5, img, svg');

        const heroElements = [heroBadge, heroTitle, heroParagraph, heroActions].filter(Boolean);

        if (heroElements.length > 0) {
          gsap.fromTo(
            heroElements,
            { opacity: 0, y: GSAP_CONFIG.distance.medium },
            {
              opacity: 1,
              y: 0,
              duration: GSAP_CONFIG.duration.hero,
              stagger: 0.09,
              ease: GSAP_CONFIG.ease.smooth,
              clearProps: 'transform,opacity'
            }
          );
        }

        if (heroVisual) {
          gsap.fromTo(
            heroVisual,
            { opacity: 0, scale: 0.96 },
            {
              opacity: 1,
              scale: 1,
              duration: GSAP_CONFIG.duration.hero,
              delay: 0.15,
              ease: GSAP_CONFIG.ease.smooth,
              clearProps: 'transform,opacity'
            }
          );
        }
      }

      // =========================================================================
      // 3. SCROLL REVEALS (ScrollTrigger for subsequent sections)
      // =========================================================================
      const subsequentSections = document.querySelectorAll('main section:not(:first-of-type)');
      subsequentSections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: GSAP_CONFIG.distance.medium },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.relaxed,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true
            },
            clearProps: 'transform,opacity'
          }
        );

        // Stagger cards inside grids within the section (Desktop only to prevent mobile scroll lag)
        if (isDesktop) {
          const cardGrids = section.querySelectorAll('.grid > div');
          if (cardGrids.length > 1) {
            gsap.fromTo(
              cardGrids,
              { opacity: 0, y: GSAP_CONFIG.distance.subtle },
              {
                opacity: 1,
                y: 0,
                duration: GSAP_CONFIG.duration.standard,
                stagger: 0.05,
                ease: GSAP_CONFIG.ease.smooth,
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  once: true
                },
                clearProps: 'transform,opacity'
              }
            );
          }
        }
      });

      // =========================================================================
      // 4. CARD HOVER MICRO-INTERACTIONS (Desktop Only)
      // =========================================================================
      if (isDesktop) {
        const cards = document.querySelectorAll<HTMLElement>(
          '.surface-card, .skiper-card-interactive, .rounded-3xl, .rounded-2xl'
        );

        cards.forEach((card) => {
          // Avoid nested sub-cards or main page wrappers
          if (card.offsetWidth > 900 && card.offsetHeight > 700) return;

          const onMouseEnter = () => {
            gsap.to(card, {
              y: -3,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
              overwrite: 'auto'
            });
          };

          const onMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
              overwrite: 'auto',
              clearProps: 'transform'
            });
          };

          card.addEventListener('mouseenter', onMouseEnter);
          card.addEventListener('mouseleave', onMouseLeave);
        });

        // =======================================================================
        // 5. BUTTON MICRO-INTERACTIONS (Desktop Only)
        // =======================================================================
        const buttons = document.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a.inline-flex, a[class*="rounded-xl"]'
        );

        buttons.forEach((btn) => {
          const onBtnEnter = () => {
            gsap.to(btn, {
              scale: 1.025,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
              overwrite: 'auto'
            });
          };

          const onBtnLeave = () => {
            gsap.to(btn, {
              scale: 1,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
              overwrite: 'auto',
              clearProps: 'transform'
            });
          };

          const onBtnDown = () => {
            gsap.to(btn, {
              scale: 0.97,
              duration: 0.1,
              ease: 'power1.out',
              overwrite: 'auto'
            });
          };

          const onBtnUp = () => {
            gsap.to(btn, {
              scale: 1.025,
              duration: GSAP_CONFIG.duration.fast,
              ease: GSAP_CONFIG.ease.smooth,
              overwrite: 'auto'
            });
          };

          btn.addEventListener('mouseenter', onBtnEnter);
          btn.addEventListener('mouseleave', onBtnLeave);
          btn.addEventListener('mousedown', onBtnDown);
          btn.addEventListener('mouseup', onBtnUp);
        });
      }

      // =========================================================================
      // 6. NAVBAR SUBTLE INITIAL REVEAL
      // =========================================================================
      const navbar = document.querySelector('header');
      if (navbar) {
        gsap.fromTo(
          navbar,
          { opacity: 0.8, y: -6 },
          {
            opacity: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.standard,
            ease: GSAP_CONFIG.ease.smooth,
            clearProps: 'transform,opacity'
          }
        );
      }

      // =========================================================================
      // 7. PHONE SIMULATOR & SCAM CHAT REVEALS
      // =========================================================================
      const phoneChassis = document.querySelector('div[class*="rounded-[2.5rem]"]');
      if (phoneChassis) {
        gsap.fromTo(
          phoneChassis,
          { opacity: 0, scale: 0.97, y: GSAP_CONFIG.distance.subtle },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: GSAP_CONFIG.duration.relaxed,
            ease: GSAP_CONFIG.ease.smooth,
            scrollTrigger: {
              trigger: phoneChassis,
              start: 'top 85%',
              once: true
            },
            clearProps: 'transform,opacity'
          }
        );
      }

      // Chat message bubbles
      const chatBubbles = document.querySelectorAll('div[class*="max-w-[92%]"]');
      if (chatBubbles.length > 0) {
        gsap.fromTo(
          chatBubbles,
          { opacity: 0, x: -8 },
          {
            opacity: 1,
            x: 0,
            duration: GSAP_CONFIG.duration.standard,
            stagger: 0.1,
            ease: GSAP_CONFIG.ease.smooth,
            clearProps: 'transform,opacity'
          }
        );
      }

      // =========================================================================
      // 8. QUIZ OPTIONS STAGGER
      // =========================================================================
      if (location.pathname === '/quiz') {
        const quizOptions = document.querySelectorAll('main button[class*="rounded-2xl"], main button[class*="rounded-xl"]');
        if (quizOptions.length > 0) {
          gsap.fromTo(
            quizOptions,
            { opacity: 0, y: GSAP_CONFIG.distance.micro },
            {
              opacity: 1,
              y: 0,
              duration: GSAP_CONFIG.duration.fast,
              stagger: 0.05,
              ease: GSAP_CONFIG.ease.smooth,
              clearProps: 'transform,opacity'
            }
          );
        }
      }

      // =========================================================================
      // 9. DASHBOARD STATS & BADGES STAGGER
      // =========================================================================
      if (location.pathname === '/dashboard') {
        const statCards = document.querySelectorAll('main .grid > div, main div[class*="p-4 sm:p-5 rounded-2xl"]');
        if (statCards.length > 0) {
          gsap.fromTo(
            statCards,
            { opacity: 0, y: GSAP_CONFIG.distance.subtle },
            {
              opacity: 1,
              y: 0,
              duration: GSAP_CONFIG.duration.standard,
              stagger: 0.06,
              ease: GSAP_CONFIG.ease.smooth,
              clearProps: 'transform,opacity'
            }
          );
        }
      }

      // Refresh ScrollTrigger positions cleanly
      ScrollTrigger.refresh();
    });

    // Cleanup context when route changes or component unmounts
    return () => {
      ctx.revert();
    };
  }, [location.pathname]);

  return null;
};
