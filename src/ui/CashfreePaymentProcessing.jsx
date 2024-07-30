import { useSearchParams } from 'react-router-dom';
import { useVerifyCashfree } from '../features/payments/useVerifyCashfree';
import Spinner from './Spinner';
import { useEffect } from 'react';

function CashfreePaymentProcessing() {
  const [searchParams] = useSearchParams();
  const cashfreeOrderId = searchParams.get('cashfreeOrderId');
  const userOrderId = searchParams.get('userOrderId');

  const { verifyCashfree } = useVerifyCashfree();

  useEffect(
    function () {
      verifyCashfree({ cashfreeOrderId, userOrderId });
    },
    [verifyCashfree, cashfreeOrderId, userOrderId],
  );

  return (
    <div>
      <Spinner />
    </div>
  );
}

export default CashfreePaymentProcessing;
