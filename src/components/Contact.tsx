import React from "react";
import { Mail, Phone, MapPin, User } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="flex items-center gap-3 text-slate-700">
          <User size={18} /> Kailash Chand Meena
        </div>
        <div className="flex items-center gap-3 text-slate-700 mt-2">
          <Mail size={18} /> kailashmeena941414@gmail.com
        </div>
        <div className="flex items-center gap-3 text-slate-700 mt-2">
          <Phone size={18} /> +91 8619949314
        </div>
        <div className="flex items-center gap-3 text-slate-700 mt-2">
          <MapPin size={18} /> A7 Gokulpura Lalsot, Dausa, Rajasthan, 303503, India
        </div>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold mb-3">Business Hours</h3>
        <p className="text-sm text-slate-600">Mon–Sat: 9am to 7pm IST</p>
        <p className="text-sm text-slate-600">Closed on Sundays and public holidays.</p>
      </div>
    </div>
  );
}
