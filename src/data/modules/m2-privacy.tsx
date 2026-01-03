import { ModuleContent } from "@/types/content";
import React from 'react';

export const m2: ModuleContent = {
    id: 'm2-privacy',
    title: 'Privacy Tecnica Avanzata',
    lessons: [
        {
            id: 'l1-dns',
            title: 'DNS Cifrato & Tracking',
            content: (
                <>
                    <p className="mb-4">
                        Ogni volta che digiti un sito web, il tuo computer chiede a un server "Dov'è tiktok.com?".
                        Questo è il <strong>DNS</strong>. Di solito, il tuo provider internet (ISP) vede TUTTO quello che chiedi.
                    </p>
                    <div className="bg-dark-800 p-4 rounded-lg border border-white/10 mb-6">
                        <h4 className="font-bold text-neon-mint mb-2">La Soluzione: DNS Cifrato</h4>
                        <p className="text-sm opacity-80 mb-2">Cambia i tuoi DNS con servizi che non tracciano e bloccano minacce.</p>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li><strong>Quad9 (9.9.9.9):</strong> Blocca malware noti.</li>
                            <li><strong>NextDNS:</strong> Ti permette di bloccare tracker e social media a livello di rete.</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            id: 'l2-vpn',
            title: 'Quando serve una VPN?',
            content: (
                <>
                    <p className="mb-4">Gli YouTuber mentono. Non ti serve una VPN "sempre". Ti serve quando:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li>Usi un <strong>WiFi Pubblico</strong> (bar, aeroporto).</li>
                        <li>Vuoi nascondere il tuo indirizzo IP ai siti web.</li>
                        <li>Vuoi aggirare la censura scolastica o governativa.</li>
                    </ul>
                    <p className="text-neon-pink font-bold">EVITA le VPN Gratis. Se è gratis, il prodotto sono i tuoi dati.</p>
                </>
            )
        },
        {
            id: 'l3-passwords',
            title: 'Password Manager',
            content: (
                <>
                    <p className="mb-4">Il tuo cervello non è fatto per ricordare 50 password complesse. Usa un <strong>Password Manager</strong>.</p>
                    <p className="mb-4">Bitwarden è gratuito e open source. Genera password come: <code className="bg-black p-1 rounded">Xy9#mP2$Lk@vN1!q</code></p>
                    <p>Tu devi ricordare solo UNA master password. Il resto lo fa lui.</p>
                </>
            )
        },
        {
            id: 'l4-cookies',
            title: 'Cookies e LocalStorage',
            content: (
                <>
                    <p className="mb-4">I "biscotti" digitali non sono dolci. Sono piccoli file di testo che i siti salvano sul tuo PC.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>First-Party:</strong> Utili. Ti ricordano che sei loggato.</li>
                        <li><strong>Third-Party:</strong> Il Male. Sono messi da Facebook/Google su ALTRI siti per seguirti ovunque.</li>
                    </ul>
                    <p className="mt-4">Usa browser come <strong>Brave</strong> o <strong>Firefox</strong> (con uBlock Origin) per bloccarli automaticamente.</p>
                </>
            )
        },
        {
            id: 'l5-fingerprinting',
            title: 'Browser Fingerprinting',
            content: (
                <>
                    <p className="mb-4">Anche senza cookie, i siti sanno chi sei. Come?</p>
                    <p className="mb-4">Leggono la tua risoluzione schermo, i font installati, la versione della scheda grafica e la batteria residua. Questa combinazione è unica come un'impronta digitale.</p>
                    <p className="p-3 bg-neon-yellow/10 border border-neon-yellow rounded">Controlla quanto sei unico su <em>amiunique.org</em> o <em>coveryourtracks.eff.org</em>.</p>
                </>
            )
        }
    ],

};
