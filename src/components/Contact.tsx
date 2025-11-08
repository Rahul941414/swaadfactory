import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="flex items-center gap-3 text-slate-700"><Mail size={18} /> support@swaad.factory</div>
        <div className="flex items-center gap-3 text-slate-700 mt-2"><Phone size={18} /> +91 7851925971</div>
        <div className="flex items-center gap-3 text-slate-700 mt-2"><MapPin size={18} /> gate no 1 , Indore, Madhya Pradesh, 452020</div>
      </div>
      <div className="card p-6">
        <h3 className="font-semibold mb-3">Business Hours</h3>
        <p className="text-sm text-slate-600">Mon–Sat: 9am to 7pm IST</p>
        <p className="text-sm text-slate-600">Closed on Sundays and public holidays.</p>
      </div>
    </div>
  );
}