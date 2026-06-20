import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Info, Users, Sparkles, ChevronRight, Image as ImageIcon } from "lucide-react";
import { characters, worldview } from "../data";
import { cn } from "../utils";

// --- Components ---

const NavBar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            className="flex items-center justify-center p-2 -ml-2 rounded-full hover:bg-primary-50 transition-colors"
            onClick={() => setActiveTab('hero')}
            aria-label="메인 화면으로"
          >
            <Sparkles className="w-6 h-6 text-primary-500" />
          </button>
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab('worldview')}
              className={cn("text-sm font-medium transition-colors hover:text-primary-600", activeTab === 'worldview' ? "text-primary-600" : "text-gray-500")}
            >
              세계관
            </button>
            <button 
              onClick={() => setActiveTab('characters')}
              className={cn("text-sm font-medium transition-colors hover:text-primary-600", activeTab === 'characters' ? "text-primary-600" : "text-gray-500")}
            >
              캐릭터
            </button>
            <a 
              href="https://share.crack.wrtn.ai/zn3y8e1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 shadow-sm shadow-primary-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>채팅하기</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function Layout() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          {activeTab === 'hero' && <HeroView key="hero" setActiveTab={setActiveTab} />}
          {activeTab === 'worldview' && <WorldviewView key="worldview" />}
          {activeTab === 'characters' && <CharactersView key="characters" />}
        </AnimatePresence>
      </main>
      
      <footer className="py-8 text-center text-gray-400 text-sm mt-12 border-t border-primary-50">
        <p>© 2026 그 마법소녀는 구원을 바라고 있다. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- Views ---

function HeroView({ setActiveTab }: { setActiveTab: (t: string) => void }) {
  // Generate random butterflies for background
  const [butterflies, setButterflies] = useState<{ id: number; left: number; top: number; delay: number; duration: number; scale: number }[]>([]);

  useEffect(() => {
    const newButterflies = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      scale: 0.5 + Math.random() * 0.8,
    }));
    setButterflies(newButterflies);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center justify-center min-h-[70vh] text-center pt-20 overflow-hidden"
    >
      {/* Background Butterflies */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {butterflies.map(b => (
          <motion.div
            key={b.id}
            className="absolute text-primary-400"
            style={{ left: `${b.left}%`, top: `${b.top}%`, scale: b.scale }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: "easeInOut"
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 12 10 12 12C12 14 12 22 12 22M12 12C12 12 24 0 24 10C24 15 12 12 12 12M12 12C12 12 0 0 0 10C0 15 12 12 12 12"/>
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-gray-900 leading-tight mb-10 tracking-tight">
          마법소녀<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 block mt-2">
            공생론
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-5 mt-4">
          <a 
            href="https://share.crack.wrtn.ai/zn3y8e1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-primary-500 hover:bg-primary-600 transition-colors text-white rounded-full font-medium shadow-xl shadow-primary-200/50 flex items-center justify-center gap-2 text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>채팅 시작하기</span>
          </a>
          <button 
            onClick={() => setActiveTab('worldview')}
            className="px-8 py-3.5 bg-white text-gray-700 hover:text-primary-600 border border-gray-200 rounded-full font-medium transition-colors flex items-center justify-center gap-2 hover:border-primary-200 hover:bg-primary-50/50 text-lg"
          >
            <Info className="w-5 h-5" />
            <span>세계관 알아보기</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function WorldviewView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">{worldview.title}</h2>
        <div className="text-gray-600 max-w-3xl mx-auto leading-loose whitespace-pre-wrap text-left break-keep">{worldview.description}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {worldview.elements.map((el, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={el.title} 
            className="bg-white p-6 rounded-2xl border border-primary-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-bold text-primary-900 mb-2 font-serif">{el.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{el.content}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 border border-primary-100 shadow-sm">
        <h3 className="text-2xl font-serif font-bold text-center mb-8 text-gray-900">마법의 종류</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {worldview.magic.map((m, i) => (
            <div key={m.title} className="flex gap-4">
              <div className={cn("w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0", i === 0 ? "bg-blue-50 text-blue-500" : "bg-purple-50 text-purple-600")}>
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">{m.title}</h4>
                <p className="text-sm text-gray-600">{m.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CharactersView() {
  const [faction, setFaction] = useState<'Blanc' | 'Noir' | 'Gris'>('Blanc');
  const filtered = characters.filter(c => c.faction === faction);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">등장인물</h2>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-white rounded-full p-1 border border-primary-100 shadow-sm">
          {(['Blanc', 'Noir', 'Gris'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFaction(f)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                faction === f 
                  ? "bg-primary-500 text-white shadow-md" 
                  : "text-gray-500 hover:text-primary-600"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        key={faction}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map(c => (
          <div key={c.id} className="bg-white rounded-2xl overflow-hidden border border-primary-50 shadow-sm hover:shadow-md transition-shadow group relative flex flex-col">
            <div className="h-[280px] bg-primary-50/20 flex flex-col items-center justify-center border-b border-primary-50/80 relative overflow-hidden group-hover:bg-primary-100/10 transition-colors">
              {c.imageUrl ? (
                <img src={c.imageUrl} alt={c.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <>
                  <ImageIcon className="w-8 h-8 text-primary-200 mb-2" />
                  <span className="text-primary-300 font-medium text-xs tracking-widest">PHOTO AREA</span>
                </>
              )}
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{c.name}</h3>
                  <div className="text-xs text-primary-500 font-medium mt-1">{c.job} {c.imei !== '없음' && `• ${c.imei}`}</div>
                </div>
                <div className="bg-gray-50 px-2 py-1 rounded text-xs text-gray-500 font-medium">
                  {c.age}{typeof c.age === 'number' ? '세 ' : ' '}{c.gender}
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex text-sm">
                  <span className="w-12 text-gray-400">종족</span>
                  <span className="text-gray-700">{c.race}</span>
                </div>
                {c.appearance && (
                  <div className="flex text-sm">
                    <span className="w-12 text-gray-400">외형</span>
                    <span className="text-gray-700 leading-relaxed flex-1">{c.appearance}</span>
                  </div>
                )}
                {c.traits && (
                  <div className="flex text-sm mt-2">
                    <span className="w-12 text-gray-300">특징</span>
                    <span className="text-gray-600 text-xs leading-relaxed flex-1 italic">{c.traits}</span>
                  </div>
                )}
              </div>
              
              <blockquote className="border-l-2 border-primary-200 pl-4 py-1 mt-auto pb-4">
                <p className="text-sm text-gray-600 italic font-serif">"{c.quote}"</p>
              </blockquote>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
