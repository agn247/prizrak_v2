'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Ghost, LayoutDashboard, Settings, LogOut, 
  Activity, Layers, Zap, TrendingUp, 
  ArrowRight, ShieldCheck, Wallet, CreditCard,
  Globe, Bell, Calendar, Clock, ArrowDownRight,
  AlertTriangle, MonitorPlay
} from 'lucide-react';

export default function OverviewV6() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-300 font-sans flex overflow-hidden selection:bg-cyan-500/30">
      
      {/* --- SIDEBAR (From V5) --- */}
      <aside className="w-16 md:w-64 bg-[#121214] border-r border-white/5 flex flex-col justify-between z-30 flex-shrink-0">
        <div>
          <div className="h-14 flex items-center gap-3 px-0 md:px-6 justify-center md:justify-start border-b border-white/5 bg-[#121214]">
            <Link href="/" className="flex items-center gap-3">
                <Ghost className="w-5 h-5 text-cyan-400" />
                <span className="font-bold tracking-widest text-white text-sm hidden md:block">PRIZRAK</span>
            </Link>
          </div>

          <div className="p-2 md:p-4 space-y-1">
            <Link href="/overview">
              <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden md:block">Overview</span>
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all text-zinc-500">
                <Activity className="w-4 h-4" />
                <span className="hidden md:block">Live Monitor</span>
              </button>
            </Link>
            <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all text-zinc-500 opacity-50 cursor-not-allowed">
                <Layers className="w-4 h-4" />
                <span className="hidden md:block">Scanner Rules</span>
            </button>
            <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg hover:bg-white/5 hover:text-white transition-all text-zinc-500 opacity-50 cursor-not-allowed">
                <Settings className="w-4 h-4" />
                <span className="hidden md:block">Settings</span>
            </button>
          </div>
        </div>

        <div className="p-2 md:p-4 border-t border-white/5">
           <Link href="/">
             <button className="w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-2 text-xs font-medium text-zinc-500 hover:text-rose-400 transition-all">
              <LogOut className="w-4 h-4" />
              <span className="hidden md:block">Logout</span>
            </button>
           </Link>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[#0e0e10]">
        
        {/* HEADER (From V5) */}
        <header className="h-14 border-b border-white/5 bg-[#121214] flex items-center justify-between px-8 sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white uppercase tracking-widest hidden md:block">Executive Overview</span>
            <span className="h-4 w-[1px] bg-white/10 hidden md:block"></span>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>System Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-8 h-8 rounded bg-[#18181b] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-cyan-900/20">
                S2
            </div>
          </div>
        </header>

        {/* CONTENT SCROLL */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">

              {/* --- SECTION 1: ACCOUNT & ACTION --- */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Balance Card */}
                  <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden group h-48 md:h-48">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                        <Wallet className="w-32 h-32 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <CreditCard className="w-4 h-4 text-zinc-500" />
                            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Available Credits</span>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white tracking-tight">$95.00</div>
                    </div>
                    <div className="flex gap-3 relative z-10 mt-4">
                        <button className="text-[10px] bg-zinc-800 hover:bg-white hover:text-black text-zinc-300 px-4 py-2 rounded font-bold uppercase transition-all">
                            Top Up
                        </button>
                        <button className="text-[10px] bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white px-4 py-2 rounded font-bold uppercase transition-all">
                            History
                        </button>
                    </div>
                  </div>

                  {/* Subscription Card */}
                  <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden h-48 group">
                    <div>
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Plan Status</span>
                            </div>
                            <span className="text-[10px] text-zinc-500">Expires in 24d</span>
                        </div>
                        <div className="text-2xl font-bold text-white mt-2">PRO TRADER</div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-4">
                            <div className="w-[75%] h-full bg-emerald-500"></div>
                        </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-2">
                        Next billing date: <span className="text-white">Feb 24, 2026</span>
                    </div>
                  </div>

                  {/* ACTION Card */}
                  <Link href="/dashboard" className="h-48 group">
                    <div className="h-full bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-500/20 transition-all border border-cyan-400/20 cursor-pointer">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                <MonitorPlay className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-1">Launch Terminal</h3>
                            <p className="text-[10px] text-cyan-100 uppercase tracking-wide opacity-80 group-hover:opacity-100 flex items-center justify-center gap-1">
                                Enter Live Monitor <ArrowRight className="w-3 h-3" />
                            </p>
                        </div>
                    </div>
                  </Link>
              </div>

              {/* --- SECTION 2: SIGNAL ENGINES (Metrics) --- */}
              <div>
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-500" /> Active Signal Engines
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    
                    {/* PUMP */}
                    <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors"><TrendingUp className="w-6 h-6" /></div>
                            <span className="text-[10px] font-bold bg-emerald-950 text-emerald-400 px-2 py-1 rounded border border-emerald-900">ACTIVE</span>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-2">28</div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Pump Signals</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500"><span>Volume Activity</span><span className="text-emerald-400">High</span></div>
                            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-emerald-500"></div></div>
                        </div>
                    </div>

                    {/* DUMP */}
                    <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-rose-500/30 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400 group-hover:bg-rose-500 group-hover:text-black transition-colors"><ArrowDownRight className="w-6 h-6" /></div>
                            <span className="text-[10px] font-bold bg-rose-950 text-rose-400 px-2 py-1 rounded border border-rose-900">ACTIVE</span>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-2">14</div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Dump Signals</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500"><span>Sell Pressure</span><span className="text-rose-400">Moderate</span></div>
                            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="w-[45%] h-full bg-rose-500"></div></div>
                        </div>
                    </div>

                    {/* ORANGE */}
                    <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-orange-500/30 transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400 group-hover:bg-orange-500 group-hover:text-black transition-colors"><AlertTriangle className="w-6 h-6" /></div>
                            <span className="text-[10px] font-bold bg-orange-950 text-orange-400 px-2 py-1 rounded border border-orange-900">CAUTION</span>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-2">05</div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Orange Signals</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500"><span>Anomaly Detect</span><span className="text-orange-400">Low</span></div>
                            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="w-[20%] h-full bg-orange-500"></div></div>
                        </div>
                    </div>

                    {/* PHANTOM */}
                    <div className="bg-[#121214] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-yellow-500/30 transition-all shadow-[0_0_0_1px_rgba(234,179,8,0.05)]">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-colors"><Zap className="w-6 h-6" /></div>
                            <span className="text-[10px] font-bold bg-yellow-950 text-yellow-400 px-2 py-1 rounded border border-yellow-900 animate-pulse">AI LIVE</span>
                        </div>
                        <div className="text-4xl font-mono font-bold text-white mb-2">02</div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Phantom Signals</div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase text-zinc-500"><span>AI Confidence</span><span className="text-yellow-400">98%</span></div>
                            <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-yellow-500"></div></div>
                        </div>
                    </div>

                  </div>
              </div>

              {/* --- SECTION 3: STRATEGIC CONTEXT (Calendar) --- */}
              <div className="bg-[#121214] border border-white/5 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-zinc-400" /> Event Calendar
                    </h3>
                    <div className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
                        Server Time: 14:25 UTC
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { t: '14:30', name: 'US CPI Data', imp: 'High', status: 'In 5m' },
                        { t: '16:00', name: 'Fed Speech', imp: 'Medium', status: 'In 1h 35m' },
                        { t: '18:00', name: 'FOMC Minutes', imp: 'High', status: 'In 3h 35m' },
                        { t: '22:30', name: 'Asia Market Open', imp: 'Low', status: 'In 8h' },
                    ].map((e, i) => (
                        <div key={i} className="bg-[#161619] border border-white/5 p-4 rounded-lg flex flex-col justify-between hover:border-white/10 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`text-[9px] px-1.5 py-0.5 rounded border uppercase font-bold ${
                                    e.imp === 'High' ? 'text-rose-400 border-rose-500/20 bg-rose-500/10' : 
                                    e.imp === 'Medium' ? 'text-orange-400 border-orange-500/20 bg-orange-500/10' : 
                                    'text-zinc-500 border-zinc-700 bg-zinc-800'
                                }`}>{e.imp} Impact</span>
                                <span className="text-[10px] text-zinc-500 font-mono">{e.t} UTC</span>
                            </div>
                            <div>
                                <div className="text-sm font-bold text-white mb-1">{e.name}</div>
                                <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {e.status}
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
              </div>

          </div>
        </div>
      </main>
    </div>
  );
}