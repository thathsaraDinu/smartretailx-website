import React from 'react';
import { Mail, Github, Linkedin, Award, User } from 'lucide-react';

const team = [
  {
    name: 'Pramuditha W.G.S',
    role: 'ML Engineer',
    specialty: 'Speech Recognition & NLP',
    bio: 'Lead researcher for the Sinhala Voice Assistant module, specializing in SinLlama fine-tuning and localized ASR.',
    image: 'P'
  },
  {
    name: 'Nimsara S.P.N',
    role: 'Data Scientist',
    specialty: 'Behavioral Analytics',
    bio: 'Architect of the dynamic segmentation engine, focusing on RFM-based customer archetyping and loyalty optimization.',
    image: 'N'
  },
  {
    name: 'Dinuwan W.T',
    role: 'Backend Architect',
    specialty: 'Microservices & Forecasting',
    bio: 'Responsible for the BI Dashboard ML Service, demand forecasting pipelines, and explainable AI integration.',
    image: 'D'
  },
  {
    name: 'Nayanapriya H.T.E',
    role: 'Systems Strategist',
    specialty: 'Causal Inference & ROI',
    bio: 'Designer of the Personalized Promotion Engine, utilizing uplift modeling to maximize marketing efficiency.',
    image: 'N'
  }
];

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white tracking-tight">The Development Team</h1>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Four researchers from the Sri Lanka Institute of Information Technology, dedicated to pioneering the next generation of retail intelligence.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group space-y-6">
            <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                  <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"><Github className="w-5 h-5" /></a>
                  <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"><Linkedin className="w-5 h-5" /></a>
               </div>
               <span className="text-6xl font-black text-white opacity-20">{member.image}</span>
            </div>
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white leading-none">{member.name}</h3>
              <div className="text-sm font-bold text-blue-400 uppercase tracking-widest">{member.role}</div>
              <div className="text-xs text-gray-500 italic mt-1">{member.specialty}</div>
              <p className="text-gray-400 text-sm leading-relaxed pt-4 border-t border-white/5 mt-4">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white/5 border border-white/10 rounded-[40px] p-12 overflow-hidden relative text-center">
         <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 blur-[100px]" />
         <div className="relative z-10 space-y-6">
            <Award className="w-12 h-12 text-yellow-500 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Academic Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              This project is submitted in partial fulfillment of the requirements for the B.Sc. (Hons) in Information Technology 
              at the <span className="text-white font-medium">Sri Lanka Institute of Information Technology (SLIIT)</span>.
            </p>
         </div>
      </section>
    </div>
  );
}
