'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Ghost, PlayCircle, BarChart2, Zap, Cpu, 
  ArrowRight, Check, Activity, Layers, ShieldCheck,
  LayoutDashboard, Settings, LogOut, ChevronDown, 
  ChevronRight, ChevronUp, TrendingUp, ArrowDownRight,
  MonitorPlay, Database, Filter, Bell, Clock, Hash
} from 'lucide-react';

export default function LandingPageV7() {
  // --- CALCULATOR STATE ---
  const [selectedExchanges, setSelectedExchanges] = useState<string[]>([]);
  const [selectedSignals, setSelectedSignals] = useState<string[]>([]);

  // --- PREVIEW DASHBOARD STATE ---
  const [isChartOpen, setIsChartOpen] = useState(true);
  const [isGridOpen, setIsGridOpen] = useState(true);

  const exchanges = [
    { id: 'binance', name: 'Binance', price: 10 },
    { id: 'bybit', name: 'Bybit', price: 10 },
    { id: 'okx', name: 'OKX', price: 10 },
    { id: 'gate', name: 'Gate.io', price: 10 },
    { id: 'htx', name: 'HTX', price: 10 },
  ];

  const signals = [
    { id: 'pump', name: 'Pump Signals', price: 5 },
    { id: 'dump', name: 'Dump Signals', price: 5 },
    { id: 'orange', name: 'Orange (Anomaly)', price: 5 },
    { id: 'phantom', name: 'Phantom AI', price: 5 },
    { id: 'default', name: 'Default Signals', price: 10 },
    { id: 'assets', name: 'Asset Injection', price: 5 },
  ];

  const toggleItem = (id: string, list: string[], setList: any) => {
    if (list.includes(id)) {
      setList(list.filter(item => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  const calculateTotal = () => {
    const exTotal = selectedExchanges.reduce((acc, id) => {
      return acc + (exchanges.find(e => e.id === id)?.price || 0);
    }, 0);
    const sigTotal = selectedSignals.reduce((acc, id) => {
      return acc + (signals.find(s => s.id === id)?.price || 0);
    }, 0);
    return exTotal + sigTotal;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body { font-family: 'Manrope', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        
        .hover-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(6, 182, 212, 0.3);
          transform: translateY(-2px);
        }
        
        .active-card {
          background: rgba(6, 182, 212, 0.1);
          border-color: rgba(6, 182, 212, 0.6);
        }

        /* Flow Animation for Data Pipeline */
        @keyframes flow {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
        }
        .animate-flow {
            animation: flow 2s linear infinite;
        }

        /* Hide Scrollbar for Dashboard Preview */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Ghost className="w-5 h-5 text-cyan-400" />
                <span className="font-bold tracking-widest text-lg">PRIZRAK.AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
                <a href="#how" className="hover:text-white transition-colors">How it Works</a>
                <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
                <a href="#calculator" className="hover:text-white transition-colors">Pricing</a>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/dashboard">
                  <button className="bg-white text-black px-5 py-2 rounded-lg text-xs font-bold uppercase hover:bg-cyan-400 transition-all">
                      Launch App
                  </button>
                </Link>
            </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-900/20 to-transparent opacity-40 blur-[100px] -z-10"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Operational
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            See the Order Book <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Before It Moves.</span>
        </h1>

        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Detect hidden liquidity walls, institutional accumulation, and volumetric anomalies in real-time. Stop guessing. Start scanning.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg shadow-cyan-900/20 transition-all hover:scale-105">
                  Start Scanning
              </button>
            </Link>
            <button className="glass-card hover:bg-white/5 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" /> Live Demo
            </button>
        </div>
      </header>

      {/* STATS STRIP */}
      <div className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                <div className="text-3xl font-mono font-bold text-white mb-1">1,248</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Signals (24h)</div>
            </div>
            <div>
                <div className="text-3xl font-mono font-bold text-emerald-400 mb-1">88.4%</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Accuracy</div>
            </div>
            <div>
                <div className="text-3xl font-mono font-bold text-white mb-1">8,402</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Active Traders</div>
            </div>
            <div>
                <div className="text-3xl font-mono font-bold text-cyan-400 mb-1">&lt;50ms</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Latency</div>
            </div>
        </div>
      </div>

      {/* HOW IT WORKS (The Data Refinery) */}
      <section id="how" className="py-24 px-6 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold mb-4">The Logic Core</h2>
               <p className="text-zinc-400">From raw chaos to refined alpha in 24 milliseconds.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
               {/* Step 1 */}
               <div className="glass-card p-8 rounded-2xl relative group">
                  <div className="absolute -top-6 left-8 bg-[#0a0a0a] px-4 py-1 text-xs font-mono text-zinc-500 border border-white/10 rounded-full">STEP 01</div>
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 transition-colors">
                     <Database className="w-6 h-6 text-zinc-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Raw L2 Ingestion</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                     We hook directly into exchange <strong>WebSocket cores</strong> (Binance, Bybit, etc). No aggregators. We ingest full Order Book depth.
                  </p>
               </div>
               {/* Step 2 */}
               <div className="glass-card p-8 rounded-2xl relative group border-t-2 border-t-cyan-500/50">
                  <div className="absolute -top-6 left-8 bg-[#0a0a0a] px-4 py-1 text-xs font-mono text-cyan-500 border border-cyan-500/30 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)]">STEP 02</div>
                  <div className="w-14 h-14 bg-cyan-900/10 rounded-xl flex items-center justify-center mb-6 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                     <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Algorithmic Refinery</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                     Our engine cross-references <strong>Volume Delta</strong> vs <strong>Open Interest</strong>. It filters out wash trading and spoofing.
                  </p>
               </div>
               {/* Step 3 */}
               <div className="glass-card p-8 rounded-2xl relative group">
                  <div className="absolute -top-6 left-8 bg-[#0a0a0a] px-4 py-1 text-xs font-mono text-zinc-500 border border-white/10 rounded-full">STEP 03</div>
                  <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-emerald-500/50 transition-colors">
                     <Bell className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">High-Fidelity Output</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                     The noise is gone. You receive a clear, actionable signal: <strong>PUMP</strong>, <strong>DUMP</strong>, or <strong>PHANTOM</strong>.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="capabilities" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-zinc-400">The specific signal engines at your disposal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover-card transition-all group">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-cyan-600 transition-colors"><BarChart2 className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3">Volumetric Momentum</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Our "Pump/Dump" engine tracks <strong>Volume Delta</strong> spikes. It alerts you when buying pressure overwhelms the order book.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-card transition-all group border-t-2 border-t-yellow-500/50">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-yellow-500 transition-colors"><Ghost className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3 text-white">Phantom Liquidity</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Detects <strong>Iceberg Orders</strong> and hidden buy/sell walls that institutional algorithms try to mask.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover-card transition-all group">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-purple-600 transition-colors"><Cpu className="w-6 h-6" /></div>
                <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">Identifies <strong>Spread Arbitrage</strong> and unusual order book gaps on low-liquidity pairs before the bot swarms arrive.</p>
            </div>
        </div>
      </section>

      {/* --- THE COCKPIT (Fully Populated V14) --- */}
      <section id="preview" className="py-24 px-6 relative overflow-hidden bg-[#0a0a0a] border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Inside the Cockpit</h2>
            <p className="text-zinc-400">Experience the exact interface professional traders use daily.</p>
          </div>

          {/* THE DASHBOARD CONTAINER */}
          <div className="rounded-xl border border-white/10 bg-[#0e0e10] shadow-2xl overflow-hidden relative h-[850px] text-left flex">
            
            {/* SIDEBAR (Visual) */}
            <aside className="w-16 md:w-64 bg-[#121214] border-r border-white/5 flex flex-col justify-between z-30 shrink-0">
                <div>
                <div className="h-14 flex items-center gap-3 px-0 md:px-6 justify-center md:justify-start border-b border-white/5 bg-[#121214]">
                    <Ghost className="w-5 h-5 text-cyan-400" />
                    <span className="font-bold tracking-widest text-white text-sm hidden md:block">PRIZRAK</span>
                </div>
                <div className="p-2 md:p-4 space-y-1">
                    {[
                    { icon: <LayoutDashboard className="w-4 h-4" />, label: 'Overview', active: false },
                    { icon: <Activity className="w-4 h-4" />, label: 'Live Monitor', active: true },
                    { icon: <Layers className="w-4 h-4" />, label: 'Scanner Rules', active: false },
                    { icon: <Settings className="w-4 h-4" />, label: 'Settings', active: false },
                    ].map((item, i) => (
                    <button key={i} className={`w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg transition-all ${item.active ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-white/5 hover:text-white'}`}>
                        {item.icon}
                        <span className="hidden md:block">{item.label}</span>
                    </button>
                    ))}
                </div>
                </div>
                <div className="p-2 md:p-4 border-t border-white/5">
                <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-2 text-xs font-medium text-zinc-500 hover:text-rose-400 transition-all">
                    <LogOut className="w-4 h-4" />
                    <span className="hidden md:block">Logout</span>
                </button>
                </div>
            </aside>

            {/* MAIN CONTENT (Visual) */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#0e0e10]">
                
                {/* Header */}
                <header className="h-14 border-b border-white/5 bg-[#121214] flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <div className="w-6 h-6 rounded-full bg-[#F0B90B] flex items-center justify-center text-[8px] text-black font-bold">B</div>
                        BTC/USDT
                    </div>
                    <span className="text-[10px] bg-zinc-800 text-zinc-400 border border-zinc-700 px-1.5 py-0.5 rounded">SPOT</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center bg-[#18181b] rounded border border-white/5 px-3 py-1.5 gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Feed Active</span>
                    </div>
                </div>
                </header>

                <div className="flex-1 overflow-hidden flex flex-col">
                    
                    {/* 1. Chart (CSS Simulation) */}
                    <section className={`flex flex-col bg-[#0e0e10] relative border-b border-white/5 transition-all duration-300 ease-in-out shrink-0 h-[50%]`}>
                        <div className="h-10 border-b border-white/5 px-4 flex items-center justify-between bg-[#121214]">
                        <div className="flex items-center gap-2"><ChevronDown className="w-4 h-4 text-zinc-500" /><span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Live Chart</span></div>
                        <div className="text-[10px] text-zinc-500 flex items-center gap-2">Powered by TradingView</div>
                        </div>
                        <div className="flex-1 relative overflow-hidden bg-[#131722]">
                            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                            <div className="absolute right-0 top-0 bottom-0 w-12 border-l border-white/5 bg-[#131722] z-10 flex flex-col justify-between py-2 text-[10px] text-zinc-500 font-mono items-center"><span>64.5K</span><span>64.4K</span><span>64.3K</span><span>64.2K</span></div>
                            <div className="absolute bottom-10 left-0 right-12 top-10 flex items-end justify-around gap-1 px-4">
                                {[60, 45, 70, 55, 40, 65, 80, 50, 45, 30, 60, 90, 75, 55, 40, 60, 70, 85, 95].map((h, i) => (
                                    <div key={i} className="flex flex-col justify-end w-full relative"><div style={{height: `${h}%`}} className={`w-full max-w-[12px] mx-auto min-h-[4px] relative ${i % 2 === 0 ? 'bg-[#089981]' : 'bg-[#f23645]'}`}></div></div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 2. Signal Stream (Populated) */}
                    <section className="flex-1 bg-[#0e0e10] flex flex-col overflow-hidden">
                        <div className="h-10 border-b border-white/5 px-4 flex items-center justify-between bg-[#121214] shrink-0">
                        <div className="flex items-center gap-2"><ChevronDown className="w-4 h-4 text-zinc-500" /><span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Signal Stream</span></div>
                        <div className="flex gap-4 text-xs"><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span className="text-zinc-400 font-mono">12</span></div><div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500"></span><span className="text-zinc-400 font-mono">08</span></div></div>
                        </div>
                        
                        <div className="flex-1 overflow-hidden p-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-full">
                            
                            {/* PUMP */}
                            <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                                <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0"><span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2"><TrendingUp className="w-3 h-3" /> Pump</span></div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                                {[
                                    { spot: 'GMX/USDT', ex: 'BYBIT', price: '13.13', chg: '+3.12 pts', vol: '32 / 420.16', time: '09:00:54', date: '30.07.2025' },
                                    { spot: 'SOL/USDT', ex: 'BINANCE', price: '142.50', chg: '+1.24 pts', vol: '18 / 95.4', time: '09:02:10', date: '30.07.2025' },
                                    { spot: 'PEPE/USDT', ex: 'OKX', price: '0.0000084', chg: '+0.0000002', vol: '42 / 112.5', time: '09:03:15', date: '30.07.2025' },
                                    { spot: 'BONK/USDT', ex: 'BYBIT', price: '0.0000212', chg: '+0.0000015', vol: '15 / 88.2', time: '09:04:00', date: '30.07.2025' },
                                    { spot: 'SEI/USDT', ex: 'BINANCE', price: '0.3421', chg: '+0.0152', vol: '22 / 105.0', time: '09:04:45', date: '30.07.2025' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#18181b] border-l-4 border-emerald-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                                        <div className="flex justify-between items-center mb-2"><span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">{item.ex}</span><span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold uppercase">PUMP</span></div>
                                        <div className="flex justify-between items-end mb-2"><span className="text-base font-bold text-white tracking-wide">{item.spot}</span><div className="flex flex-col items-end"><span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span><span className="text-lg font-mono font-bold text-emerald-400 leading-none">{item.price}</span></div></div>
                                        <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5"><div className="flex flex-col"><span className="text-[9px] text-zinc-500 uppercase font-bold">Change</span><span className="text-sm font-mono font-bold text-white">{item.chg}</span></div><div className="flex flex-col text-right"><span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span><span className="text-sm font-mono font-bold text-emerald-400">{item.vol}</span></div></div>
                                        <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3"><span>{item.date}</span><span>{item.time}</span></div>
                                    </div>
                                ))}
                                </div>
                            </div>

                            {/* DUMP */}
                            <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                                <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0"><span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest flex items-center gap-2"><ArrowDownRight className="w-3 h-3" /> Dump</span></div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                                {[
                                    { spot: 'BTC/USDT', ex: 'BYBIT', price: '118,321', chg: '-46.5 pts', vol: '12 / 88.1', time: '09:01:20', date: '30.07.2025' },
                                    { spot: 'ETH/USDT', ex: 'BINANCE', price: '2,950.12', chg: '-12.4 pts', vol: '8 / 45.2', time: '09:02:40', date: '30.07.2025' },
                                    { spot: 'ARB/USDT', ex: 'OKX', price: '1.1240', chg: '-0.0412 pts', vol: '25 / 102.0', time: '09:03:50', date: '30.07.2025' },
                                    { spot: 'OP/USDT', ex: 'HTX', price: '1.4520', chg: '-0.0820 pts', vol: '14 / 66.5', time: '09:04:10', date: '30.07.2025' },
                                    { spot: 'MATIC/USDT', ex: 'BYBIT', price: '0.5210', chg: '-0.0120 pts', vol: '9 / 32.1', time: '09:05:05', date: '30.07.2025' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#18181b] border-l-4 border-rose-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                                        <div className="flex justify-between items-center mb-2"><span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]">{item.ex}</span><span className="text-[9px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 py-0.5 rounded font-bold uppercase">DUMP</span></div>
                                        <div className="flex justify-between items-end mb-2"><span className="text-base font-bold text-white tracking-wide">{item.spot}</span><div className="flex flex-col items-end"><span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span><span className="text-lg font-mono font-bold text-rose-400 leading-none">{item.price}</span></div></div>
                                        <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5"><div className="flex flex-col"><span className="text-[9px] text-zinc-500 uppercase font-bold">Change</span><span className="text-sm font-mono font-bold text-white">{item.chg}</span></div><div className="flex flex-col text-right"><span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span><span className="text-sm font-mono font-bold text-rose-400">{item.vol}</span></div></div>
                                        <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3"><span>{item.date}</span><span>{item.time}</span></div>
                                    </div>
                                ))}
                                </div>
                            </div>

                            {/* ORANGE */}
                            <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                                <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0"><span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2"><Activity className="w-3 h-3" /> Orange</span></div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                                {[
                                    { spot: 'WIF/USDT', ex: 'OKX', price: '2.4510', spread: '0.8%', vol: '5 / 12.0', time: '08:55:00', date: '30.07.2025' },
                                    { spot: 'JUP/USDT', ex: 'BINANCE', price: '0.9820', spread: '1.2%', vol: '8 / 15.5', time: '09:01:45', date: '30.07.2025' },
                                    { spot: 'TIA/USDT', ex: 'BYBIT', price: '6.4500', spread: '0.5%', vol: '4 / 9.2', time: '09:03:20', date: '30.07.2025' },
                                    { spot: 'INJ/USDT', ex: 'HTX', price: '24.100', spread: '0.9%', vol: '6 / 14.0', time: '09:04:55', date: '30.07.2025' },
                                    { spot: 'RUNE/USDT', ex: 'OKX', price: '4.2100', spread: '1.5%', vol: '3 / 8.5', time: '09:06:10', date: '30.07.2025' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#18181b] border-l-4 border-orange-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                                        <div className="flex justify-between items-center mb-2"><span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">{item.ex}</span><span className="text-[9px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded font-bold uppercase">ANOMALY</span></div>
                                        <div className="flex justify-between items-end mb-2"><span className="text-base font-bold text-white tracking-wide">{item.spot}</span><div className="flex flex-col items-end"><span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span><span className="text-lg font-mono font-bold text-orange-400 leading-none">{item.price}</span></div></div>
                                        <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5"><div className="flex flex-col"><span className="text-[9px] text-zinc-500 uppercase font-bold">Spread</span><span className="text-sm font-mono font-bold text-white">{item.spread}</span></div><div className="flex flex-col text-right"><span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span><span className="text-sm font-mono font-bold text-orange-400">{item.vol}</span></div></div>
                                        <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3"><span>{item.date}</span><span>{item.time}</span></div>
                                    </div>
                                ))}
                                </div>
                            </div>

                            {/* PHANTOM */}
                            <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                                <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0"><span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2"><Zap className="w-3 h-3" /> Phantom</span></div>
                                <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                                {[
                                    { spot: 'BTC/USDT', ex: 'BINANCE', price: '118,400', conf: '98%', reason: 'Iceberg', time: '09:05:00', date: '30.07.2025' },
                                    { spot: 'SUI/USDT', ex: 'OKX', price: '1.5420', conf: '85%', reason: 'Hidden Buy', time: '09:02:15', date: '30.07.2025' },
                                    { spot: 'LINK/USDT', ex: 'BYBIT', price: '14.200', conf: '92%', reason: 'Dark Pool', time: '09:06:40', date: '30.07.2025' },
                                    { spot: 'AVAX/USDT', ex: 'HTX', price: '28.500', conf: '78%', reason: 'Whale Wall', time: '09:08:10', date: '30.07.2025' },
                                    { spot: 'NEAR/USDT', ex: 'BINANCE', price: '5.100', conf: '88%', reason: 'Accumulation', time: '09:10:00', date: '30.07.2025' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-[#18181b] border-l-4 border-yellow-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                                        <div className="flex justify-between items-center mb-2"><span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">{item.ex}</span><span className="text-[9px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded font-bold uppercase">AI WALL</span></div>
                                        <div className="flex justify-between items-end mb-2"><span className="text-base font-bold text-white tracking-wide">{item.spot}</span><div className="flex flex-col items-end"><span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Detected</span><span className="text-lg font-mono font-bold text-yellow-400 leading-none">{item.price}</span></div></div>
                                        <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5"><div className="flex flex-col"><span className="text-[9px] text-zinc-500 uppercase font-bold">Confidence</span><span className="text-sm font-mono font-bold text-white">{item.conf}</span></div><div className="flex flex-col text-right"><span className="text-[9px] text-zinc-500 uppercase font-bold">Reason</span><span className="text-sm font-mono font-bold text-yellow-400">{item.reason}</span></div></div>
                                        <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3"><span>{item.date}</span><span>{item.time}</span></div>
                                    </div>
                                ))}
                                </div>
                            </div>

                        </div>
                        </div>
                    </section>
                </div>
            </main>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-500 mb-4">This is not a mockup. This is the V2 architecture ready for deployment.</p>
            <Link href="/dashboard">
               <span className="text-cyan-400 hover:text-cyan-300 text-sm font-bold uppercase tracking-widest cursor-pointer flex items-center justify-center gap-2">
                  Enter Full Terminal <ArrowRight className="w-4 h-4" />
               </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION CONFIGURATOR */}
      <section id="calculator" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Build Your Access</h2>
            <p className="text-zinc-400">Select only the modules and exchanges you trade. Pay for what you use.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Activity className="w-4 h-4" /> 1. Select Data Sources (+$10/ea)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {exchanges.map((ex) => (
                            <button key={ex.id} onClick={() => toggleItem(ex.id, selectedExchanges, setSelectedExchanges)} className={`p-4 rounded-xl border text-left transition-all ${selectedExchanges.includes(ex.id) ? 'active-card shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-zinc-900/50 border-white/5 hover:border-white/20 text-zinc-400'}`}>
                                <div className="flex justify-between items-center"><span className="font-bold text-sm">{ex.name}</span>{selectedExchanges.includes(ex.id) && <Check className="w-4 h-4 text-cyan-400" />}</div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2"><Zap className="w-4 h-4" /> 2. Select Signal Engines</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {signals.map((sig) => (
                            <button key={sig.id} onClick={() => toggleItem(sig.id, selectedSignals, setSelectedSignals)} className={`p-4 rounded-xl border text-left transition-all ${selectedSignals.includes(sig.id) ? 'active-card shadow-[0_0_15px_rgba(6,182,212,0.2)]' : 'bg-zinc-900/50 border-white/5 hover:border-white/20 text-zinc-400'}`}>
                                <div className="flex justify-between items-center"><span className="font-bold text-sm">{sig.name}</span><span className="text-xs font-mono opacity-60">+${sig.price}</span></div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="sticky top-24 glass-card p-6 rounded-2xl border-t-4 border-t-cyan-500 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="text-lg font-bold mb-6">Your Plan</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm"><span className="text-zinc-400">Exchanges ({selectedExchanges.length})</span><span>${selectedExchanges.length * 10}</span></div>
                            <div className="flex justify-between text-sm"><span className="text-zinc-400">Signal Modules ({selectedSignals.length})</span><span>${selectedSignals.reduce((a, b) => a + (signals.find(s=>s.id===b)?.price||0), 0)}</span></div>
                            <div className="h-[1px] bg-white/10 w-full my-4"></div>
                            <div className="flex justify-between items-end"><span className="text-lg font-bold">Total / mo</span><span className="text-4xl font-mono font-bold text-cyan-400">${calculateTotal()}</span></div>
                        </div>
                    </div>
                    <button className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all">Subscribe Now</button>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 bg-[#020203]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex justify-center items-center gap-2 mb-6 opacity-50">
                <Ghost className="w-5 h-5" />
                <span className="font-bold tracking-widest text-sm">PRIZRAK.AI</span>
            </div>
            <p className="text-zinc-600 text-xs font-mono">© 2026 Prizrak.ai | System Latency: 24ms | All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}