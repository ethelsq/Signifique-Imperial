
import React from 'react';
import { Pillar } from '../types';

interface PillarCardProps {
  pillar: Pillar;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
  return (
    <div className="obsidian-panel p-8 rounded-2xl border-l-4 hover:scale-[1.03] transition-all duration-500 cursor-pointer group shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-[#bf953f]/5"
         style={{ borderLeftColor: pillar.color }}>
      <div className="flex items-center justify-between mb-6">
        <span className="text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">{pillar.icon}</span>
        <span className="font-cinzel text-3xl font-bold text-gray-800/40 group-hover:text-gold-500/40 transition-colors">
          {pillar.id}
        </span>
      </div>
      <h3 className="font-cinzel text-2xl font-bold mb-3 gold-gradient tracking-tight">
        {pillar.title}
      </h3>
      <p className="text-sm text-gray-400 font-light mb-6 leading-relaxed">
        {pillar.concept}
      </p>
      <div className="pt-6 border-t border-gray-800/50">
        <p className="text-[10px] text-[#bf953f] uppercase tracking-[0.2em] font-black mb-2 opacity-70">Integração Estratégica</p>
        <p className="text-[13px] text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">{pillar.integration}</p>
      </div>
    </div>
  );
};
