import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from './Spinner';

function CashfreeCheckout() {
  const location = useLocation();
  const { paymentSessionId } = location.state || {};

  useEffect(() => {
    const loadCashfreeSdk = () => {
      return new Promise((resolve, reject) => {
        if (window.Cashfree) {
          resolve(window.Cashfree);
        } else {
          const script = document.createElement('script');
          script.src = 'https://sdk.cashfree.com/js/v3/cashfree.js';
          script.async = true;
          script.onload = () => resolve(window.Cashfree);
          script.onerror = () =>
            reject(new Error('Failed to load Cashfree SDK'));
          document.body.appendChild(script);
        }
      });
    };

    const initiateCashfreeCheckout = async () => {
      try {
        const Cashfree = await loadCashfreeSdk();
        if (Cashfree) {
          const cashfreeInstance = Cashfree({
            mode: 'sandbox', // Use sandbox mode for testing
          });

          const checkoutOptions = {
            paymentSessionId: paymentSessionId,
            redirectTarget: '_self', // optional (_self, _blank, or _top)
          };

          cashfreeInstance.checkout(checkoutOptions);
        } else {
          console.error('Cashfree SDK is not available');
        }
      } catch (error) {
        console.error('Error loading or initializing Cashfree SDK:', error);
      }
    };

    initiateCashfreeCheckout();
  }, [paymentSessionId]);

  return (
    <div>
      <Spinner />
    </div>
  );
}

export default CashfreeCheckout;
