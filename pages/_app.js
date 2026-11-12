import '../styles/globals.css';
import { useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import SeedingBanner from '../components/SeedingBanner';

const LiquidVelocityCursor = dynamic(
  () => import('../components/ui/LiquidVelocityCursor'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Intercept window.Lenis defined by CDN scripts to avoid duplicate active instances
    let actualLenisClass = undefined;
    Object.defineProperty(window, 'Lenis', {
      get() {
        return actualLenisClass;
      },
      set(val) {
        if (!val || val.__isProxy) {
          actualLenisClass = val;
          return;
        }
        
        // Wrap the Lenis class in a Proxy to trap constructor calls
        const ProxyClass = new Proxy(val, {
          construct(target, args) {
            if (window.lenis && typeof window.lenis.destroy === 'function') {
              try {
                window.lenis.destroy();
              } catch (e) {
                console.warn('Error destroying old Lenis instance:', e);
              }
            }
            const instance = new target(...args);
            window.lenis = instance;
            return instance;
          }
        });
        ProxyClass.__isProxy = true;
        actualLenisClass = ProxyClass;
      },
      configurable: true
    });

    // Cleanup Lenis on client-side route changes
    const handleRouteChange = () => {
      if (window.lenis && typeof window.lenis.destroy === 'function') {
        try {
          window.lenis.destroy();
          window.lenis = null;
        } catch (e) {
          console.warn('Error destroying Lenis on route change:', e);
        }
      }
    };

    Router.events.on('routeChangeStart', handleRouteChange);

    // Dynamic cursor-following light coordinates for interactive cards
    const handlePointerMove = (e) => {
      const card = e.target.closest('.glass-card, .testi-card, .role-card, .studio-3d-box, .metric-card, .price-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
        const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      }
    };
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <LiquidVelocityCursor />
      <SeedingBanner />
      <Component {...pageProps} />
    </>
  );
}
