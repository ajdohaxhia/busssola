'use client'

import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { IntentionCard, SituationCard } from '@/components/ui/Cards'
import Link from 'next/link'
import { 
  ArrowRight, ShieldCheck, Users, 
  Lock, Heart, ShieldAlert, Target, 
  BookOpen, CreditCard, Briefcase,
  FileText, Zap,
  GraduationCap, Banknote, Home as HomeIcon
} from 'lucide-react'
import { LEARNING_PATHS } from '@/data/paths'

export default function Home() {
  return (
    <div className="space-y-24 pb-24 pt-4">
      
      {/* SECTION 1: Hero Orientation */}
      <Hero />

      {/* SECTION 2: Intention Grid - "Da dove vuoi partire?" */}
      <section className="space-y-10 px-4">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-foreground text-center">
            Da dove vuoi partire?
          </h2>
          <p className="text-lg text-secondary font-medium text-center">
            Scegli l'area che ti interessa per trovare guide e percorsi passo-passo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <IntentionCard 
            title="Emergenza digitale" 
            description="Account rubato, ricatto online, truffa bancaria o telefono perso." 
            icon={ShieldAlert} 
            href="/moduli/categoria/emergenze"
            color="sos"
          />
          <IntentionCard 
            title="Documenti e Identità" 
            description="Richiedere SPID, CIE, Passaporto o cambiare residenza." 
            icon={FileText} 
            href="/moduli/categoria/documenti"
          />
          <IntentionCard 
            title="Soldi e Truffe" 
            description="Riconoscere phishing, contestare pagamenti o carte clonate." 
            icon={Target} 
            href="/moduli/categoria/truffe"
          />
          <IntentionCard 
            title="Lavoro e INPS" 
            description="Domanda NASpI, dimissioni telematiche o busta paga." 
            icon={Briefcase} 
            href="/moduli/categoria/lavoro"
          />
          <IntentionCard 
            title="Casa e Residenza" 
            description="Contratto affitto, voltura utenze, TARI e bonus casa." 
            icon={HomeIcon} 
            href="/moduli/categoria/casa"
          />
          <IntentionCard 
            title="Scuola e Famiglia" 
            description="Cyberbullismo, patti digitali e tutele per i figli." 
            icon={Heart} 
            href="/moduli/categoria/famiglia"
          />
          <IntentionCard 
            title="Privacy e Account" 
            description="Proteggere email, sessioni attive e dati personali." 
            icon={Lock} 
            href="/moduli/categoria/sicurezza"
          />
          <IntentionCard 
            title="Bonus e ISEE" 
            description="Preparare ISEE, richiedere bonus sociali e agevolazioni." 
            icon={Banknote} 
            href="/moduli/categoria/bonus"
          />
        </div>
      </section>

      {/* SECTION 3: Common Situations - Problem Oriented */}
      <section className="bg-surface-muted rounded-[3rem] border border-border p-10 md:p-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-foreground leading-tight">
              Situazioni comuni
            </h2>
            <p className="text-lg text-secondary font-medium max-w-xl">
              Abbiamo raggruppato le azioni più cercate dai cittadini per farti risparmiare tempo.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-xl h-12 bg-surface">
            <Link href="/tips">Vedi tutti i tips <Zap className="ml-2 w-3 h-3 text-primary" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SituationCard title="Mi hanno rubato Instagram" href="/sos#instagram-rubato" />
          <SituationCard title="Ho perso lo smartphone" href="/sos#smartphone-rubato" />
          <SituationCard title="Devo fare cambio residenza" href="/moduli/modulo-09-documenti-identita" />
          <SituationCard title="Devo fare domanda NASpI" href="/moduli/modulo-10-lavoro-disoccupazione" />
          <SituationCard title="Ho ricevuto un SMS sospetto" href="/moduli/modulo-03-truffe-phishing" />
          <SituationCard title="Devo recuperare PUK CIE" href="/moduli/modulo-09-documenti-identita" />
          <SituationCard title="Ho una carta clonata" href="/sos#banca-compromessa" />
          <SituationCard title="Devo preparare l'ISEE" href="/moduli/modulo-13-casa-residenza" />
        </div>
      </section>

      {/* SECTION 4: Se è urgente (SOS Quick Access) */}
      <section className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-left">
        <div className="lg:col-span-1 space-y-6">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sos/10 text-sos text-xs font-black uppercase tracking-widest border border-sos/20">
              <ShieldAlert className="w-4 h-4" /> Urgenze
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-foreground leading-[1.1]">
             Hai bisogno di aiuto adesso?
           </h2>
           <p className="text-lg text-secondary leading-relaxed font-medium">
             Protocolli di primo soccorso digitale per gestire furti, ricatti e truffe nei primi 10 minuti.
           </p>
           <Button asChild variant="destructive" size="lg" className="rounded-2xl h-16 px-10 text-base font-black uppercase tracking-widest shadow-xl shadow-sos/20">
             <Link href="/sos">Apri Centro SOS</Link>
           </Button>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { title: "Ricatto con immagini", id: "sextortion-adulti", icon: Heart },
             { title: "Minore in pericolo", id: "minore-ricatto", icon: ShieldCheck },
             { title: "Account rubato", id: "instagram-rubato", icon: Users },
             { title: "Ho dato codici OTP", id: "otp-condiviso", icon: Lock },
           ].map((sos) => (
             <Link href={`/sos#${sos.id}`} key={sos.id} className="group">
               <Card className="p-6 border border-border bg-surface hover:border-sos/40 hover:shadow-lg transition-all flex items-center gap-5 rounded-[2rem]">
                  <div className="w-12 h-12 bg-sos/5 text-sos rounded-xl flex items-center justify-center group-hover:bg-sos group-hover:text-white transition-colors">
                    <sos.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-foreground group-hover:text-sos transition-colors">{sos.title}</span>
               </Card>
             </Link>
           ))}
        </div>
      </section>

      {/* SECTION 5: Percorsi Guidati (Learning Paths) */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground text-center">
            Percorsi passo-passo
          </h2>
          <p className="text-lg text-secondary font-medium text-center">
            Se non sai da dove iniziare, segui una raccolta di guide pensata per la tua situazione specifica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {LEARNING_PATHS.filter(p => p.type !== 'emergency').slice(0, 4).map((path) => {
            const icons: Record<string, React.ElementType> = {
                'inizia-da-qui': ShieldCheck,
                'proteggi-account': Lock,
                'relazioni-social': Users,
                'genitori-famiglie': Heart,
                'truffe-soldi': Target,
                'documenti-essenziali': CreditCard,
                'lavoro-e-diritti': Briefcase
            };
            const Icon = icons[path.id] || BookOpen;

            return (
              <Link href={`/percorsi/${path.id}`} key={path.id} className="group">
                <Card className="h-full flex flex-col border border-border bg-surface transition-all shadow-sm p-8 space-y-5 hover:shadow-xl hover:border-primary/30 rounded-[2.5rem] text-left">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-primary/10">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{path.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed font-medium line-clamp-3 text-left">
                      {path.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center font-black text-[10px] uppercase tracking-widest mt-auto text-primary">
                    Vedi percorso <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Schools & Families */}
      <section className="px-4">
        <div className="bg-indigo-600 rounded-[3.5rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
                <GraduationCap size={300} />
            </div>
            <div className="space-y-6 flex-1 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest">
                    <GraduationCap className="w-4 h-4" /> Per Educatori
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Porta Busssola in classe.</h2>
                <p className="text-xl text-indigo-100 leading-relaxed font-medium max-w-xl text-center md:text-left">
                    Piani di lezione da 45 minuti, laboratori pratici e kit per docenti e genitori pronti da proiettare o stampare.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="rounded-2xl h-16 px-10 text-lg font-bold bg-white text-indigo-600 hover:bg-indigo-50 shadow-xl">
                        <Link href="/scuole">Sfoglia materiali</Link>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block w-72 h-72 bg-white/10 rounded-full border-8 border-white/5 relative z-10 animate-pulse" />
        </div>
      </section>

      {/* SECTION 7: Search CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Non trovi quello che cerchi?</h2>
          <p className="text-lg text-secondary font-medium">Usa il catalogo completo o prova a cercare un termine specifico.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="rounded-2xl h-16 px-10 border-border bg-surface shadow-sm">
                <Link href="/moduli">Catalogo Guide</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl h-16 px-10 border-border bg-surface shadow-sm">
                <Link href="/glossario">Dizionario Civico</Link>
            </Button>
        </div>
      </section>

      {/* SECTION 8: Trust block */}
      <section className="bg-foreground text-background rounded-[4rem] p-12 md:p-20 overflow-hidden relative mx-4">
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight text-center leading-tight">
              Una risorsa pubblica, <br /> gratuita e indipendente.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium text-center">
              Busssola è un'iniziativa civica open-source per rendere accessibili i tuoi diritti e semplificare i tuoi doveri. Senza compromessi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 text-left border-t border-white/10">
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs text-left">Niente Login</h4>
              <p className="text-sm text-white/50 leading-relaxed text-left font-medium">Nessun account richiesto per accedere alle guide.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs text-left">Zero Cookie</h4>
              <p className="text-sm text-white/50 leading-relaxed text-left font-medium">Nessun tracciamento, marketing o ads invasivi.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs text-left">Verificabilità</h4>
              <p className="text-sm text-white/50 leading-relaxed text-left font-medium">Ogni scheda cita fonti ufficiali e link governativi.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-widest text-primary text-xs text-left">Open Source</h4>
              <p className="text-sm text-white/50 leading-relaxed text-left font-medium">Il codice e i contenuti sono su GitHub per tutti.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
