import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/components/Home";
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import Checkout from "@/components/Checkout";
import OrderConfirmation from "@/components/OrderConfirmation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Privacy from "@/components/Privacy";
import RefundCancellation from "@/components/RefundCancellation";
import ShippingDelivery from "@/components/ShippingDelivery";
import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider, useAuth } from "@/context/AuthContext";

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const loc = useLocation();
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
              <Route path="/confirmation" element={<OrderConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund-cancellation" element={<RefundCancellation />} />
              <Route path="/shipping-delivery" element={<ShippingDelivery />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}