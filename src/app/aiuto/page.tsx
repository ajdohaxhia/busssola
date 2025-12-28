'use client'

import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'

export default function HelpPage() {
    const faqs = [
        { q: 'I miei dati sono al sicuro?', a: 'Sì, Progetto Bussola non ha server. Tutti i tuoi progressi sono salvati localmente nel tuo browser tramite LocalStorage. Nessuno può vederli tranne te sul tuo dispositivo.' },
        { q: 'Cosa succede se cambio browser?', a: 'I progressi sono legati al browser. Se cambi dispositivo o elimini i dati del browser, perderai i progressi. Usa la funzione "Esporta Backup" nel Profilo per salvare i tuoi dati esternamente.' },
        { q: 'Posso usare l\'app offline?', a: 'Sì! Essendo una PWA (Personal Web App), una volta caricata la prima volta, la maggior parte delle funzioni e delle lezioni funzionerà anche senza connessione internet.' },
        { q: 'L\'app è gratuita?', a: 'Certamente. Progetto Bussola è un progetto educativo gratuito e open source dedicato alla sicurezza dei ragazzi online.' }
    ]

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-12 pb-32">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase whitespace-pre-line">Centro <span className="text-neon-pink">Emergenza</span> & Supporto</h1>

            {/* Emergency Section */}
            <section className="bg-neon-pink/10 border-2 border-neon-pink/30 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Icon name="sos" size={150} />
                </div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-2xl font-black italic flex items-center gap-3">
                        <Icon name="sos" className="text-neon-pink" /> HAI BISOGNO DI AIUTO ORA?
                    </h2>
                    <p className="font-medium text-gray-300 max-w-xl">
                        Se sei vittima di ricatto, bullismo o ti trovi in una situazione di pericolo online, non aspettare. Contatta subito le autorità o i servizi di supporto.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-dark-900/60 p-4 rounded-2xl border border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Polizia Postale</span>
                            <a href="https://www.commissariatodips.it" target="_blank" className="font-black text-neon-pink flex items-center gap-2 hover:underline">
                                Segnala Online <Icon name="chevron" size={14} />
                            </a>
                        </div>
                        <div className="bg-dark-900/60 p-4 rounded-2xl border border-white/5">
                            <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Telefono Azzurro</span>
                            <a href="tel:19696" className="font-black text-neon-pink flex items-center gap-2 hover:underline">
                                Chiama 1.96.96 <Icon name="chevron" size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-8">
                <h2 className="text-2xl font-black italic flex items-center gap-3">
                    <Icon name="help" className="text-neon-yellow" /> DOMANDE FREQUENTI
                </h2>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-dark-800 p-6 rounded-3xl border border-white/5 hover:border-white/10 transition">
                            <h3 className="font-black text-lg mb-2 flex items-center gap-3">
                                <span className="text-neon-yellow">Q.</span> {f.q}
                            </h3>
                            <p className="text-gray-400 font-medium leading-relaxed">
                                {f.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Credits */}
            <footer className="pt-12 text-center space-y-4 opacity-50">
                <div className="text-[10px] font-black tracking-widest uppercase">Progetto Bussola v2.0 • 2025</div>
                <div className="text-[8px] font-mono">Realizzato per la sicurezza digitale consapevole degli adolescenti.</div>
            </footer>
        </div>
    )
}
