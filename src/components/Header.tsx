import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, User, ChefHat, Utensils } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { totalQty } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const nav = useNavigate();

  const navLink = "px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:text-orange-600";
  const active = ({ isActive }: any) =>
    isActive
      ? "text-orange-600 font-semibold bg-orange-50 border-b-2 border-orange-600 " + navLink
      : "text-slate-700 hover:bg-orange-50 " + navLink;

  const handleLogout = () => {
    logout();
    nav("/");
    setUserDropdown(false);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-orange-200 shadow-lg">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tight text-slate-900 leading-6">
              Swaad
            </span>
            <span className="font-black text-2xl tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-6">
              Factory
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { path: "/", label: "Home", icon: "🏠" },
            { path: "/products", label: "Menu", icon: "📋" },
            { path: "/about", label: "About", icon: "👨‍🍳" },
            { path: "/contact", label: "Contact", icon: "📞" }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={active}
              end
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </span>
            </NavLink>
          ))}

          {/* Cart with Badge */}
          <NavLink to="/cart" className={active}>
            <div className="relative flex items-center gap-2 group">
              <div className="relative">
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                {totalQty > 0 && (
                  <span className="absolute -top-3 -right-3 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-bounce">
                    {totalQty}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </div>
          </NavLink>

          {/* User Section */}
          {user ? (
            <div className="ml-4 relative">
              <button
                onClick={() => setUserDropdown(!userDropdown)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-slate-800">
                  {user.fullName.split(" ")[0]}
                </span>
              </button>

              {/* User Dropdown */}
              {userDropdown && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-orange-200 py-2 animate-fade-in">
                  <div className="px-4 py-2 border-b border-orange-100">
                    <p className="font-semibold text-slate-800">{user.fullName}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-orange-50 transition-colors"
                    onClick={() => setUserDropdown(false)}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="flex items-center gap-2 px-4 py-2 text-slate-700 hover:bg-orange-50 transition-colors"
                    onClick={() => setUserDropdown(false)}
                  >
                    <Utensils className="w-4 h-4" />
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 transition-colors border-t border-orange-100 mt-2"
                  >
                    <span>🚪</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="ml-4 flex items-center gap-2">
              <NavLink
                to="/login"
                className="px-6 py-2.5 rounded-xl font-medium text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Cart Icon for Mobile */}
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="w-6 h-6 text-slate-700" />
            {totalQty > 0 && (
              <span className="absolute -top-1 -right-1 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                {totalQty}
              </span>
            )}
          </Link>

          <button
            className="p-2 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-all duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6 text-orange-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-orange-100 bg-white/95 backdrop-blur-xl shadow-xl animate-slide-down">
          <div className="flex flex-col p-4 space-y-2">
            {[
              { path: "/", label: "Home", icon: "🏠" },
              { path: "/products", label: "Menu", icon: "📋" },
              { path: "/about", label: "About", icon: "👨‍🍳" },
              { path: "/contact", label: "Contact", icon: "📞" },
              { path: "/cart", label: "Cart", icon: "🛒" }
            ].map((item) => (
              <NavLink
                key={item.path}
                onClick={() => setOpen(false)}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${isActive
                    ? "bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-600"
                    : "text-slate-700 hover:bg-orange-50"
                  }`
                }
                end
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}

            {/* Mobile User Section */}
            <div className="border-t border-orange-100 pt-4 mt-2">
              {user ? (
                <>
                  <div className="px-4 py-3 bg-orange-50 rounded-xl mb-2">
                    <p className="font-semibold text-slate-800">{user.fullName}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                  </div>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Profile
                  </Link>
                  <Link
                    onClick={() => setOpen(false)}
                    to="/orders"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:bg-orange-50 transition-colors"
                  >
                    <Utensils className="w-5 h-5" />
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors border-t border-orange-100 mt-2"
                  >
                    <span className="text-lg">🚪</span>
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2">
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="/login"
                    className="px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-orange-50 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>🔑</span>
                    Login
                  </NavLink>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="/signup"
                    className="px-4 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <span>👤</span>
                    Sign Up
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}



// import React, { useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ShoppingCart, Menu, UserRound } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";

// export default function Header() {
//   const { totalQty } = useCart();
//   const { user, logout } = useAuth();
//   const [open, setOpen] = useState(false);
//   const nav = useNavigate();

//   const navLink = "px-3 py-2 rounded-lg hover:bg-slate-100";
//   const active = ({ isActive }: any) => (isActive ? "bg-slate-200 " + navLink : navLink);

//   return (
//     <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
//       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link to="/" className="font-extrabold text-xl tracking-tight">
//           <span className="text-brand-700">Apna</span> Thikana
//         </Link>
//         <nav className="hidden md:flex items-center gap-1">
//           <NavLink to="/" className={active} end>Home</NavLink>
//           <NavLink to="/products" className={active}>Products</NavLink>
//           <NavLink to="/about" className={active}>About</NavLink>
//           <NavLink to="/contact" className={active}>Contact</NavLink>
//           <NavLink to="/cart" className={active}>
//             <div className="relative flex items-center gap-2">
//               <ShoppingCart size={18}/>
//               <span>Cart</span>
//               {totalQty > 0 && (
//                 <span className="absolute -right-2 -top-2 text-xs bg-brand-600 text-white rounded-full px-1.5">{totalQty}</span>
//               )}
//             </div>
//           </NavLink>
//           {user ? (
//             <div className="ml-2 flex items-center gap-2">
//               <span className="text-sm text-slate-700 flex items-center gap-1"><UserRound size={16}/> {user.fullName.split(" ")[0]}</span>
//               <button className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm" onClick={()=>{ logout(); nav("/"); }}>Logout</button>
//             </div>
//           ) : (
//             <>
//               <NavLink to="/login" className={active}>Login</NavLink>
//               <NavLink to="/signup" className={active}>Signup</NavLink>
//             </>
//           )}
//         </nav>
//         <button className="md:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
//           <Menu />
//         </button>
//       </div>
//       {open && (
//         <div className="md:hidden border-t bg-white">
//           <div className="flex flex-col p-2">
//             <NavLink onClick={()=>setOpen(false)} to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100">Home</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/products" className="px-3 py-2 rounded-lg hover:bg-slate-100">Products</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/about" className="px-3 py-2 rounded-lg hover:bg-slate-100">About</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/contact" className="px-3 py-2 rounded-lg hover:bg-slate-100">Contact</NavLink>
//             <NavLink onClick={()=>setOpen(false)} to="/cart" className="px-3 py-2 rounded-lg hover:bg-slate-100">Cart</NavLink>
//             {user ? <button className="text-left px-3 py-2 rounded-lg hover:bg-slate-100" onClick={()=>{ setOpen(false); logout(); }}>Logout</button> : (<><NavLink onClick={()=>setOpen(false)} to="/login" className="px-3 py-2 rounded-lg hover:bg-slate-100">Login</NavLink><NavLink onClick={()=>setOpen(false)} to="/signup" className="px-3 py-2 rounded-lg hover:bg-slate-100">Signup</NavLink></>)}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }