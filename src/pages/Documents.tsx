import React from 'react';
import { FileText, FileCode, CheckCircle2, Download } from 'lucide-react';

const docs = [
  { title: 'Project Charter', status: 'Available', type: 'Core Policy', icon: FileText },
  { title: 'Research Proposal', status: 'Available', type: 'Technical Spec', icon: FileCode },
  { title: 'Literature Survey', status: 'Available', type: 'Domain Analysis', icon: FileText },
  { title: 'Software Requirement Spec (SRS)', status: 'Available', type: 'System Architecture', icon: FileCode },
  { title: 'Design Document', status: 'Available', type: 'UI/UX & Database', icon: FileText },
  { title: 'Final Dissertation', status: 'Pending Review', type: 'Complete Research', icon: FileText },
];

export default function Documents() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white tracking-tight">Project Documentation</h1>
        <p className="text-gray-400">Comprehensive resources detailing the technical and conceptual framework of SmartRetailX.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc, i) => (
          <div key={i} className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                <doc.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold">{doc.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{doc.type}</span>
                  <span className="text-[10px] w-1 h-1 rounded-full bg-gray-700" />
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${doc.status === 'Available' ? 'text-green-500' : 'text-yellow-500 animate-pulse'}`}>
                    {doc.status}
                  </span>
                </div>
              </div>
            </div>
            {doc.status === 'Available' && (
              <button className="p-2 text-gray-500 hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl text-center space-y-4">
         <h4 className="text-white font-bold">Research Continuity</h4>
         <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
           All documentation follows the IEEE standard for technical reporting, ensuring high maintainability and clarity for future developers and researchers.
         </p>
      </div>
    </div>
  );
}
