import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Users, TrendingUp, Sparkles, Database, Shield, Zap, Globe, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

const subsystems = [
  {
    title: 'Sinhala Voice Assistant',
    description: 'Fine-tuned SinLlama model for localized ASR.',
    icon: MessageSquare,
    bgClass: 'bg-blue-600/20',
    iconClass: 'text-blue-400',
    link: '/voice'
  },
  {
    title: 'Customer Segmentation',
    description: 'RFM-based behavioral customer archetyping.',
    icon: Users,
    bgClass: 'bg-purple-600/20',
    iconClass: 'text-purple-400',
    link: '/segmentation'
  },
  {
    title: 'BI Dashboard ML Service',
    description: 'Demand forecasting with SHAP explainability.',
    icon: TrendingUp,
    bgClass: 'bg-green-600/20',
    iconClass: 'text-green-400',
    link: '/analytics'
  },
  {
    title: 'Personalized Promotion Engine',
    description: 'Causal uplift models for loyalty optimization.',
    icon: Sparkles,
    bgClass: 'bg-orange-600/20',
    iconClass: 'text-orange-400',
    link: '/promotions'
  }
];

export default function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 blur-[160px] rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase">
              <Globe className="w-3 h-3" /> Retail Innovation SLIIT
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
              SmartRetailX
            </h1>
            <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              An E-Commerce Platform for <br />
              <span className="text-white font-medium border-b border-blue-500/50">Personalized Retail Experiences</span>
            </p>
            
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/domain" className="px-10 py-5 bg-white text-black rounded-full font-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                Explore Domain <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black transition-all hover:bg-white/10">
                The Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 border border-white/10 rounded-[48px] p-10 md:p-16 space-y-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl" />
          <div className="space-y-4 relative z-10">
            <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.4em]">Project Abstract</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              Modern retail software often relies on static dashboards that fail to predict future trends or localize experiences. 
              <span className="text-white font-medium"> SmartRetailX</span> bridges this gap by integrating localized Sinhala Voice AI, 
              two-level behavioral customer segmentation, and explainable ML forecasting into a unified microservices ecosystem. 
              Our personalized promotion engine shifts the paradigm from broadcast marketing to causal intervention, achieving 
              significant measurable uplift in ROI and conversion.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 relative z-10">
             {[
               { label: 'Uplift ROI', val: '566.7%' },
               { label: 'Forecast MAPE', val: '7.1%' },
               { label: 'ASR Accuracy', val: '87%' },
               { label: 'Cost Saved', val: '75%' }
             ].map(stat => (
               <div key={stat.label}>
                 <div className="text-white font-black text-2xl mb-1">{stat.val}</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation / Subsystems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex justify-between items-end">
           <div className="space-y-4">
             <h2 className="text-3xl font-bold text-white tracking-tight">Core Subsystems</h2>
             <p className="text-gray-500 max-w-md">Four specialized micro-architectures working in perfect orchestration.</p>
           </div>
           <Link to="/domain" className="hidden md:flex items-center gap-2 text-blue-400 font-bold text-sm tracking-widest uppercase hover:text-blue-300 transition-colors">
              Full Domain <ArrowRight className="w-4 h-4" />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsystems.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/[0.08]"
            >
              <div className={`w-12 h-12 rounded-2xl ${s.bgClass} flex items-center justify-center mb-6`}>
                <s.icon className={`w-6 h-6 ${s.iconClass}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {s.description}
              </p>
              <Link to={s.link} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Integration Overview */}
      <section className="bg-black py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white tracking-tight leading-tight">Unified Architecture for <br /> Future-Ready Retail</h2>
                  <p className="text-gray-400 font-light text-lg">
                    Decoupling the machine learning from the service gateway allows us to scale horizontally while ensuring low latency for critical path customer interactions.
                  </p>
                </div>
                <div className="grid gap-6">
                   {[
                     { icon: Database, name: 'Shared PostgreSQL', desc: 'Centralized transactional source of truth for all ML services.' },
                     { icon: Shield, name: 'Explainable AI Core', desc: 'Every recommendation is backed by human-interpretable feature attribution.' },
                     { icon: LayoutDashboard, name: 'React Dashboard', desc: 'Professional interface for store managers to monitor performance.' }
                   ].map(item => (
                     <div key={item.name} className="flex gap-4">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 h-fit">
                           <item.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-sm">{item.name}</h4>
                           <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="aspect-square bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[64px] border border-white/10 p-1 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="relative z-10 w-3/4 space-y-4">
                  <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] transform -rotate-6 translate-x-4 opacity-80 animate-pulse">
                     <div className="w-8 h-8 rounded-lg bg-blue-500 mb-2" />
                     <div className="h-2 bg-white/20 w-3/4 rounded" />
                     <div className="h-2 bg-white/10 w-1/2 rounded mt-2" />
                  </div>
                  <div className="p-8 bg-blue-600 text-white shadow-2xl rounded-[40px] relative z-20 scale-110">
                     <Zap className="w-10 h-10 mb-4" />
                     <h4 className="text-2xl font-black italic">INTEGRATED</h4>
                     <p className="text-xs text-blue-100 font-bold uppercase tracking-widest mt-1 opacity-70">Model Serving Gateway</p>
                  </div>
                  <div className="p-6 bg-white border border-white/20 rounded-[32px] transform rotate-3 -translate-x-4">
                     <div className="flex gap-2">
                        <div className="w-1 h-8 bg-gray-200 rounded-full" />
                        <div className="w-1 h-12 bg-gray-300 rounded-full" />
                        <div className="w-1 h-6 bg-gray-200 rounded-full" />
                     </div>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

