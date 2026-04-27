import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">Contact Us</h1>
        <p className="text-gray-400">Have questions about SmartRetailX? We'd love to hear from you.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
           <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">General Contacts</h2>
              <p className="text-gray-400 leading-relaxed font-light">
                For research inquiries, professional collaborations, or technical details regarding the platform architecture.
              </p>
           </div>
           
           <div className="space-y-4">
             {[
               { icon: Mail, label: 'Email', value: 'contact@smartretailx.sliit.lk' },
               { icon: Phone, label: 'Phone', value: '+94 11 234 5678' },
               { icon: MapPin, label: 'Address', value: 'New Academic Building, SLIIT, Malabe, Sri Lanka' },
               { icon: MessageSquare, label: 'Support', value: 'Discord Community / SLIIT Research Portal' }
             ].map((item, i) => (
               <div key={i} className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl items-center group hover:bg-white/[0.08] transition-colors">
                 <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <item.icon className="w-5 h-5" />
                 </div>
                 <div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                 </div>
               </div>
             ))}
           </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 space-y-8 relative overflow-hidden">
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px]" />
           <div className="space-y-2 relative z-10">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <p className="text-gray-500 text-sm">Direct research inquiry template</p>
           </div>
           
           <form className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
              </div>
              <input type="text" placeholder="Subject / Subsystem Reference" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-colors" />
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Inquiry
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
