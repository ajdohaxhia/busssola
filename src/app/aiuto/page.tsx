'use client'

import { ShieldAlert, Phone, HelpCircle, ExternalLink, Info } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function HelpPage() {
    const faqs = [
        { q: 'I miei dati sono al sicuro?', a: 'Sì, Busssola opera esclusivamente sul tuo dispositivo. Tutti i progressi o le impostazioni sono salvati localmente. Nessun dato personale viene inviato a server esterni.' },
        { q: 'Funziona senza internet?', a: 'Sì. Una volta caricata la prima volta, l\'applicazione memorizza i contenuti essenziali, permettendoti di consultare le guide di emergenza anche se non hai connessione o sei in modalità aereo.' }
    ]
    
    const emergencyContacts = [
        { name: 'Polizia di Stato', type: 'Sito Web Ufficiale', value: 'Commissariato P.S. Online', link: 'https://www.commissariatodips.it' },
        { name: 'Emergenza Nazionale', type: 'Numero Unico Europeo', value: '112', link: 'tel:112' },
        { name: 'Emergenza Infanzia', type: 'Numero Gratuito', value: '114', link: 'tel:114' },
        { name: 'Telefono Azzurro', type: 'Supporto a bambini e adolescenti', value: '1.96.96', link: 'tel:19696' },
        { name: 'Violenza e Stalking', type: 'Numero gratuito attivo 24/24', value: '1522', link: 'tel:1522', colSpan: true }
    ]

    return (
        <Container size="md" className="py-12 md:py-24 space-y-16">
            <header className="space-y-4 text-center pb-8 border-b border-border">
                <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground leading-tight">
                    Supporto ed Emergenza
                </h1>
                <p className="text-lg text-secondary max-w-2xl mx-auto">
                    Trova risposte alle domande frequenti o contatta immediatamente i professionisti giusti se ti trovi in una situazione di pericolo reale.
                </p>
            </header>

            {/* Emergency Hotline Banner */}
            <section className="bg-[#fef2f2] border border-sos-border p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <ShieldAlert size={200} className="text-sos" />
                </div>
                
                <div className="relative z-10 flex flex-col gap-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl md:text-3xl font-display font-semibold flex items-center gap-3 tracking-tight text-foreground">
                            <ShieldAlert size={32} className="text-sos" /> Sicurezza Immediata
                        </h2>
                        <p className="font-medium text-secondary max-w-3xl text-lg leading-relaxed">
                            Se ti senti in pericolo, sei vittima di minacce, ricatto o stalking, non avere paura e non sentirti in colpa. Esistono professionisti addestrati pronti ad ascoltarti e aiutarti subito, in modo confidenziale.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {emergencyContacts.map((contact, idx) => (
                            <a 
                                key={idx}
                                href={contact.link} 
                                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                                className={`bg-white p-6 rounded-2xl border border-[#fca5a5]/50 hover:border-sos hover:shadow-md transition-all group flex flex-col justify-center ${contact.colSpan ? 'md:col-span-2' : ''}`}
                            >
                                <span className="text-xs font-semibold text-sos uppercase tracking-wider block mb-1">{contact.type}</span>
                                <span className="text-sm text-secondary font-medium mb-2">{contact.name}</span>
                                <div className="text-2xl font-bold text-foreground flex items-center justify-between group-hover:text-sos transition-colors">
                                    {contact.value}
                                    {contact.link.startsWith('http') ? <ExternalLink size={20} className="text-sos opacity-50 group-hover:opacity-100" /> : <Phone size={20} className="text-sos opacity-50 group-hover:opacity-100" />}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Grid */}
            <section className="space-y-8">
                <h2 className="text-2xl font-display font-semibold flex items-center gap-3 tracking-tight text-foreground">
                    <HelpCircle size={24} className="text-primary" /> Domande Frequenti
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="bg-surface p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 shadow-sm">
                            <h3 className="font-semibold text-lg mb-3 flex items-start gap-3 tracking-tight text-foreground">
                                <span className="text-primary font-bold bg-primary/10 w-6 h-6 rounded flex items-center justify-center shrink-0 text-sm mt-0.5">?</span> 
                                {f.q}
                            </h3>
                            <p className="text-secondary leading-relaxed pl-9">
                                {f.a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}
