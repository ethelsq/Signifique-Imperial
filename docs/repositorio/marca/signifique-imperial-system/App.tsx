
import React, { useState } from 'react';
import { INCAS_PILLARS, RITUAL_CYCLES } from './constants';
import { PillarCard } from './components/PillarCard';
import { performBrandArcheology } from './services/geminiService';
import { BrandArcheologyResult } from './types';
import { 
  Crown, 
  Gem, 
  ScrollText, 
  ChevronRight, 
  ShieldAlert,
  Loader2,
  Trophy,
  History,
  TrendingUp,
  Cpu,
  Zap,
  Star,
  MessageSquareQuote
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'archeology' | 'ritual'>('strategy');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<BrandArcheologyResult | null>(null);
  
  const [formData, setFormData] = useState({
    brandName: '',
    niche: '',
    values: ''
  });

  const handleArcheology = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await performBrandArcheology(formData.brandName, formData.niche, formData.values);
      setAnalysis(result);
    } catch (error) {
      console.error("Análise falhou", error);
      alert("Erro ao escavar o DNA imperial. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#0a0a0a] selection:bg-[#bf953f] selection:text-black">
      {/* Sidebar Navigation */}
      <nav className="w-full lg:w-64 obsidian-panel border-r border-gold-900/20 p-6 flex flex-col gap-8 z-50">
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="w-16 h-16 rounded-full border-2 border-[#bf953f] flex items-center justify-center p-2 bg-black shadow-[0_0_15px_rgba(191,149,63,0.2)]">
            <Crown className="text-[#bf953f] w-full h-full" />
          </div>
          <h1 className="font-cinzel text-xl font-bold gold-gradient text-center tracking-tighter">SIGNIFIQUE</h1>
          <p className="text-[9px] tracking-[0.4em] text-gray-500 font-bold uppercase">Sistema Imperial</p>
        </div>

        <div className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('strategy')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${activeTab === 'strategy' ? 'bg-[#bf953f]/20 text-[#bf953f] shadow-[inset_0_0_10px_rgba(191,149,63,0.1)]' : 'hover:bg-gray-800 text-gray-400'}`}
          >
            <ShieldAlert size={18} />
            <span className="text-sm font-semibold">Metodologia INCAS</span>
          </button>
          <button 
            onClick={() => setActiveTab('archeology')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${activeTab === 'archeology' ? 'bg-[#bf953f]/20 text-[#bf953f] shadow-[inset_0_0_10px_rgba(191,149,63,0.1)]' : 'hover:bg-gray-800 text-gray-400'}`}
          >
            <Cpu size={18} />
            <span className="text-sm font-semibold">Arqueologia de IA</span>
          </button>
          <button 
            onClick={() => setActiveTab('ritual')}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${activeTab === 'ritual' ? 'bg-[#bf953f]/20 text-[#bf953f] shadow-[inset_0_0_10px_rgba(191,149,63,0.1)]' : 'hover:bg-gray-800 text-gray-400'}`}
          >
            <History size={18} />
            <span className="text-sm font-semibold">Ritual de Ciclo</span>
          </button>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-800/50">
          <div className="text-[10px] text-gray-600 uppercase mb-2 font-bold tracking-widest">Soberania Digital</div>
          <p className="text-[11px] text-gray-500 italic leading-relaxed">"Onde o Significado se torna Império e a Ancestralidade guia o Futuro."</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-12 overflow-y-auto max-h-screen">
        
        {/* Strategy Tab */}
        {activeTab === 'strategy' && (
          <div className="max-w-6xl mx-auto animate-fadeIn">
            <header className="mb-12">
              <h2 className="font-cinzel text-4xl lg:text-5xl font-bold mb-4 gold-gradient">INCAS 2.0</h2>
              <p className="text-lg text-gray-400 max-w-3xl leading-relaxed font-light">
                O Sistema Imperial Signifique consolida a sabedoria das civilizações solares com a ciência contemporânea de marca. Unimos <span className="text-[#bf953f]">Aaker</span>, <span className="text-[#bf953f]">Byron Sharp</span> e o poder da <span className="text-[#bf953f]">IA Estratégica</span>.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INCAS_PILLARS.map((pillar) => (
                <PillarCard key={pillar.id} pillar={pillar} />
              ))}
              
              <div className="col-span-1 md:col-span-2 obsidian-panel p-10 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group border border-[#bf953f]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#bf953f]/5 to-transparent opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="font-cinzel text-3xl font-bold gold-gradient mb-3">Vídeo Manifesto</h3>
                  <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto italic">"O Cetro do Poder: 60 segundos para estabelecer autoridade visceral e presença imperial no mercado."</p>
                  <button className="px-10 py-4 bg-gradient-to-r from-[#bf953f] to-[#aa771c] text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_5px_20px_rgba(191,149,63,0.3)] flex items-center gap-2">
                    ASSISTIR MANIFESTO <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Archeology Tab */}
        {activeTab === 'archeology' && (
          <div className="max-w-5xl mx-auto animate-fadeIn">
            <header className="mb-12 text-center">
              <Cpu className="w-12 h-12 text-[#bf953f] mx-auto mb-4 opacity-80" />
              <h2 className="font-cinzel text-4xl font-bold mb-4 gold-gradient">Escavação de DNA Imperial</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Acesse a Arqueologia de Marca assistida por IA para decodificar o núcleo de poder do seu negócio.</p>
            </header>

            <form onSubmit={handleArcheology} className="obsidian-panel p-10 rounded-2xl space-y-8 mb-16 border border-[#bf953f]/20 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#bf953f] uppercase tracking-[0.2em]">Identidade Real (Marca)</label>
                  <input 
                    type="text" 
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                    placeholder="Nome da sua Marca"
                    className="w-full bg-black/60 border border-gold-900/20 p-4 rounded-lg focus:outline-none focus:border-[#bf953f] text-gray-200 transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#bf953f] uppercase tracking-[0.2em]">Domínio de Mercado (Nicho)</label>
                  <input 
                    type="text" 
                    required
                    value={formData.niche}
                    onChange={(e) => setFormData({...formData, niche: e.target.value})}
                    placeholder="Ex: Arquitetura de Luxo"
                    className="w-full bg-black/60 border border-gold-900/20 p-4 rounded-lg focus:outline-none focus:border-[#bf953f] text-gray-200 transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#bf953f] uppercase tracking-[0.2em]">Valores Ancestrais & Visão</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.values}
                  onChange={(e) => setFormData({...formData, values: e.target.value})}
                  placeholder="Quais são os pilares morais e a visão de longo prazo da sua marca?"
                  className="w-full bg-black/60 border border-gold-900/20 p-4 rounded-lg focus:outline-none focus:border-[#bf953f] text-gray-200 transition-all placeholder:text-gray-700 resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#aa771c] text-black font-black uppercase tracking-widest rounded-lg hover:shadow-[0_0_30px_rgba(191,149,63,0.5)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Zap size={20} fill="currentColor" />}
                {loading ? "Escavando DNA Imperial..." : "INICIAR ARQUEOLOGIA ESTRATÉGICA"}
              </button>
            </form>

            {analysis && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-slideUp">
                {/* Main Archetype Card */}
                <div className="md:col-span-8 obsidian-panel p-8 rounded-2xl border-l-4 border-[#bf953f]">
                  <div className="flex items-center gap-4 mb-6">
                    <Trophy className="w-10 h-10 text-[#bf953f]" />
                    <div>
                      <h4 className="text-[10px] text-[#bf953f] uppercase font-black tracking-widest">Arquétipo Soberano</h4>
                      <span className="text-3xl font-cinzel gold-gradient font-bold">{analysis.archetype}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-2">Essência da Marca</h5>
                    <p className="text-lg text-gray-200 font-playfair italic">"{analysis.essence}"</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-800">
                    <div>
                      <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-2 flex items-center gap-2">
                        <MessageSquareQuote size={12} className="text-[#bf953f]" /> Tom de Voz
                      </h5>
                      <p className="text-sm text-gray-400 leading-relaxed">{analysis.toneOfVoice}</p>
                    </div>
                    <div>
                      <h5 className="text-[10px] text-gray-500 uppercase font-bold mb-2 flex items-center gap-2">
                        <Star size={12} className="text-[#bf953f]" /> Atributos de Valor
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {analysis.attributes.map((attr, i) => (
                          <span key={i} className="text-[10px] px-2 py-1 bg-[#bf953f]/10 border border-[#bf953f]/30 text-[#bf953f] rounded uppercase font-bold">{attr}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sovereignty Index Card */}
                <div className="md:col-span-4 obsidian-panel p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                  <h4 className="text-[10px] text-[#bf953f] uppercase font-black tracking-widest mb-6">Índice de Soberania</h4>
                  <div className="relative w-32 h-32 mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-800" />
                      <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="4" fill="transparent" 
                        strokeDasharray={364}
                        strokeDashoffset={364 - (364 * analysis.sovereigntyIndex) / 100}
                        className="text-[#bf953f] transition-all duration-1000 ease-out" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-cinzel font-bold text-gray-100">{analysis.sovereigntyIndex}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Potencial de Mercado</p>
                </div>

                {/* Narrative Card */}
                <div className="md:col-span-12 obsidian-panel p-10 rounded-2xl border border-[#bf953f]/20 bg-gradient-to-r from-black to-[#0a0a0a]">
                  <h4 className="text-[10px] text-[#bf953f] uppercase font-black tracking-widest mb-4">Narrativa Assinatura (Storytelling)</h4>
                  <p className="text-2xl text-gray-200 leading-relaxed font-playfair italic">
                    "{analysis.signatureStory}"
                  </p>
                </div>

                {/* Assets Card */}
                <div className="md:col-span-12 obsidian-panel p-8 rounded-2xl">
                  <h4 className="text-[10px] text-[#bf953f] uppercase font-black tracking-widest mb-6">Ativos Distintivos (Disponibilidade Mental)</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {analysis.distinctiveAssets.map((asset, idx) => (
                      <div key={idx} className="bg-white/5 p-6 rounded-xl border border-gray-800/50 flex flex-col gap-3 group hover:border-[#bf953f]/40 transition-all">
                        <TrendingUp size={20} className="text-[#bf953f]" />
                        <span className="text-sm font-semibold text-gray-200 group-hover:text-[#bf953f] transition-colors">{asset}</span>
                        <p className="text-[10px] text-gray-500">Elemento visual ou sensorial de alta lembrança.</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Ritual Tab */}
        {activeTab === 'ritual' && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <header className="mb-12 text-center">
              <History className="w-12 h-12 text-[#bf953f] mx-auto mb-4 opacity-70" />
              <h2 className="font-cinzel text-4xl font-bold mb-4 gold-gradient">Ritual de Ciclos Imperiais</h2>
              <p className="text-gray-400">A marca como um organismo vivo que respira em ciclos de semeadura e colheita.</p>
            </header>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#bf953f] before:via-[#8b0000] before:to-transparent">
              {RITUAL_CYCLES.map((cycle, index) => (
                <div key={cycle.name} className="flex flex-col md:flex-row items-start gap-8 relative group">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-cinzel text-2xl font-bold shrink-0 z-10 transition-all duration-500 ${
                    cycle.status === 'completed' ? 'bg-[#bf953f] text-black shadow-[0_0_20px_rgba(191,149,63,0.4)]' : 
                    cycle.status === 'active' ? 'bg-[#8b0000] text-white animate-pulse shadow-[0_0_20px_rgba(139,0,0,0.6)]' : 
                    'bg-gray-900 text-gray-600 border border-gray-800'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="obsidian-panel p-8 rounded-2xl flex-1 border border-transparent group-hover:border-[#bf953f]/30 transition-all duration-500 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-cinzel text-2xl gold-gradient font-bold">{cycle.name}</h3>
                        <p className="text-[#bf953f] text-[10px] font-black uppercase tracking-widest mt-1">Tradução: {cycle.translation}</p>
                      </div>
                      <span className={`text-[9px] uppercase tracking-[0.2em] font-black px-3 py-1 rounded-full ${
                        cycle.status === 'completed' ? 'bg-green-500/10 text-green-500 border border-green-500/30' :
                        cycle.status === 'active' ? 'bg-[#8b0000]/20 text-[#ff4d4d] border border-[#8b0000]/50' :
                        'bg-gray-800/50 text-gray-500 border border-gray-700/50'
                      }`}>
                        {cycle.status === 'completed' ? 'Finalizado' : cycle.status === 'active' ? 'Ritual Ativo' : 'Aguardando'}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed font-light">{cycle.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-black/90 backdrop-blur-xl border border-[#bf953f]/50 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center gap-4 group hover:border-[#bf953f] transition-all">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#bf953f] to-[#aa771c] flex items-center justify-center text-black">
            <ScrollText size={20} />
          </div>
          <div className="text-left pr-4">
            <p className="text-[9px] font-black text-[#bf953f] uppercase tracking-widest leading-none mb-1">Acesso VIP</p>
            <p className="font-cinzel text-sm font-bold text-gray-200">Imperial Deck</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
