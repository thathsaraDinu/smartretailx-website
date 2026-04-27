import React from 'react';
import { Presentation, Play, Calendar, ExternalLink } from 'lucide-react';

const presentations = [
  { 
    title: 'Initial Proposal', 
    date: 'Sep 2025', 
    description: 'Foundational goals and architectural vision.',
    thumbnail: 'Proposal Presentation' 
  },
  { 
    title: 'Development Progress I', 
    date: 'Nov 2025', 
    description: 'First demo of model outcomes and integration hooks.',
    thumbnail: 'Demo Slide Deck' 
  },
  { 
    title: 'Development Progress II', 
    date: 'Feb 2026', 
    description: 'End-to-end pipeline walkthrough with actual data.',
    thumbnail: 'Integration Review' 
  },
  { 
    title: 'Final Defense', 
    date: 'May 2026', 
    description: 'Complete system feature set and final evaluation results.',
    thumbnail: 'Final Capstone' 
  },
];

export default function Slides() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">Presentations & Slides</h1>
        <p className="text-gray-400">Visual narratives of our research journey and technical breakthroughs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {presentations.map((p, i) => (
          <div key={i} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-8 flex items-center justify-center text-center">
               <div className="space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                 <Presentation className="w-10 h-10 text-white mx-auto" />
                 <div className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">{p.thumbnail}</div>
               </div>
               <div className="absolute inset-0 bg-blue-600/80 opaity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center opacity-0">
                  <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-bold text-sm">
                    <Play className="w-4 h-4 fill-current" /> Open Slides
                  </button>
               </div>
            </div>
            
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {p.date}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
              <h3 className="text-white font-bold text-lg">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
