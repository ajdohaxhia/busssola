import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  ArrowRight, ShieldCheck, User, Users, 
  Lock, Heart, ShieldAlert, Target, 
  BookOpen, Smartphone, CreditCard, Briefcase,
  AlertTriangle, FileText, Landmark, Zap
} from 'lucide-react'
import { LEARNING_PATHS } from '@/data/paths'

export default function Home() {
  return (
    <div className="space-y-20 pb-20 pt-2">
      
      {/* SECTION 1: Hero */}
      <Hero />

      {/* SECTION 2: Cosa puoi fare subito (Quick Actions) */}
      <section className="space-y-8 px-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-foreground flex items-center gap-2">
            <Zap className="text-primary w-6 h-6" /> Cosa puoi fare subito
          </h2>
          <p className="text-secondary">Azioni veloci e guide essenziali per risolvere problemi comuni.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Rinnovare Passaporto", href: "/moduli/modulo-09-documenti-identita", icon: FileText },
            { title: "Richiedere ISEE", href: "/moduli/modulo-09-documenti-identita", icon: Landmark },
            { title: "Blindare Account", href: "/moduli/modulo-02-account-security", icon: Lock },
            { title: "Controllare Truffe", href: "/moduli/modulo-03-truffe-phishing", icon: AlertTriangle },
          ].map((item, i) => (
            <Link href={item.href} key={i} className="group">
              <div className="flex items-center gap-4 bg-surface border border-border p-4 rounded-2xl hover:border-primary/40 hover:shadow-sm transition-all">
                <div className="bg-background p-2 rounded-lg group-hover:bg-primary/5 transition-colors shrink-0">
                  <item.icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-foreground text-sm tracking-tight">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: Emergenze Digitali (SOS) - More Prominent */}
      <section className="bg-sos/5 border border-sos/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
          <ShieldAlert size={200} />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-sos/10 text-sos px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" /> Emergenze Digitali
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-sos tracking-tight leading-[1.1]">
              Hai subìto un ricatto, una truffa o un furto d'account?
            </h2>
            <p className="text-sos/80 text-xl leading-relaxed max-w-xl">
              Non farti prendere dal panico. Abbiamo preparato delle schede di primo soccorso per dirti cosa fare (e cosa NON fare) nei primi 10 minuti.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="destructive" size="lg" className="rounded-xl h-14 px-8 text-base">
                <Link href="/sos">Apri la pagina SOS</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl h-14 px-8 text-base border-sos/20 text-sos hover:bg-sos/10">
                <Link href="/percorsi/sos-digitale">Vedi percorso SOS</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { title: "Account rubato", slug: "furto-account" },
               { title: "Sextortion / Ricatto", slug: "sextortion" },
               { title: "Truffa Bancaria", slug: "truffa-banca" },
               { title: "Smartphone perso", slug: "smartphone-perso" }
             ].map((sos, i) => (
               <Link href={`/sos#${sos.slug}`} key={i} className="group">
                 <div className="bg-white/50 backdrop-blur-sm border border-sos/10 p-5 rounded-2xl hover:border-sos/30 transition-all flex justify-between items-center group">
                   <span className="font-semibold text-sos">{sos.title}</span>
                   <ArrowRight className="w-4 h-4 text-sos/40 group-hover:translate-x-1 transition-transform" />
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Percorsi Guidati (Learning Paths) */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
            Scegli la tua situazione
          </h2>
          <p className="text-secondary text-lg">
            Non sai da dove iniziare? Segui un percorso guidato pensato per il tuo profilo.
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
                <Card className="h-full flex flex-col border border-border bg-surface transition-all shadow-sm p-6 space-y-4 hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{path.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                      {path.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center font-medium text-sm mt-auto text-primary">
                    Inizia percorso <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 5: Audiences / Chi siamo */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="md:col-span-1 space-y-6 py-8">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
            A chi serve Busssola
          </h2>
          <p className="text-secondary text-lg leading-relaxed">
            Siamo una risorsa civica gratuita per chi deve affrontare la burocrazia italiana o proteggersi online.
          </p>
          <Button asChild variant="outline" className="rounded-xl h-12">
            <Link href="/about">Scopri il progetto</Link>
          </Button>
        </div>
        
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-4 p-8 rounded-[2rem] bg-surface border border-border">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground tracking-tight">Cittadini e Famiglie</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Dalla richiesta dello SPID al cambio di residenza, fino alla gestione della sicurezza online per i più piccoli.
            </p>
          </div>
          
          <div className="space-y-4 p-8 rounded-[2rem] bg-surface border border-border">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-foreground tracking-tight">Lavoratori</h3>
            <p className="text-sm text-secondary leading-relaxed">
              Informazioni chiare su NASpI, dimissioni e agevolazioni per dipendenti e autonomi.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Sfoglia Argomenti (Topics) */}
      <section className="space-y-12 px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground">
              Tutte le guide pratiche
            </h2>
            <p className="text-secondary text-lg max-w-xl">
              Esplora il catalogo completo diviso per argomenti.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-xl h-12">
            <Link href="/moduli">Tutti i moduli <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Documenti e Identità", desc: "SPID, CIE, Passaporto e Residenza", icon: CreditCard, id: 'modulo-09-documenti-identita' },
            { title: "Lavoro e Diritti", desc: "NASpI, dimissioni e servizi INPS", icon: Briefcase, id: 'modulo-10-lavoro-disoccupazione' },
            { title: "Sicurezza Account", desc: "Password, 2FA e protezione dati", icon: Lock, id: 'modulo-02-account-security' },
            { title: "Truffe e Phishing", desc: "Riconoscere SMS, email e siti falsi", icon: Target, id: 'modulo-03-truffe-phishing' },
            { title: "Privacy Smartphone", desc: "Proteggi i tuoi dati sul cellulare", icon: Smartphone, id: 'modulo-07-privacy-smartphone' },
            { title: "Famiglia e Minori", desc: "Patti digitali e tutele per i figli", icon: Heart, id: 'modulo-08-scuola-famiglia' },
          ].map((topic, i) => (
            <Link href={`/moduli/${topic.id}`} key={i} className="group">
              <div className="flex items-start gap-4 bg-surface border border-border p-6 rounded-2xl hover:border-primary/40 hover:shadow-sm transition-all h-full">
                <div className="bg-background border border-border p-3 rounded-xl group-hover:bg-primary/5 transition-colors shrink-0">
                  <topic.icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg tracking-tight mb-1">{topic.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{topic.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 7: Trust block */}
      <section className="bg-foreground text-background rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white leading-tight">
              Una risorsa pubblica, gratuita e indipendente.
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Busssola non è un ente pubblico, ma un'iniziativa civica per rendere accessibili i tuoi diritti e semplificare i tuoi doveri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 text-left">
            <div className="space-y-2">
              <h4 className="font-bold text-white">Niente Login</h4>
              <p className="text-sm text-white/60">Non devi registrarti per leggere le guide.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white">Niente Cookie</h4>
              <p className="text-sm text-white/60">Non usiamo cookie di tracciamento o marketing.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white">Niente Fuffa</h4>
              <p className="text-sm text-white/60">Solo passaggi pratici e fonti ufficiali verificate.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-white">Open Source</h4>
              <p className="text-sm text-white/60">Chiunque può contribuire a migliorare le guide.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
