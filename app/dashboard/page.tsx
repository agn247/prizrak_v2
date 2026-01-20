'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Ghost, LayoutDashboard, Settings, LogOut, 
  Activity, Layers, Zap, TrendingUp, 
  ArrowDownRight, ChevronDown, ChevronRight, ChevronUp,
  Clock, BarChart2, Hash, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

// --- TRADINGVIEW WIDGET COMPONENT ---
const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current && !container.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "BYBIT:BTCUSDT",
        "interval": "1",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "rgba(14, 14, 16, 1)",
        "gridColor": "rgba(255, 255, 255, 0.05)",
        "hide_top_toolbar": false,
        "hide_legend": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": false,
        "support_host": "https://www.tradingview.com"
      });
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-full w-full" ref={container}>
      <div className="tradingview-widget-container__widget h-full w-full"></div>
    </div>
  );
};

export default function DashboardV14() {
  const [isChartOpen, setIsChartOpen] = useState(true);
  const [isGridOpen, setIsGridOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0e0e10] text-zinc-300 font-sans flex overflow-hidden selection:bg-cyan-500/30">
      
      {/* GLOBAL CSS TO HIDE SCROLLBAR */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* --- SIDEBAR --- */}
      <aside className="w-16 md:w-64 bg-[#121214] border-r border-white/5 flex flex-col justify-between z-30 flex-shrink-0">
        <div>
          <div className="h-14 flex items-center gap-3 px-0 md:px-6 justify-center md:justify-start border-b border-white/5 bg-[#121214]">
            <Link href="/" className="flex items-center gap-3">
                <Ghost className="w-5 h-5 text-cyan-400" />
                <span className="font-bold tracking-widest text-white text-sm hidden md:block">PRIZRAK</span>
            </Link>
          </div>

          <div className="p-2 md:p-4 space-y-1">
            {[
              { icon: <LayoutDashboard className="w-4 h-4" />, label: 'Overview', active: false },
              { icon: <Activity className="w-4 h-4" />, label: 'Live Monitor', active: true },
              { icon: <Layers className="w-4 h-4" />, label: 'Scanner Rules', active: false },
              { icon: <Settings className="w-4 h-4" />, label: 'Settings', active: false },
            ].map((item, i) => (
              <button 
                key={i}
                className={`w-full flex items-center justify-center md:justify-start gap-3 px-2 md:px-4 py-3 text-xs font-medium rounded-lg transition-all ${item.active ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-white/5 hover:text-white'}`}
              >
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

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[#0e0e10]">
        
        {/* HEADER */}
        <header className="h-14 border-b border-white/5 bg-[#121214] flex items-center justify-between px-6 sticky top-0 z-20 flex-shrink-0">
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

        {/* WORKSPACE AREA */}
        <div className="flex-1 overflow-hidden flex flex-col">
          
          {/* 1. REAL TRADINGVIEW CHART */}
          <section className={`flex flex-col bg-[#0e0e10] relative border-b border-white/5 transition-all duration-300 ease-in-out flex-shrink-0 ${isChartOpen ? 'h-[55%]' : 'h-10'}`}>
             
             {/* Header */}
             <div 
               className="h-10 border-b border-white/5 px-4 flex items-center justify-between bg-[#121214] cursor-pointer hover:bg-[#18181b] transition-colors"
               onClick={() => setIsChartOpen(!isChartOpen)}
             >
                <div className="flex items-center gap-2">
                   {isChartOpen ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronRight className="w-4 h-4 text-zinc-500" />}
                   <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Live Chart</span>
                </div>
                <div className="text-[10px] text-zinc-500 flex items-center gap-2">
                   Powered by TradingView
                </div>
             </div>

             {/* Chart Content */}
             <div className={`flex-1 relative overflow-hidden bg-[#0e0e10] ${!isChartOpen && 'hidden'}`}>
                <TradingViewWidget />
             </div>
          </section>

          {/* 2. SIGNAL STREAM */}
          <section className={`flex-1 bg-[#0e0e10] flex flex-col overflow-hidden transition-all duration-300 ${!isGridOpen ? 'flex-none h-10' : ''}`}>
            
             {/* Header */}
             <div 
               className="h-10 border-b border-white/5 px-4 flex items-center justify-between bg-[#121214] cursor-pointer hover:bg-[#18181b] transition-colors flex-shrink-0"
               onClick={() => setIsGridOpen(!isGridOpen)}
             >
                <div className="flex items-center gap-2">
                   {isGridOpen ? <ChevronDown className="w-4 h-4 text-zinc-500" /> : <ChevronUp className="w-4 h-4 text-zinc-500" />}
                   <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Signal Stream</span>
                </div>
                
                {/* COUNTERS */}
                <div className="flex gap-4 text-xs">
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-zinc-400 font-mono">12</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span className="text-zinc-400 font-mono">08</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                      <span className="text-zinc-400 font-mono">02</span>
                   </div>
                </div>
             </div>

             {/* THE HIGH-DENSITY GRID */}
             <div className={`flex-1 overflow-hidden p-3 ${!isGridOpen && 'hidden'}`}>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-full">
                  
                  {/* PUMP COLUMN */}
                  <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                     <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0">
                       <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                         <TrendingUp className="w-3 h-3" /> Pump
                       </span>
                     </div>
                     <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                        {[
                          { spot: 'GMX/USDT', ex: 'BYBIT', price: '13.13', chg: '+3.12 pts', vol: '32 / 420.16', time: '09:00:54', date: '30.07.2025' },
                          { spot: 'SOL/USDT', ex: 'BINANCE', price: '142.50', chg: '+1.24 pts', vol: '18 / 95.4', time: '09:02:10', date: '30.07.2025' },
                          { spot: 'PEPE/USDT', ex: 'OKX', price: '0.0000084', chg: '+0.0000002', vol: '42 / 112.5', time: '09:03:15', date: '30.07.2025' },
                          { spot: 'BONK/USDT', ex: 'BYBIT', price: '0.0000212', chg: '+0.0000015', vol: '15 / 88.2', time: '09:04:00', date: '30.07.2025' },
                          { spot: 'SEI/USDT', ex: 'BINANCE', price: '0.3421', chg: '+0.0152', vol: '22 / 105.0', time: '09:04:45', date: '30.07.2025' }
                        ].map((item, i) => (
                           <div key={i} className="bg-[#18181b] border-l-4 border-emerald-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                              {/* LINE 1: IDENTITY */}
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">{item.ex}</span>
                                 <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold uppercase">PUMP</span>
                              </div>
                              
                              {/* LINE 2: PAIR & PRICE */}
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-base font-bold text-white tracking-wide">{item.spot}</span>
                                 <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span>
                                    <span className="text-lg font-mono font-bold text-emerald-400 leading-none">{item.price}</span>
                                 </div>
                              </div>

                              {/* LINE 3: CHANGE & VOL */}
                              <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Change</span>
                                    <span className="text-sm font-mono font-bold text-white">{item.chg}</span>
                                 </div>
                                 <div className="flex flex-col text-right">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span>
                                    <span className="text-sm font-mono font-bold text-emerald-400">{item.vol}</span>
                                 </div>
                              </div>

                              {/* LINE 4: TIME */}
                              <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3">
                                 <span>{item.date}</span>
                                 <span>{item.time}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* DUMP COLUMN */}
                  <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                     <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0">
                       <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest flex items-center gap-2">
                         <ArrowDownRight className="w-3 h-3" /> Dump
                       </span>
                     </div>
                     <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                        {[
                          { spot: 'BTC/USDT', ex: 'BYBIT', price: '118,321', chg: '-46.5 pts', vol: '12 / 88.1', time: '09:01:20', date: '30.07.2025' },
                          { spot: 'ETH/USDT', ex: 'BINANCE', price: '2,950.12', chg: '-12.4 pts', vol: '8 / 45.2', time: '09:02:40', date: '30.07.2025' },
                          { spot: 'ARB/USDT', ex: 'OKX', price: '1.1240', chg: '-0.0412 pts', vol: '25 / 102.0', time: '09:03:50', date: '30.07.2025' },
                          { spot: 'OP/USDT', ex: 'HTX', price: '1.4520', chg: '-0.0820 pts', vol: '14 / 66.5', time: '09:04:10', date: '30.07.2025' },
                          { spot: 'MATIC/USDT', ex: 'BYBIT', price: '0.5210', chg: '-0.0120 pts', vol: '9 / 32.1', time: '09:05:05', date: '30.07.2025' }
                        ].map((item, i) => (
                           <div key={i} className="bg-[#18181b] border-l-4 border-rose-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]">{item.ex}</span>
                                 <span className="text-[9px] bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 py-0.5 rounded font-bold uppercase">DUMP</span>
                              </div>
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-base font-bold text-white tracking-wide">{item.spot}</span>
                                 <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span>
                                    <span className="text-lg font-mono font-bold text-rose-400 leading-none">{item.price}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Change</span>
                                    <span className="text-sm font-mono font-bold text-white">{item.chg}</span>
                                 </div>
                                 <div className="flex flex-col text-right">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span>
                                    <span className="text-sm font-mono font-bold text-rose-400">{item.vol}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3">
                                 <span>{item.date}</span>
                                 <span>{item.time}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* ORANGE COLUMN */}
                  <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                     <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0">
                       <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest flex items-center gap-2">
                         <Activity className="w-3 h-3" /> Orange
                       </span>
                     </div>
                     <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                        {[
                          { spot: 'WIF/USDT', ex: 'OKX', price: '2.4510', spread: '0.8%', vol: '5 / 12.0', time: '08:55:00', date: '30.07.2025' },
                          { spot: 'JUP/USDT', ex: 'BINANCE', price: '0.9820', spread: '1.2%', vol: '8 / 15.5', time: '09:01:45', date: '30.07.2025' },
                          { spot: 'TIA/USDT', ex: 'BYBIT', price: '6.4500', spread: '0.5%', vol: '4 / 9.2', time: '09:03:20', date: '30.07.2025' },
                          { spot: 'INJ/USDT', ex: 'HTX', price: '24.100', spread: '0.9%', vol: '6 / 14.0', time: '09:04:55', date: '30.07.2025' },
                          { spot: 'RUNE/USDT', ex: 'OKX', price: '4.2100', spread: '1.5%', vol: '3 / 8.5', time: '09:06:10', date: '30.07.2025' }
                        ].map((item, i) => (
                           <div key={i} className="bg-[#18181b] border-l-4 border-orange-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">{item.ex}</span>
                                 <span className="text-[9px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-1.5 py-0.5 rounded font-bold uppercase">ANOMALY</span>
                              </div>
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-base font-bold text-white tracking-wide">{item.spot}</span>
                                 <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Price</span>
                                    <span className="text-lg font-mono font-bold text-orange-400 leading-none">{item.price}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Spread</span>
                                    <span className="text-sm font-mono font-bold text-white">{item.spread}</span>
                                 </div>
                                 <div className="flex flex-col text-right">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Vol / Min</span>
                                    <span className="text-sm font-mono font-bold text-orange-400">{item.vol}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3">
                                 <span>{item.date}</span>
                                 <span>{item.time}</span>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* PHANTOM COLUMN */}
                  <div className="flex flex-col h-full bg-[#121214] border border-white/5 rounded-lg overflow-hidden">
                     <div className="h-8 bg-[#161619] flex items-center justify-between px-3 border-b border-white/5 shrink-0">
                       <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest flex items-center gap-2">
                         <Zap className="w-3 h-3" /> Phantom
                       </span>
                     </div>
                     <div className="flex-1 overflow-y-auto p-2 space-y-2 no-scrollbar">
                        {[
                          { spot: 'BTC/USDT', ex: 'BINANCE', price: '118,400', conf: '98%', reason: 'Iceberg', time: '09:05:00', date: '30.07.2025' },
                          { spot: 'SUI/USDT', ex: 'OKX', price: '1.5420', conf: '85%', reason: 'Hidden Buy', time: '09:02:15', date: '30.07.2025' },
                          { spot: 'LINK/USDT', ex: 'BYBIT', price: '14.200', conf: '92%', reason: 'Dark Pool', time: '09:06:40', date: '30.07.2025' },
                          { spot: 'AVAX/USDT', ex: 'HTX', price: '28.500', conf: '78%', reason: 'Whale Wall', time: '09:08:10', date: '30.07.2025' },
                          { spot: 'NEAR/USDT', ex: 'BINANCE', price: '5.100', conf: '88%', reason: 'Accumulation', time: '09:10:00', date: '30.07.2025' }
                        ].map((item, i) => (
                           <div key={i} className="bg-[#18181b] border-l-4 border-yellow-500 pl-3 pr-3 py-3 rounded hover:bg-white/[0.02] cursor-pointer group transition-all">
                              <div className="flex justify-between items-center mb-2">
                                 <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">{item.ex}</span>
                                 <span className="text-[9px] bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 py-0.5 rounded font-bold uppercase">AI WALL</span>
                              </div>
                              <div className="flex justify-between items-end mb-2">
                                 <span className="text-base font-bold text-white tracking-wide">{item.spot}</span>
                                 <div className="flex flex-col items-end">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold leading-none mb-1">Detected</span>
                                    <span className="text-lg font-mono font-bold text-yellow-400 leading-none">{item.price}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center mb-3 bg-zinc-900/50 p-2 rounded border border-white/5">
                                 <div className="flex flex-col">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Confidence</span>
                                    <span className="text-sm font-mono font-bold text-white">{item.conf}</span>
                                 </div>
                                 <div className="flex flex-col text-right">
                                    <span className="text-[9px] text-zinc-500 uppercase font-bold">Reason</span>
                                    <span className="text-sm font-mono font-bold text-yellow-400">{item.reason}</span>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center text-xs font-mono text-zinc-300 border-t border-white/5 pt-3">
                                 <span>{item.date}</span>
                                 <span>{item.time}</span>
                              </div>
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
  );
}