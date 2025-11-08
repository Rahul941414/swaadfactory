import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Swaad Factory
              </h2>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Serving authentic Indian flavors with love and tradition. Freshly cooked meals delivered to your doorstep, bringing the taste of home to you.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { name: "Facebook", icon: "📘", url: "#" },
                { name: "Instagram", icon: "📷", url: "#" },
                { name: "Twitter", icon: "🐦", url: "#" },
                { name: "YouTube", icon: "📺", url: "#" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-slate-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Track Order", path: "/track-order" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              {[
                { name: "Help Center", path: "/help" },
                { name: "FAQs", path: "/faqs" },
                { name: "Contact Support", path: "/support" },
                { name: "Feedback", path: "/feedback" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-300 text-sm">
                Get the latest updates on new dishes and exclusive offers
              </p>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
                />
                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              <p>© {currentYear} Swaad Factory. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Refund & Cancellation", path: "/refund-cancellation" },
                { name: "Shipping & Delivery", path: "/shipping-delivery" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-slate-400 hover:text-orange-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm mr-2">We accept:</span>
              <div className="flex gap-1">
                {["💳", "📱", "🏦", "🔒"].map((method, index) => (
                  <span key={index} className="text-lg" title="Payment Method">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Badge */}
      <div className="bg-slate-800 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm mb-2">
            Download our mobile app for better experience
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-colors flex items-center gap-2">
              <span>📱</span>
              App Store
            </button>
            <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-colors flex items-center gap-2">
              <span>🤖</span>
              Play Store
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="mt-16 border-t bg-white">
//       <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 items-center">
//         <p className="text-sm text-slate-600">© {new Date().getFullYear()} Swaad Factory. All rights reserved.</p>
//         <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm">
//           <Link to="/privacy" className="hover:text-brand-700">Privacy</Link>
//           <Link to="/terms" className="hover:text-brand-700">Terms</Link>
//           <Link to="/refund-cancellation" className="hover:text-brand-700">Refund & Cancellation</Link>
//           <Link to="/shipping-delivery" className="hover:text-brand-700">Shipping</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }