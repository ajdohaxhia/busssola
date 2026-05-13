import { Hero } from '@/components/ui/Hero'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { 
  ArrowRight, ShieldCheck, User, Users, GraduationCap, 
  Lock, Heart, ShieldAlert, MonitorSmartphone, Target, 
  Search, BookOpen, Clock, Smartphone
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteStats } from '@/data/siteStats'
import { LEARNING_PATHS } from '@/data/paths'

export default function Home() {
  return (
    <div className="space-y-16 pb-12 pt-2">
      
      {/* SECTION 1: Hero */}
      <Hero />

      {/* SECTION 2: Scegli il tuo percorso (Learning Paths) */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
            Trova la situazione più vicina alla tua
          </h2>
          <p className="text-secondary text-lg">
            Abbiamo raggruppato le guide per aiutarti a trovare più velocemente le informazioni giuste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_PATHS.slice(0, 6).map((path) => {
            const icons: Record<string, React.ElementType> = {
                'inizia-da-qui': ShieldCheck,
                'proteggi-account': Lock,
                'relazioni-social': Users,
                'sos-digitale': ShieldAlert,
                'genitori-famiglie': Heart,
                'truffe-soldi': Target
            };
            const colors: Record<string, string> = {
                'inizia-da-qui': 'text-primary bg-primary/10 hover:border-primary/50',
                'proteggi-account': 'text-indigo-600 bg-indigo-50 hover:border-indigo-500/50',
                'relazioni-social': 'text-emerald-600 bg-emerald-50 hover:border-emerald-500/50',
                'sos-digitale': 'text-sos bg-sos/10 hover:border-sos',
                'genitori-famiglie': 'text-orange-600 bg-orange-50 hover:border-orange-500/50',
                'truffe-soldi': 'text-blue-600 bg-blue-50 hover:border-blue-500/50'
            };
            const Icon = icons[path.id] || BookOpen;
            const style = colors[path.id] || 'text-secondary bg-secondary/10 hover:border-secondary/50';
            const [textColor, bgColor, borderHover] = style.split(' ');

            return (
              <Link href={`/percorsi/${path.id}`} key={path.id} className="group">
                <Card className={cn(
                  "h-full flex flex-col border border-border bg-surface transition-all shadow-sm p-6 space-y-4",
                  borderHover
                )}>
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-colors group-hover:bg-foreground group-hover:text-background", bgColor, textColor)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">{path.title}</h3>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                      {path.description}
                    </p>
                  </div>
                  <div className={cn("pt-2 flex items-center font-medium text-sm mt-auto", textColor)}>
                    Apri <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <Button asChild variant="outline" className="rounded-xl h-12 px-8">
            <Link href="/percorsi">Vedi tutte le guide <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>


      {/* SECTION 3: Audiences */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
            A chi può servire
          </h2>
          <p className="text-secondary text-lg">
            Le guide di Busssola sono scritte per essere utili a chiunque si trovi a fronteggiare un problema digitale, indipendentemente dall'esperienza tecnica.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-5 p-8 rounded-[2rem] bg-surface border border-border">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
              <User className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-semibold text-foreground tracking-tight">Per i più giovani</h3>
            <p className="text-secondary leading-relaxed">
              Consigli pratici, veloci e diretti per gestire gaming, social network, relazioni online e difendersi dalle pressioni dei coetanei o degli sconosciuti, senza inutili lezioni paternalistiche.
            </p>
          </div>
          
          <div className="space-y-5 p-8 rounded-[2rem] bg-surface border border-border">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-semibold text-foreground tracking-tight">Per le famiglie</h3>
            <p className="text-secondary leading-relaxed">
              Una guida concreta per comprendere le dinamiche del digitale, impostare limiti sani, instaurare un dialogo aperto in casa e sapere come intervenire tempestivamente senza creare il panico.
            </p>
          </div>
          
          <div className="space-y-5 p-8 rounded-[2rem] bg-surface border border-border">
            <div className="w-14 h-14 bg-fuchsia-50 text-fuchsia-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-semibold text-foreground tracking-tight">Per gli educatori</h3>
            <p className="text-secondary leading-relaxed">
              Un archivio di moduli strutturati ed esempi mirati, pensati per essere portati direttamente in classe o usati in laboratori per facilitare lezioni moderne di cittadinanza digitale.
            </p>
            <div className="pt-2">
               <Link href="/scuole" className="text-primary font-medium hover:underline flex items-center gap-1">Vedi le risorse <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Topics Covered */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
              Sfoglia per argomento
            </h2>
            <p className="text-secondary text-lg max-w-xl">
              Se hai già in mente un tema specifico, puoi trovare la guida giusta direttamente dall'elenco dei {siteStats.totalModules} argomenti disponibili.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-xl h-12">
            <Link href="/moduli">Catalogo moduli <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Sicurezza tecnica", desc: "Password, 2FA, data breach e impostazioni", icon: Lock, id: 'modulo-02-account-security' },
            { title: "Truffe e phishing", desc: "Dai messaggi sospetti all'ecommerce truffaldino", icon: Target, id: 'modulo-03-truffe-phishing' },
            { title: "Grooming e minori", desc: "Riconoscere i predatori e gestire la fiducia", icon: User, id: 'modulo-05-grooming-minori' },
            { title: "Cyberstalking e doxxing", desc: "Come reagire, bloccare e conservare prove", icon: ShieldAlert, id: 'modulo-06-stalking-doxxing' },
            { title: "Sextortion e immagini intime", desc: "Il consenso, l'intimità digitale e i rischi legali", icon: MonitorSmartphone, id: 'modulo-04-sextortion-ricatti' },
            { title: "Privacy e Smartphone", desc: "Proteggi i tuoi dati sul dispositivo mobile", icon: Smartphone, id: 'modulo-07-privacy-smartphone' },
          ].map((topic, i) => (
            <Link href={`/moduli/${topic.id}`} key={i} className="group">
              <div className="flex items-start gap-4 bg-surface border border-border p-6 rounded-[1.5rem] hover:border-primary/40 hover:shadow-sm transition-all h-full">
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

      {/* SECTION 5: How it works */}
      <section className="space-y-16 py-8 border-y border-border">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-foreground">
            Come funziona
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-border border-dashed -z-10" />
          
          <div className="flex flex-col items-center text-center space-y-5 bg-background">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white font-display font-bold text-2xl flex items-center justify-center shadow-md shadow-primary/20">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-foreground">1. Trova il tema</h4>
              <p className="text-secondary leading-relaxed px-4">Cerca l'argomento direttamente, oppure parti da un percorso già raggruppato per situazione.</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-5 bg-background">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white font-display font-bold text-2xl flex items-center justify-center shadow-md shadow-primary/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-foreground">2. Leggi la guida</h4>
              <p className="text-secondary leading-relaxed px-4">Testi brevi e senza gergo inutile. Ogni scheda si legge in pochi minuti, anche da telefono.</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-5 bg-background">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white font-display font-bold text-2xl flex items-center justify-center shadow-md shadow-primary/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-semibold text-foreground">3. Segui i passaggi</h4>
              <p className="text-secondary leading-relaxed px-4">Ogni guida include una checklist e indica cosa fare subito, cosa non fare e dove chiedere aiuto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Trust block */}
      <section className="bg-surface border border-border rounded-[3rem] p-10 md:p-16 lg:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <ShieldCheck size={400} />
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-foreground">
              Come lavoriamo
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
              Busssola è un progetto indipendente. Non vende corsi, non mostra pubblicità, non raccoglie i tuoi dati. Pubblica solo guide con fonti verificabili.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Lock className="w-5 h-5"/>
              </div>
              <h4 className="font-semibold text-foreground">Nessun tracciamento</h4>
              <p className="text-sm text-secondary leading-relaxed">Non raccogliamo dati personali. Le guide consultate sono salvate localmente sul tuo dispositivo, non su server.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Search className="w-5 h-5"/>
              </div>
              <h4 className="font-semibold text-foreground">Linguaggio semplice</h4>
              <p className="text-sm text-secondary leading-relaxed">Il linguaggio tecnico viene tradotto in parole di uso comune, senza semplificare oltre misura.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-sos/10 text-sos flex items-center justify-center mb-4">
                <Heart className="w-5 h-5"/>
              </div>
              <h4 className="font-semibold text-foreground">Senza giudizio</h4>
              <p className="text-sm text-secondary leading-relaxed">Se hai subito una truffa o un ricatto, non usiamo linguaggi colpevolizzanti. Ti aiutiamo e basta.</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5"/>
              </div>
              <h4 className="font-semibold text-foreground">Indipendente e gratuita</h4>
              <p className="text-sm text-secondary leading-relaxed">Busssola non mostra pubblicità e non vende nulla. È un progetto indipendente, libero da interessi commerciali.</p>
            </div>
          </div>
          
          <div className="text-center pt-8">
             <Button asChild variant="link" className="text-primary font-medium">
               <Link href="/metodo-editoriale">Leggi il nostro metodo editoriale <ArrowRight className="w-4 h-4 ml-1" /></Link>
             </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 & 8: SOS CTA & Final CTA */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-sos-bg border border-sos-border rounded-[2rem] p-10 md:p-14 space-y-8 flex flex-col justify-between items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-sos/10 text-sos px-3 py-1.5 rounded-full text-sm font-bold tracking-wide">
              <ShieldAlert className="w-4 h-4" /> Se è urgente
            </div>
            <h3 className="text-3xl font-display font-semibold text-sos tracking-tight">Hai bisogno di aiuto adesso?</h3>
            <p className="text-sos/80 text-lg leading-relaxed">
              Se sei sotto ricatto, stai ricevendo minacce o hai subìto un furto d'identità, scegli la tua situazione per trovare i prossimi passi. Non sei solo.
            </p>
          </div>
          <Button asChild variant="destructive" size="lg" className="rounded-xl h-14 px-8 text-base w-full sm:w-auto mt-4">
            <Link href="/sos">Vai alla pagina SOS</Link>
          </Button>
        </div>
        
        <div className="bg-foreground text-background rounded-[2rem] p-10 md:p-14 space-y-8 flex flex-col justify-between items-start relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 bg-background/10 px-3 py-1.5 rounded-full text-sm font-medium tracking-wide">
              Prevenzione
            </div>
            <h3 className="text-3xl font-display font-semibold tracking-tight text-white">Non aspettare che succeda qualcosa.</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Poche guide pratiche bastano per proteggere i tuoi account, capire cosa condividere online e sapere come comportarti in caso di problema.
            </p>
          </div>
          <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-xl h-14 px-8 text-base w-full sm:w-auto relative z-10 mt-4 font-semibold">
            <Link href="/moduli">Vedi tutte le guide</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
