import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900">
          About <span className="text-orange-600">Swaad Factory</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          A celebration of authentic Indian flavors — prepared fresh every day
          with passion, tradition, and innovation.
        </p>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="Cooking"
            className="rounded-3xl shadow-xl border"
          />
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-orange-200 rounded-full blur-2xl opacity-80"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Crafted with <span className="text-orange-600">Love</span> &{" "}
            <span className="text-orange-600">Tradition</span>
          </h2>
          <p className="text-slate-700 mb-4 leading-relaxed">
            At Swaad Factory, we believe food is more than just a meal — it’s
            an emotion. From the vibrant streets of India to your table, every
            dish is crafted using time-honored recipes and locally sourced
            ingredients.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Whether it’s a comforting thali, spicy snacks, or sweet desserts,
            we bring you the real taste of India in every bite. Experience the
            joy of freshness, flavor, and a sprinkle of love in every dish ❤️
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Our <span className="text-orange-600">Promise</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-slate-600">
                We handpick every ingredient to ensure freshness and
                authenticity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Authentic Recipes
              </h3>
              <p className="text-slate-600">
                Our chefs bring generations of traditional Indian recipes to
                life.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                Customer Happiness
              </h3>
              <p className="text-slate-600">
                Your satisfaction is our top priority — every meal, every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div>
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-brand-100"></div>
//         <div className="relative container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
//               Welcome to <span className="text-brand-700">Swaad Factory</span>
//             </h1>
//             <p className="mt-4 text-lg text-slate-600">
//               A modern Indian food ordering experience — fast performance, clean UI, and secure checkout.
//             </p>
//             <div className="mt-6 flex gap-3">
//               <Link to="/products" className="px-5 py-3 rounded-2xl bg-brand-600 text-white hover:bg-brand-700">Shop Now</Link>
//               <Link to="/about" className="px-5 py-3 rounded-2xl bg-white border hover:bg-slate-50">Learn More</Link>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="aspect-[4/3] rounded-3xl border bg-white shadow-lg"></div>
//             <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-brand-200 rounded-3xl blur-xl opacity-80"></div>
//             <div className="absolute -top-6 -right-6 w-28 h-28 bg-brand-300 rounded-3xl blur-xl opacity-80"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }