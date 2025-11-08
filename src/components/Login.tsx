import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { ChefHat, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      nav("/");
    } catch {
      alert("Invalid credentials. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Login Form */}
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
              Welcome Back
            </h1>
            <p className="text-slate-600 text-lg">
              Sign in to continue your culinary journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={submit} className="space-y-6">
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
                  placeholder="Enter your password"
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500" />
                <span className="text-slate-700 text-sm">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
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

          {/* Social Login */}
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

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-slate-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Create one here
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8">
          <div className="relative">
            {/* Main Illustration */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl transform rotate-2">
              <div className="bg-white rounded-2xl p-6 transform -rotate-2 shadow-lg">
                <div className="text-6xl text-center mb-4">🍛</div>
                <h3 className="text-2xl font-black text-slate-900 text-center mb-2">
                  Authentic Indian Flavors
                </h3>
                <p className="text-slate-600 text-center">
                  Login to explore our delicious menu and exclusive offers
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
              <span className="text-2xl">👑</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-12">
              <span className="text-xl">⭐</span>
            </div>
          </div>

          {/* Features List */}
          <div className="grid grid-cols-2 gap-4 mt-12 w-full max-w-md">
            {[
              { icon: "🚚", text: "Fast Delivery" },
              { icon: "👑", text: "Premium Quality" },
              { icon: "💰", text: "Best Prices" },
              { icon: "🍛", text: "50+ Dishes" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-orange-100">
                <span className="text-2xl">{feature.icon}</span>
                <span className="text-slate-700 font-medium text-sm">{feature.text}</span>
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

// export default function Login() {
//   const { login } = useAuth();
//   const nav = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try { await login(email, password); nav("/"); }
//     catch { alert("Invalid credentials"); }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
//       <div className="card p-6">
//         <h2 className="text-xl font-semibold mb-4">Login</h2>
//         <form onSubmit={submit} className="space-y-3">
//           <input className="w-full border px-4 py-2 rounded-xl" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//           <input type="password" className="w-full border px-4 py-2 rounded-xl" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//           <button className="w-full bg-brand-600 text-white py-2 rounded-xl">Login</button>
//         </form>
//       </div>
//       <div className="hidden md:block">
//         <h3 className="text-2xl font-bold">Welcome back to Swaad Factory</h3>
//         <p className="text-slate-600 mt-2">Secure access to your account and a better shopping experience.</p>
//       </div>
//     </div>
//   );
// }