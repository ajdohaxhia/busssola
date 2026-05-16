'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SituationCard } from '@/components/ui/Cards'
import Link from 'next/link'
import { 
  ArrowRight, ShieldCheck, Users, 
  Lock, Heart, ShieldAlert, Target, 
  Briefcase,
  FileText, Search,
  GraduationCap, Banknote, Home as HomeIcon,
  Sparkles, TrendingUp, Globe, Stethoscope,
  Plane, UserCheck, Github, Clock, Info
} from 'lucide-react'
import { TOTAL_LESSONS } from '@/lib/seo'
import { cn } from '@/lib/utils'

export default function Home() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/moduli?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const searchExamples = [
    { label: 'fare ISEE', query: 'ISEE' },
    { label: 'recuperare SPID', query: 'SPID' },
    { label: 'telefono rubato', query: 'telefono rubato' },
    { label: 'NASpI', query: 'NASpI' },
    { label: 'cambio residenza', query: 'residenza' },
    { label: 'bonus bollette', query: 'bonus' }
  ]

  return (
    <div className="space-y-32 pb-32 pt-4">
      
      {/* SECTION 1: Hero + Search */}
      <section className="space-y-12 px-4">
        <Hero />
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-display font-black text-foreground">Cosa devi fare oggi?</h2>
            <p className="text-secondary font-medium">Cerca tra {TOTAL_LESSONS} guide pratiche e procedure ufficiali.</p>
          </div>
          
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Esempio: SPID, NASpI, ISEE, Passaporto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border-2 border-border rounded-[2.5rem] h-20 pl-16 pr-24 text-lg font-bold text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-8 focus:ring-primary/5 transition-all shadow-xl"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-secondary group-focus-within:text-primary transition-colors" />
            <Button type="submit" size="lg" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-2xl font-black uppercase tracking-widest text-sm h-14 px-8 shadow-lg shadow-primary/20">
              Cerca
            </Button>
          </form>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-secondary/40 py-2">Esempi:</span>
            {searchExamples.map((ex) => (
              <button
                key={ex.label}
                onClick={() => router.push(`/moduli?q=${encodeURIComponent(ex.query)}`)}
                className="px-4 py-2 rounded-full bg-surface border border-border text-xs font-bold text-secondary hover:border-primary hover:text-primary transition-all shadow-sm"
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Aree più cercate (Popular Areas) */}
      <section className="space-y-12 px-4">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
            <TrendingUp className="w-3 h-3" /> Più cercate
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground text-center">
            Esplora per area
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {[
            { title: "Documenti", icon: FileText, href: "/moduli/categoria/documenti", color: "blue" },
            { title: "ISEE e Bonus", icon: Banknote, href: "/moduli/categoria/bonus", color: "emerald" },
            { title: "Lavoro", icon: Briefcase, href: "/moduli/categoria/lavoro", color: "indigo" },
            { title: "Casa", icon: HomeIcon, href: "/moduli/categoria/casa", color: "amber" },
            { title: "Soldi e Truffe", icon: Target, href: "/moduli/categoria/truffe", color: "rose" },
            { title: "Sanità", icon: Stethoscope, href: "/moduli/categoria/sanita", color: "cyan" },
            { title: "Immigrazione", icon: Globe, href: "/moduli/categoria/immigrazione", color: "teal" },
            { title: "Famiglia", icon: Heart, href: "/moduli/categoria/famiglia", color: "pink" },
            { title: "Anziani", icon: UserCheck, href: "/moduli/categoria/anziani", color: "orange" },
            { title: "Università", icon: GraduationCap, href: "/moduli/categoria/universita", color: "violet" },
            { title: "Mobilità", icon: Plane, href: "/moduli/categoria/mobilita", color: "sky" },
            { title: "Emergenze", icon: ShieldAlert, href: "/moduli/categoria/emergenze", color: "sos" },
          ].map((area) => (
            <Link href={area.href} key={area.title} className="group">
              <Card className="h-full p-6 flex flex-col items-center gap-4 text-center border-2 border-border bg-surface hover:border-primary hover:shadow-xl transition-all rounded-[2rem]">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110",
                  "bg-surface-muted text-secondary group-hover:bg-primary group-hover:text-white"
                )}>
                  <area.icon size={24} />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-foreground">{area.title}</span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: Procedure più urgenti (Urgent Procedures) */}
      <section className="bg-sos/5 rounded-[4rem] border-4 border-sos/10 p-10 md:p-20 mx-4 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sos text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-sos/20">
               <ShieldAlert className="w-3 h-3" /> Urgenti
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-foreground leading-tight">
              Hai un problema adesso?
            </h2>
            <p className="text-xl text-secondary font-medium">
              Protocolli di primo soccorso per situazioni critiche. Cosa fare nei primi 10 minuti.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-2xl h-16 px-10 font-black uppercase tracking-widest bg-sos hover:bg-sos/90 shadow-2xl shadow-sos/20">
            <Link href="/sos">Vedi tutte le emergenze</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SituationCard title="Mi hanno rubato Instagram" href="/sos#instagram-rubato" />
          <SituationCard title="Ho perso lo smartphone" href="/sos#smartphone-rubato" />
          <SituationCard title="Ho dato codici OTP" href="/sos#otp-condiviso" />
          <SituationCard title="Carta compromessa" href="/sos#banca-compromessa" />
        </div>
      </section>

      {/* SECTION 4: Nuove guide e Aggiornamenti */}
      <section className="px-4 grid lg:grid-cols-2 gap-12">
        {/* Nuove Guide */}
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-display font-black text-foreground">Nuove guide aggiunte</h3>
            </div>
            <div className="grid gap-4">
                {[
                    { title: "ISEE Universitario: guida completa", href: "/moduli/modulo-23-bonus-isee", cat: "Bonus" },
                    { title: "Passaporto: appuntamento online", href: "/moduli/modulo-11-documenti-identita-avanzata", cat: "Documenti" },
                    { title: "730 Precompilato: base per cittadini", href: "/moduli/modulo-25-fisco-cittadini", cat: "Fisco" }
                ].map((item, i) => (
                    <Link href={item.href} key={i}>
                        <Card className="p-6 border-2 border-border hover:border-emerald-400 transition-all rounded-2xl flex items-center justify-between group">
                            <div className="space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{item.cat}</span>
                                <h4 className="font-bold text-foreground group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                            </div>
                            <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        </Card>
                    </Link>
                ))}
            </div>
        </div>

        {/* Aggiornate di Recente */}
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Clock size={24} />
                </div>
                <h3 className="text-2xl font-display font-black text-foreground">Aggiornate di recente</h3>
            </div>
            <div className="grid gap-4">
                {[
                    { title: "NASpI: requisiti 2026", href: "/moduli/modulo-10-lavoro-disoccupazione", cat: "Lavoro" },
                    { title: "SPID: quale provider scegliere", href: "/moduli/modulo-09-documenti-identita", cat: "Documenti" },
                    { title: "Bonus Sociali Bollette", href: "/moduli/modulo-23-bonus-isee", cat: "Bonus" }
                ].map((item, i) => (
                    <Link href={item.href} key={i}>
                        <Card className="p-6 border-2 border-border hover:border-blue-400 transition-all rounded-2xl flex items-center justify-between group">
                            <div className="space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{item.cat}</span>
                                <h4 className="font-bold text-foreground group-hover:text-blue-600 transition-colors">{item.title}</h4>
                            </div>
                            <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 5: Per chi è Busssola */}
      <section className="bg-surface-muted py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-display font-black text-foreground tracking-tight">Per chi è Busssola?</h2>
                <p className="text-lg text-secondary font-medium max-w-2xl mx-auto">Una risorsa universale progettata per le diverse esigenze della vita quotidiana.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Cittadini e Famiglie", desc: "ISEE, Bonus, Residenza e documenti d'identità senza complicazioni.", icon: Users },
                    { title: "Studenti e Giovani", desc: "ISEE Universitario, primo lavoro, contratti d'affitto e sicurezza social.", icon: GraduationCap },
                    { title: "Lavoratori", desc: "NASpI, dimissioni telematiche, busta paga e diritti fondamentali.", icon: Briefcase },
                    { title: "Caregiver e Anziani", desc: "Invalidità, deleghe digitali e tutele contro le truffe telefoniche.", icon: UserCheck },
                ].map((persona, i) => (
                    <div key={i} className="space-y-4 text-center md:text-left">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center mx-auto md:mx-0">
                            <persona.icon size={28} className="text-primary" />
                        </div>
                        <h4 className="text-xl font-black text-foreground">{persona.title}</h4>
                        <p className="text-secondary leading-relaxed font-medium">{persona.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 6: Schools & Families */}
      <section className="px-4">
        <div className="bg-indigo-600 rounded-[4rem] p-10 md:p-20 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-24 opacity-10 pointer-events-none">
                <GraduationCap size={300} />
            </div>
            <div className="space-y-8 flex-1 relative z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest border border-white/20">
                    <GraduationCap className="w-5 h-5" /> Hub Scuole & Docenti
                </div>
                <h2 className="text-4xl md:text-7xl font-display font-black tracking-tight leading-tight">Porta l'educazione civica digitale in classe.</h2>
                <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed font-medium max-w-2xl">
                    Piani di lezione da 45 minuti, laboratori pratici e kit pronti da proiettare o stampare. Totalmente gratuiti.
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="rounded-2xl h-18 px-12 text-xl font-black uppercase tracking-widest bg-white text-indigo-600 hover:bg-indigo-50 shadow-2xl">
                        <Link href="/scuole">Sfoglia materiali</Link>
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block w-80 h-80 bg-white/10 rounded-[3rem] border-8 border-white/5 relative z-10 transform rotate-12 shadow-inner" />
        </div>
      </section>

      {/* SECTION 7: Contribuisci (GitHub CTA) */}
      <section className="px-4 max-w-5xl mx-auto">
        <Card className="p-10 md:p-16 border-4 border-dashed border-primary/20 bg-primary/5 rounded-[4rem] flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xl shadow-primary/20">
                <Github size={48} />
            </div>
            <div className="space-y-6 flex-1">
                <h2 className="text-3xl md:text-4xl font-display font-black text-foreground tracking-tight">Busssola è un progetto open-source.</h2>
                <p className="text-lg text-secondary font-medium">
                    Aiutaci a migliorare le guide, segnala errori o suggerisci nuovi argomenti. Il codice e i contenuti sono aperti a tutti.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="rounded-2xl h-14 px-10 font-black uppercase tracking-widest shadow-lg">
                        <Link href="https://github.com/ajdohaxhia/busssola">
                             Contribuisci su GitHub
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-2xl h-14 px-10 font-black uppercase tracking-widest border-2">
                        <Link href="/contact">Segnala errore</Link>
                    </Button>
                </div>
            </div>
        </Card>
      </section>

      {/* SECTION 8: Trust block */}
      <section className="bg-foreground text-background rounded-[5rem] p-12 md:p-24 overflow-hidden relative mx-4">
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
          <ShieldCheck size={500} />
        </div>
        <div className="max-w-4xl mx-auto space-y-16 relative z-10 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-display font-black text-white tracking-tight leading-tight">
              Una risorsa pubblica, gratuita e indipendente.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium">
              Busssola è un'iniziativa civica per rendere accessibili i tuoi diritti e semplificare i tuoi doveri. Senza compromessi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 text-left border-t border-white/10">
            {[
                { title: "Niente Login", desc: "Nessun account richiesto per accedere alle guide.", icon: Lock },
                { title: "Zero Tracciamento", desc: "Nessun cookie di profilazione, marketing o ads.", icon: ShieldCheck },
                { title: "Verificabilità", desc: "Ogni scheda cita fonti ufficiali e link governativi.", icon: Info },
                { title: "Open Source", desc: "Il codice e i contenuti sono su GitHub per tutti.", icon: Globe },
            ].map((feature, i) => (
                <div key={i} className="space-y-3">
                    <h4 className="font-black uppercase tracking-widest text-primary text-xs flex items-center gap-2">
                        <feature.icon size={14} /> {feature.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed font-medium">{feature.desc}</p>
                </div>
            ))}
          </div>
          
          <div className="pt-8 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
                Busssola non è un sito ufficiale della PA e non sostituisce pareri legali o medici.
             </p>
          </div>
        </div>
      </section>

    </div>
  )
}
