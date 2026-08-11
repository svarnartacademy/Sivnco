import '../styles/globals.css';
import { useEffect } from 'react';
import Router from 'next/router';

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
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
