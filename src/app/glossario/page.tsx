
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Book, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TERMS = [
    { term: '2FA (Two-Factor Authentication)', def: 'L\'autenticazione a due fattori aggiunge un secondo livello di sicurezza oltre alla password (es. un codice via SMS o app).', example: 'Quando accedi a Instagram, ti viene chiesto un codice inviato sul telefono.', action: 'Attivala su ogni account importante.', module: 'modulo-02-account-security' },
    { term: 'Backup Codes', def: 'Codici monouso da stampare e conservare per accedere all\'account se perdi il telefono o non ricevi l\'SMS.', example: 'Google e Meta forniscono una lista di 8-10 codici da salvare.', action: 'Salvali in un luogo sicuro (non sul telefono).', module: 'modulo-02-account-security' },
    { term: 'Phishing', def: 'Truffa via email o messaggi che cerca di rubare password o dati bancari fingendosi un servizio affidabile.', example: 'Una finta mail della banca che ti chiede di cliccare su un link per "sbloccare il conto".', action: 'Non cliccare mai. Verifica l\'indirizzo del mittente.', module: 'modulo-03-truffe-phishing' },
    { term: 'Smishing / Vishing', def: 'Phishing via SMS (Smishing) o via chiamata vocale (Vishing).', example: 'Un SMS che dice "Pacco in attesa, clicca qui" o una chiamata da un finto operatore bancario.', action: 'Non fornire mai codici al telefono.', module: 'modulo-03-truffe-phishing' },
    { term: 'Malware / Spyware', def: 'Software dannoso progettato per danneggiare il sistema o spiare le tue attività e rubare dati.', example: 'Un\'app torcia che in realtà copia i tuoi contatti e messaggi.', action: 'Installa app solo dagli store ufficiali.', module: 'modulo-07-privacy-smartphone' },
    { term: 'SIM Swap', def: 'Attacco in cui un criminale riesce a trasferire il tuo numero di telefono su una sua SIM per ricevere i tuoi codici 2FA.', example: 'Il tuo telefono perde improvvisamente il segnale e non riesci più a chiamare.', action: 'Metti un PIN alla tua SIM fisica.', module: 'modulo-07-privacy-smartphone' },
    { term: 'Data Breach', def: 'Violazione di sicurezza in cui dati riservati (nomi, mail, password) vengono rubati da un database aziendale.', example: 'Il database di un sito di ecommerce viene hackerato e messo in vendita.', action: 'Controlla su "Have I Been Pwned" se sei coinvolto.', module: 'modulo-02-account-security' },
    { term: 'Doxxing', def: 'Ricerca e pubblicazione online di dati privati (indirizzo, telefono, luogo di lavoro) con l\'intento di intimidire.', example: 'Qualcuno pubblica il tuo indirizzo di casa dopo una discussione online.', action: 'Metti i profili in privato e segnala alla polizia.', module: 'modulo-06-stalking-doxxing' },
    { term: 'Sextortion', def: 'Ricatto a sfondo sessuale in cui si minaccia di diffondere immagini intime se non si paga o non si invia altro materiale.', example: 'Un profilo "catfish" ti ricatta dopo aver registrato una videochiamata intima.', action: 'Non pagare mai. Salva le prove.', module: 'modulo-04-sextortion-ricatti' },
    { term: 'Grooming', def: 'Tecnica di "adescamento" in cui un adulto instaura una relazione di fiducia con un minore per scopi sessuali.', example: 'Un finto coetaneo su un gioco online che chiede segreti e incontri.', action: 'Interrompi subito e parlane con un adulto.', module: 'modulo-05-grooming-minori' },
    { term: 'Passkey', def: 'Nuova tecnologia che sostituisce la password con l\'impronta digitale o il volto (biometria), molto più sicura.', example: 'Accedere a Google usando solo lo sblocco del telefono.', action: 'Inizia a usarle dove supportate.', module: 'modulo-02-account-security' },
    { term: 'Password Manager', def: 'App che crea e conserva password complesse e diverse per ogni sito, così devi ricordarne solo una.', example: 'Bitwarden, 1Password o il Portachiavi iCloud.', action: 'Usane uno. Non riutilizzare mai le password.', module: 'modulo-02-account-security' },
    { term: 'LocalStorage', def: 'Spazio di memoria nel browser usato dai siti per salvare dati sul tuo dispositivo senza inviarli al server.', example: 'Busssola lo usa per salvare quali lezioni hai completato.', action: 'Cancellando la cache del browser, cancelli questi dati.', module: '/privacy' },
];

export default function GlossaryPage() {
    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-4">
                <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">Dizionario Digitale</Badge>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Glossario</h1>
                <p className="text-xl text-secondary leading-relaxed">
                    Abbiamo tradotto il gergo tecnico in italiano semplice. Se trovi un termine che non conosci nelle lezioni, cercalo qui.
                </p>
            </header>

            <div className="space-y-6">
                {TERMS.map((item, i) => (
                    <Card key={i} className="p-8 border border-border bg-surface hover:border-primary/30 transition-all rounded-[2rem] space-y-6">
                        <div className="flex items-start justify-between gap-4">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-foreground tracking-tight">{item.term}</h3>
                                <p className="text-lg text-secondary leading-relaxed font-medium">{item.def}</p>
                            </div>
                            <div className="p-3 bg-background rounded-2xl border border-border text-secondary">
                                <Book className="w-6 h-6" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="bg-background p-4 rounded-xl space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Esempio reale</span>
                                <p className="text-sm text-secondary italic">"{item.example}"</p>
                            </div>
                            <div className="bg-primary/5 p-4 rounded-xl space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Cosa fare</span>
                                <p className="text-sm font-semibold text-foreground">{item.action}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex justify-end">
                            <Link 
                                href={item.module.startsWith('/') ? item.module : `/moduli/${item.module}`}
                                className="inline-flex items-center text-sm font-bold text-primary hover:underline group"
                            >
                                Approfondisci <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </Container>
    )
}
