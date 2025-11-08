import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { ChefHat, User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, Check } from "lucide-react";

export default function Signup() {
  const { signup } = useAuth();
  const nav = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }
    setIsLoading(true);
    try {
      await signup(fullName, email, phone, password);
      nav("/");
    } catch {
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordStrength = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  };

  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Signup Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-orange-100">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-black text-2xl text-slate-900 leading-6">Swaad</div>
                <div className="font-black text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-6">Factory</div>
              </div>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-black text-slate-900 mb-3">
              Join Our Food Family
            </h1>
            <p className="text-slate-600 text-lg">
              Create your account and start your culinary adventure
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={submit} className="space-y-6">
            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-4 pl-12 rounded-xl border-2 border-orange-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  required
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-4 pl-12 rounded-xl border-2 border-orange-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full px-4 py-4 pl-12 rounded-xl border-2 border-orange-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                />
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-4 pl-12 pr-12 rounded-xl border-2 border-orange-200 bg-white focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Password Strength Meter */}
              {password && (
                <div className="space-y-3 p-4 bg-slate-50 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">Password Strength</span>
                    <span className={`text-sm font-bold ${
                      strengthScore >= 4 ? 'text-green-600' : 
                      strengthScore >= 3 ? 'text-yellow-600' : 
                      'text-red-600'
                    }`}>
                      {strengthScore >= 4 ? 'Strong' : strengthScore >= 3 ? 'Good' : 'Weak'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      { key: 'length', text: 'At least 8 characters' },
                      { key: 'uppercase', text: 'Uppercase letter' },
                      { key: 'lowercase', text: 'Lowercase letter' },
                      { key: 'number', text: 'Number' },
                      { key: 'special', text: 'Special character' }
                    ].map((req) => (
                      <div key={req.key} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                          passwordStrength[req.key] ? 'bg-green-500' : 'bg-slate-300'
                        }`}>
                          {passwordStrength[req.key] && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className={passwordStrength[req.key] ? 'text-green-700' : 'text-slate-500'}>
                          {req.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 text-orange-600 rounded focus:ring-orange-500 mt-0.5"
                required
              />
              <label className="text-slate-700 text-sm leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-orange-600 hover:text-orange-700 font-medium">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-orange-600 hover:text-orange-700 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-4 text-slate-500 text-sm">or</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span className="text-slate-700 font-medium">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="w-5 h-5" />
              <span className="text-slate-700 font-medium">Facebook</span>
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Benefits */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8">
          <div className="relative mb-12">
            {/* Main Illustration */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 shadow-2xl transform -rotate-2">
              <div className="bg-white rounded-2xl p-6 transform rotate-2 shadow-lg">
                <div className="text-6xl text-center mb-4">🎉</div>
                <h3 className="text-2xl font-black text-slate-900 text-center mb-2">
                  Welcome Bonus!
                </h3>
                <p className="text-slate-600 text-center">
                  Get 20% off on your first order
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-2xl">🍛</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
              <span className="text-xl">💰</span>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-6 w-full max-w-md">
            <h3 className="text-2xl font-black text-slate-900 text-center mb-6">
              Why Join Swaad Factory?
            </h3>
            
            {[
              { icon: "🚚", title: "Free Delivery", description: "On orders above ₹299" },
              { icon: "⭐", title: "Exclusive Offers", description: "Member-only discounts" },
              { icon: "🎁", title: "Birthday Treats", description: "Special gifts on your birthday" },
              { icon: "⚡", title: "Faster Checkout", description: "Save your details for quick orders" },
              { icon: "👑", title: "Priority Support", description: "Dedicated customer care" },
              { icon: "📱", title: "Order Tracking", description: "Real-time updates on your delivery" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-orange-100">
                <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const { signup } = useAuth();
//   const nav = useNavigate();
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await signup(fullName, email, phone, password); nav("/"); }
//     catch { alert("Signup failed"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Create Account</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Sign Up</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Join Swaad Factory</h3>
//         <p className="text-slate-600 mt-2">Save your details and checkout faster next time.</p>
//       </div>
//     </div>
//   );
// }