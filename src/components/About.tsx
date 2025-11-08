import React from "react";
import { ChefHat, Users, Target, Heart, Award, Clock, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "10K+", label: "Happy Customers", icon: "😊" },
    { number: "50+", label: "Dish Varieties", icon: "🍛" },
    { number: "4.9★", label: "Customer Rating", icon: "⭐" },
    { number: "30min", label: "Avg. Delivery", icon: "⚡" }
  ];

  const values = [
    {
      icon: <ChefHat className="w-10 h-10 text-orange-600" />,
      title: "Our Mission",
      description: "To deliver authentic Indian flavors with the warmth of home-cooked meals, using traditional recipes and fresh ingredients."
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Our Passion",
      description: "We pour our heart into every dish, ensuring each bite brings back memories of traditional Indian kitchens and family gatherings."
    },
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: "Our Quality",
      description: "Premium ingredients, hygienic preparation, and authentic spices - we never compromise on quality and taste."
    }
  ];

  const features = [
    {
      icon: "👨‍🍳",
      title: "Expert Chefs",
      description: "Our master chefs have years of experience in traditional Indian cooking"
    },
    {
      icon: "🌱",
      title: "Fresh Ingredients",
      description: "Daily sourced vegetables and authentic spices for that perfect taste"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "Hot and fresh food delivered to your doorstep in record time"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Premium quality food at prices that won't burn a hole in your pocket"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-300 rounded-full translate-y-40 -translate-x-40 opacity-20"></div>

        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <ChefHat className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              About <span className="text-yellow-300 drop-shadow-sm">Swaad Factory</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed font-medium">
              Where every dish tells a story of tradition, taste, and togetherness
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-black text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Our Delicious Journey</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="text-orange-600 font-semibold">Swaad Factory</span> was born from a simple passion:
                  to share the authentic taste of Indian home cooking with food lovers everywhere. What started as a
                  small kitchen experiment has grown into a beloved culinary destination.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our journey began when our founder, a third-generation chef, noticed how difficult it was to find
                  genuine Indian flavors outside of traditional homes. We set out to change that by creating a kitchen
                  that respects tradition while embracing modern convenience.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, every dish we serve carries the legacy of generations of culinary expertise, the warmth of
                  Indian hospitality, and the promise of an unforgettable dining experience.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
                  alt="Our Kitchen"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Our Secret Ingredients</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-orange-100 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Why Choose Swaad Factory?</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center border border-orange-200 hover:border-orange-300 transition-all duration-300 group hover:scale-105">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-orange-700 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">Meet Our Master Chefs</h2>
            <div className="w-24 h-2 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Chef Rajesh Kumar", role: "Head Chef", experience: "15+ years", specialty: "North Indian Cuisine", image: "👨‍🍳" },
              { name: "Chef Priya Sharma", role: "Sous Chef", experience: "12+ years", specialty: "South Indian Delicacies", image: "👩‍🍳" },
              { name: "Chef Amit Patel", role: "Pastry Chef", experience: "10+ years", specialty: "Indian Desserts", image: "🧑‍🍳" }
            ].map((chef, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="text-6xl mb-4">{chef.image}</div>
                <h3 className="text-xl font-black text-gray-800 mb-2">{chef.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{chef.role}</p>
                <p className="text-gray-600 text-sm mb-1">{chef.experience} Experience</p>
                <p className="text-gray-500 text-sm">{chef.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-3xl p-12 text-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-300 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300 rounded-full translate-y-20 -translate-x-20 opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Taste the Magic?</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've made Swaad Factory their go-to for authentic Indian cuisine
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/menu"
                className="px-8 py-4 rounded-xl bg-white text-orange-600 font-black hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Explore Our Menu
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border-2 border-white text-white font-black hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { Users, Target, Heart, Award } from "lucide-react";

// export default function About() {
//   const stats = [
//     { number: "10K+", label: "Happy Customers" },
//     { number: "500+", label: "Products" },
//     { number: "5★", label: "Average Rating" },
//     { number: "24/7", label: "Support" }
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8 text-blue-600" />,
//       title: "Our Mission",
//       description: "To bring authentic Indian products and experiences to every home, connecting communities through quality and tradition."
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-red-500" />,
//       title: "Our Values",
//       description: "We believe in authenticity, quality, and building lasting relationships with our customers and artisan partners."
//     },
//     {
//       icon: <Award className="w-8 h-8 text-yellow-600" />,
//       title: "Our Promise",
//       description: "Premium quality products, exceptional service, and a seamless shopping experience that exceeds expectations."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative container mx-auto px-4 py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               About <span className="text-yellow-300">Swaad Factory</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
//               Where tradition meets innovation in the digital marketplace
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 -mt-10 relative z-10">
//         <div className="bg-white rounded-2xl shadow-2xl p-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600 font-medium">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-16">
//         {/* Story Section */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Swaad Factory began with a simple vision: to create a modern Indian storefront that bridges
//               the gap between traditional craftsmanship and contemporary digital commerce. Founded on the
//               principles of performance, design, and compliance, we've built more than just an online store.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               We're a community that celebrates the rich heritage of Indian culture while embracing
//               innovative technology to deliver exceptional shopping experiences. Every product in our
//               collection is carefully curated to ensure authenticity, quality, and cultural significance.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Today, Swaad Factory stands as a testament to what's possible when tradition meets
//               innovation, serving customers worldwide while supporting local artisans and businesses
//               across India.
//             </p>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4">What Drives Us</h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//                 <div className="mb-6">{value.icon}</div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>





//         {/* CTA Section */}
//         <div className="text-center bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Journey</h2>
//           <p className="text-xl mb-8 text-orange-100">
//             Be part of our mission to celebrate and preserve Indian heritage through commerce
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// }
