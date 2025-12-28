'use client'

import { Icon } from '@/components/ui/Icon'

export default function HelpPage() {
    const faqs = [
        { q: 'I miei dati sono al sicuro?', a: 'Sì, Progetto Bussola opera esclusivamente sul tuo dispositivo. Tutti i progressi sono salvati nel LocalStorage del browser. Nessun dato viene mai inviato a server esterni.' },
        { q: 'Come posso trasferire i progressi?', a: 'Nella pagina Profilo, usa la funzione "Backup JSON". Scaricherai un file che potrai importare su un altro browser o dispositivo per riprendere da dove avevi lasciato.' },
        { q: 'Funziona senza internet?', a: 'Assolutamente. Come PWA (Personal Web App), Progetto Bussola scarica i contenuti essenziali alla prima visita, permettendoti di studiare anche in modalità aereo.' },
        { q: 'Cosa significa "Guardian Digitale"?', a: 'È il grado massimo di consapevolezza. Indica che hai completato la maggior parte dei moduli e dei giochi, dimostrando una conoscenza profonda della sicurezza online.' }
    ]

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-12 space-y-16 pb-32">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase italic leading-none">Centro <span className="blue-glow text-white">Supporto</span></h1>

            {/* Emergency Hotline Banner */}
            <section className="bg-red-600/10 border-2 border-red-500/20 p-10 rounded-[3rem] shadow-glass relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon name="sos" size={180} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-black italic flex items-center gap-4 tracking-tighter uppercase whitespace-pre underline decoration-red-500/30 underline-offset-8">
                            <Icon name="sos" size={32} className="text-red-500 animate-pulse" /> SICUREZZA IMMEDIATA
                        </h2>
                        <p className="font-medium text-blue-100/60 max-w-2xl text-lg leading-relaxed italic">
                            Se ti senti in pericolo, vittima di ricatto o stalking, non aver paura di chiedere aiuto. Esistono professionisti pronti ad ascoltarti.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-900/40 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 group-hover:border-red-500/30 transition-all">
                            <span className="text-[10px] font-black text-blue-400/40 uppercase tracking-[0.2em] block mb-2">Polizia di Stato</span>
                            <a href="https://www.commissariatodips.it" target="_blank" className="text-xl font-black text-white flex items-center gap-2 hover:text-red-400 transition">
                                Commissariato Online <Icon name="chevron" size={16} />
                            </a>
                        </div>
                        <div className="bg-blue-900/40 backdrop-blur-xl p-6 rounded-[2rem] border border-white/5 group-hover:border-red-500/30 transition-all">
                            <span className="text-[10px] font-black text-blue-400/40 uppercase tracking-[0.2em] block mb-2">Supporto Minori</span>
                            <a href="tel:19696" className="text-xl font-black text-white flex items-center gap-2 hover:text-red-400 transition">
                                Chiama 1.96.96 <Icon name="chevron" size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="space-y-10">
                <h2 className="text-2xl font-black italic flex items-center gap-4 tracking-tighter uppercase whitespace-pre italic">
                    <Icon name="help" size={24} className="text-cyan-400" /> FAQ <span className="text-cyan-400/30">SICUREZZA</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-blue-900/20 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/5 hover:border-cyan-400/20 transition-all duration-300">
                            <h3 className="font-black text-lg mb-3 flex items-center gap-3 tracking-tight italic">
                                <span className="text-cyan-400 font-mono">?</span> {f.q}
                            </h3>
                            <p className="text-blue-200/40 font-medium leading-relaxed italic text-sm">
                                {f.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Credits / Footer */}
            <footer className="pt-20 text-center space-y-4 opacity-20 hover:opacity-100 transition-opacity">
                <div className="text-[10px] font-black tracking-[0.5em] uppercase text-cyan-400">Progetto Bussola v3.0</div>
                <div className="text-[8px] font-mono text-blue-300">Gen Z Edition • Local First Infrastructure • 2025</div>
            </footer>
        </div>
    )
}
