import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, BookOpen, Milestone, Files, Presentation, Users, Phone, Menu, X, ChevronDown, Github } from 'lucide-react';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Slides from './pages/Slides';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import VoiceAssistant from './pages/VoiceAssistant';
import Segmentation from './pages/Segmentation';
import BIDashboard from './pages/BIDashboard';
import PromotionEngine from './pages/PromotionEngine';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Domain', path: '/domain', icon: BookOpen },
    { name: 'Milestones', path: '/milestones', icon: Milestone },
    { name: 'Documents', path: '/documents', icon: Files },
    { name: 'Slides', path: '/slides', icon: Presentation },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">S</div>
              <span className="tracking-tight hidden sm:block">SmartRetailX</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-[13px] font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-400 bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-sm font-bold uppercase tracking-widest flex items-center gap-4 ${
                    location.pathname === link.path
                      ? 'text-blue-400 bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <link.icon className="w-5 h-5 text-blue-500" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500/30 selection:text-blue-200 antialiased">
        <Navbar />
        <main className="pt-16 min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/domain" element={<PageTransition><Domain /></PageTransition>} />
            <Route path="/milestones" element={<PageTransition><Milestones /></PageTransition>} />
            <Route path="/documents" element={<PageTransition><Documents /></PageTransition>} />
            <Route path="/slides" element={<PageTransition><Slides /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
            <Route path="/voice" element={<PageTransition><VoiceAssistant /></PageTransition>} />
            <Route path="/segmentation" element={<PageTransition><Segmentation /></PageTransition>} />
            <Route path="/analytics" element={<PageTransition><BIDashboard /></PageTransition>} />
            <Route path="/promotions" element={<PageTransition><PromotionEngine /></PageTransition>} />
          </Routes>
        </main>
        
        <footer className="bg-black/80 border-t border-white/5 py-16 mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2 space-y-6">
                <Link to="/" className="text-white font-bold text-2xl flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">S</div>
                  SmartRetailX
                </Link>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md font-light">
                  Revolutionizing the Sri Lankan retail ecosystem through fine-tuned AI, 
                  behavioral analytics, and personalized causal intervention.
                </p>
                <div className="flex gap-4">
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group">
                    <Github className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-bold text-sm tracking-widest uppercase">Navigation</h4>
                <ul className="text-gray-500 text-xs space-y-3 font-bold uppercase tracking-widest">
                  <li><Link to="/domain" className="hover:text-blue-400 transition-colors">Domain</Link></li>
                  <li><Link to="/milestones" className="hover:text-blue-400 transition-colors">Milestones</Link></li>
                  <li><Link to="/documents" className="hover:text-blue-400 transition-colors">Documents</Link></li>
                  <li><Link to="/slides" className="hover:text-blue-400 transition-colors">Slides</Link></li>
                </ul>
              </div>
              <div className="space-y-4">
               <h4 className="text-white font-bold text-sm tracking-widest uppercase">Research</h4>
                <ul className="text-gray-500 text-xs space-y-3 font-bold uppercase tracking-widest">
                  <li><Link to="/voice" className="hover:text-blue-400 transition-colors">Voice AI</Link></li>
                  <li><Link to="/segmentation" className="hover:text-blue-400 transition-colors">Segmentation</Link></li>
                  <li><Link to="/analytics" className="hover:text-blue-400 transition-colors">ML Analytics</Link></li>
                  <li><Link to="/promotions" className="hover:text-blue-400 transition-colors">Promotion Engine</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">
               <span>© 2026 SmartRetailX Research Group</span>
               <span>Sri Lanka Institute of Information Technology (SLIIT)</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

