import React from 'react';
import { motion } from 'motion/react';
import { Target, Search, Rocket, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const researchAreas = [
  {
    title: 'Sinhala Voice Assistant',
    subtitle: 'Linguistic Gap & Fine-tuned ASR',
    path: '/voice',
    description: 'Addressing the underrepresentation of Sinhala in voice tech with SinLlama-based microservices.',
    icon: Search,
    color: 'blue'
  },
  {
    title: 'Customer Segmentation',
    subtitle: 'RFM Hierarchy & Loyalty Tiers',
    path: '/segmentation',
    description: 'Transforming coarse segmentation into two-level behavioral archetypes.',
    icon: Target,
    color: 'purple'
  },
  {
    title: 'BI Dashboard ML Service',
    subtitle: 'Demand Forecasting & XAI',
    path: '/analytics',
    description: 'Hybrid Prophet-XGBoost ensemble models with SHAP-based interpretability.',
    icon: BarChart3,
    color: 'green'
  },
  {
    title: 'Personalized Promotion Engine',
    subtitle: 'Uplift Modeling & Intervention',
    path: '/promotions',
    description: 'Causal inference models to maximize incremental ROI of promotional spend.',
    icon: Rocket,
    color: 'orange'
  }
];

export default function Domain() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      <section className="space-y-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Research Domain</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          The SmartRetailX project investigates the intersection of low-resource language technologies, 
          predictive analytics, and causal inference within the supermarket retail landscape. 
          Our research addresses critical gaps in localization and personalization.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {researchAreas.map((area, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-white/20 transition-all"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`p-4 rounded-2xl bg-${area.color}-600/20`}>
                <area.icon className={`w-8 h-8 text-${area.color}-400 underline decoration-2`} />
              </div>
              <Link to={area.path} className="text-sm font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest flex items-center gap-1">
                Deep Dive <Zap className="w-3 h-3" />
              </Link>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{area.title}</h3>
            <div className="text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">{area.subtitle}</div>
            <p className="text-gray-400 leading-relaxed mb-8">
              {area.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
               <div className="space-y-1">
                 <div className="text-xs text-gray-500 uppercase tracking-tighter">Core Gap</div>
                 <div className="text-xs text-gray-300 font-medium leading-snug">Limited retail domain datasets for Sinhala market.</div>
               </div>
               <div className="space-y-1">
                 <div className="text-xs text-gray-500 uppercase tracking-tighter">Contribution</div>
                 <div className="text-xs text-gray-300 font-medium leading-snug">End-to-end integration of ASR, NLP & XAI.</div>
               </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Global Methodology */}
      <section className="bg-black/40 border border-white/10 rounded-[40px] p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">System Methodology</h2>
            <p className="text-gray-400 leading-relaxed font-light">
              Following Design Science Research (DSR), the system was built as a multi-layered microservices architecture. 
              Each subsystem underwent rigorous training, validation, and user-centered evaluation.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Data Engineering', desc: 'Hybrid strategy combining public UCI/Instacart datasets with synthetic response models.' },
                { title: 'Model Pipeline', desc: 'Containerized inference points using FastAPI, NestJS, and RabbitMQ.' },
                { title: 'Deployment', desc: 'Cloud-native architecture orchestrated via Kubernetes for horizontal scalability.' }
              ].map((m, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0 mt-1">
                     {i+1}
                   </div>
                   <div>
                     <h5 className="text-white font-bold text-sm tracking-tight">{m.title}</h5>
                     <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             {['PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Python', 'TypeScript', 'TensorFlow', 'PyTorch'].map(t => (
               <div key={t} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center text-xs font-mono uppercase tracking-widest text-gray-400">
                 {t}
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
