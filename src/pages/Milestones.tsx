import React from 'react';
import { Calendar, CheckSquare, Flag, Star } from 'lucide-react';

const milestones = [
  { 
    title: 'Project Proposal', 
    date: 'August 2025', 
    marks: '10%', 
    desc: 'Initial concept definition and feasibility analysis across the four subsystems.',
    status: 'completed'
  },
  { 
    title: 'Progress Presentation I', 
    date: 'October 2025', 
    marks: '20%', 
    desc: 'Validation of initial models (SinLlama ASR & K-Means clustering architecture).',
    status: 'completed'
  },
  { 
    title: 'Progress Presentation II', 
    date: 'January 2026', 
    marks: '20%', 
    desc: 'Integration of ML services with the NestJS gateway and frontend prototypes.',
    status: 'completed'
  },
  { 
    title: 'Final Assessment', 
    date: 'April 2026', 
    marks: '40%', 
    desc: 'End-to-end system testing, performance evaluation, and user-centered validation.',
    status: 'current'
  },
  { 
    title: 'Viva & Project Handover', 
    date: 'May 2026', 
    marks: '10%', 
    desc: 'Defense of technical contributions and presentation of the finalized platform.',
    status: 'pending'
  }
];

export default function Milestones() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">Project Milestones</h1>
        <p className="text-gray-400">Tracking the evolution of SmartRetailX from proposal to production.</p>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-12">
        {milestones.map((m, i) => (
          <div key={i} className="relative pl-12 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-black ${
              m.status === 'completed' ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 
              m.status === 'current' ? 'bg-blue-500 animate-pulse' : 'bg-gray-700'
            }`} />
            
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold bg-white/5 px-2 py-1 rounded text-gray-500 uppercase tracking-widest">{m.date}</span>
                <span className="text-xs font-bold text-blue-400 px-2 py-1 bg-blue-400/10 rounded tracking-widest uppercase">{m.marks} Weight</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{m.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex items-center justify-between gap-8">
        <div className="flex gap-4 items-center">
           <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-500" />
           </div>
           <div>
             <div className="text-white font-bold text-sm">System Readiness</div>
             <div className="text-gray-500 text-xs">Averaged across all subsystems</div>
           </div>
        </div>
        <div className="text-3xl font-black text-white">92%</div>
      </div>
    </div>
  );
}
