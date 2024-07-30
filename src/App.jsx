import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from './styles/GlobalStyles.js';

import AppLayout from './ui/AppLayout';
import Homepage from './pages/Homepage';
import Products from './pages/Products';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import ContactUs from './pages/ContactUs';
import Signup from './pages/Signup';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Success from './ui/Success';
import Failure from './ui/Failure';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './ui/ProtectedRoute';
import AdminLayout from './ui/AdminLayout';
import Dashboard from './pages/Dashboard';
import NewOrders from './pages/NewOrders';
import AcceptedOrders from './pages/AcceptedOrders';
import InTransitOrders from './pages/InTransitOrders';
import CancelledOrders from './pages/CancelledOrders';
import AllOrders from './pages/AllOrders';
import OrderDetails from './pages/OrderDetails';
import CreateNewProduct from './pages/CreateNewProduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';
import AllUsers from './pages/AllUsers';
import UserDetail from './pages/UserDetail';
import UpdateAdminPassword from './pages/UpdateAdminPassword';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './ui/ScrollToTop';
import VerifyEmail from './pages/VerifyEmail';
import UserQueries from './pages/UserQueries';
import ResetPassword from './pages/ResetPassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import TermsOfService from './pages/TermsOfService';
import UserOrder from './ui/UserOrder';
import CashfreeCheckout from './ui/CashfreeCheckout';
import CashfreePaymentProcessing from './ui/CashfreePaymentProcessing.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      // staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="products" element={<Products />} />
            <Route path="product" element={<Product />} />
            <Route path="account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<UserOrder />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cashfreeCheckout" element={<CashfreeCheckout />} />
            <Route
              path="cashfree/verify"
              element={<CashfreePaymentProcessing />}
            />
            <Route path="success" element={<Success />} />
            <Route path="failure" element={<Failure />} />
            <Route path="login" element={<Login />} />
            <Route path="forgotPassword" element={<ForgotPassword />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="signup" element={<Signup />} />
            <Route path="privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="shippingPolicy" element={<ShippingPolicy />} />
            <Route path="refundPolicy" element={<RefundPolicy />} />
            <Route path="termsOfService" element={<TermsOfService />} />
          </Route>

          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="newOrders" element={<NewOrders />} />
            <Route path="acceptedOrders" element={<AcceptedOrders />} />
            <Route path="inTransitOrders" element={<InTransitOrders />} />
            <Route path="cancelledOrders" element={<CancelledOrders />} />
            <Route path="allOrders" element={<AllOrders />} />
            <Route path="orderDetail" element={<OrderDetails />} />
            <Route path="createNewProduct" element={<CreateNewProduct />} />
            <Route path="updateProduct" element={<UpdateProduct />} />
            <Route path="deleteProduct" element={<DeleteProduct />} />
            <Route path="allUsers" element={<AllUsers />} />
            <Route path="userDetail" element={<UserDetail />} />
            <Route path="userQueries" element={<UserQueries />} />
            <Route
              path="updateAdminPassword"
              element={<UpdateAdminPassword />}
            />
          </Route>

          <Route path="verifyEmail" element={<VerifyEmail />} />
          <Route path="resetPassword" element={<ResetPassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 2000,
            className: 'toast-style',
            style: {
              backgroundColor: '#f1f1f1',
              color: '#16a32a',
            },
          },
          error: {
            duration: 4000,
            className: 'toast-style',
            style: {
              backgroundColor: '#f1f1f1',
              color: '#753232',
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
