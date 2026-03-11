import { Hero } from '@/components/ui/Hero'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, User, Users, GraduationCap, Lock, Heart, ShieldAlert, MonitorSmartphone, Target, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-32 py-12">
      
      {/* SECTION 1: Hero */}
      <Hero />

      {/* SECTION 2: Choose where to start */}
      <section className="space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Scegli da dove iniziare</h2>
          <p className="text-secondary text-lg">Seleziona il percorso più adatto alle tue necessità in questo momento.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col hover:border-primary/50 group border border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <CardTitle>Proteggi la tua vita online</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              Impara le basi della privacy, come proteggere i tuoi account e difendere i tuoi dati personali. 
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="/moduli">Esplora i moduli</Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col hover:border-primary/50 group border border-border">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <CardTitle>Riconosci i rischi</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              Scopri come riconoscere truffe, profili falsi, manipolazione e situazioni sospette prima che sia troppo tardi.
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="outline" className="w-full">
                <Link href="/moduli">Esplora i moduli</Link>
              </Button>
            </div>
          </Card>
          <Card className="flex flex-col border-sos-border bg-sos-bg group">
            <CardHeader>
              <div className="w-12 h-12 bg-sos/10 text-sos rounded-xl flex items-center justify-center mb-4">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <CardTitle className="text-sos">Hai bisogno di aiuto adesso?</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 text-sos/80">
              Se ti trovi in una situazione di pericolo, minaccia o ricatto, vai direttamente al Centro SOS per indicazioni immediate.
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="destructive" className="w-full">
                <Link href="/sos">Vedi contatti di emergenza</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* SECTION 3: Who it is for */}
      <section className="space-y-12 bg-surface-muted p-8 md:p-16 rounded-[2.5rem] border border-border">
        <div className="space-y-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Percorsi pensati per tutti</h2>
          <p className="text-secondary text-lg">Contenuti mirati in base alla propria età e ruolo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="text-primary w-6 h-6" />
              <h3 className="text-xl font-semibold">Ragazzi e Giovani</h3>
            </div>
            <p className="text-secondary">Informazioni pratiche e dirette per riconoscere pericoli reali sui social, nel gaming e nelle relazioni online, senza atteggiamenti paternalistici.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="text-primary w-6 h-6" />
              <h3 className="text-xl font-semibold">Genitori e Famiglie</h3>
            </div>
            <p className="text-secondary">Strumenti concreti per capire il mondo digitale dei figli, imparare ad ascoltare e intervenire correttamente in caso di emergenza.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary w-6 h-6" />
              <h3 className="text-xl font-semibold">Scuole ed Educatori</h3>
            </div>
            <p className="text-secondary">Moduli strutturati da utilizzare in classe o nei gruppi giovanili per facilitare il dialogo sulla cittadinanza digitale e la sicurezza strutturata.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Core Topics */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Temi trattati</h2>
            <p className="text-secondary text-lg max-w-xl">Istruzioni chiare per le sfide digitali più comuni e pericolose.</p>
          </div>
          <Button asChild variant="link" className="text-lg px-0">
            <Link href="/moduli">Vedi tutti i temi <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Privacy e sicurezza account", icon: Lock },
            { title: "Riconoscere il grooming e predatori", icon: User },
            { title: "Truffe online e identità false", icon: Target },
            { title: "Deepfake e manipolazione", icon: MonitorSmartphone },
            { title: "Molestie e ricatti online", icon: ShieldAlert },
            { title: "Benessere digitale", icon: Heart },
          ].map((topic, i) => (
            <div key={i} className="flex items-center gap-4 bg-surface border border-border p-5 rounded-2xl hover:border-primary/30 transition-colors">
              <div className="bg-surface-muted p-3 rounded-lg border border-border">
                <topic.icon className="w-5 h-5 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground">{topic.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: How it works */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Come funziona</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-[20%] right-[20%] h-px bg-border -z-10" />
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">1</div>
            <h4 className="text-xl font-semibold">Scegli un percorso</h4>
            <p className="text-secondary">Esplora i temi disponibili e seleziona quello che ti interessa o di cui hai bisogno.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">2</div>
            <h4 className="text-xl font-semibold">Impara con moduli pratici</h4>
            <p className="text-secondary">Leggi informazioni scritte in modo chiaro, diretto e orientato all'azione.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-xl flex items-center justify-center">3</div>
            <h4 className="text-xl font-semibold">Riduci i rischi</h4>
            <p className="text-secondary">Saprai come difenderti e a chi rivolgerti prima che un problema diventi grave.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Trust block */}
      <section className="rounded-[2.5rem] bg-surface border border-border p-8 md:p-16 text-center max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-display font-semibold">Progettato per essere utile</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-secondary font-medium">
          <div className="space-y-2"><div className="w-8 h-8 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3"><ShieldCheck className="w-4 h-4"/></div>Linguaggio chiaro</div>
          <div className="space-y-2"><div className="w-8 h-8 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3"><ShieldCheck className="w-4 h-4"/></div>Consigli pratici</div>
          <div className="space-y-2"><div className="w-8 h-8 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3"><ShieldCheck className="w-4 h-4"/></div>Nessun allarmismo</div>
          <div className="space-y-2"><div className="w-8 h-8 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-3"><ShieldCheck className="w-4 h-4"/></div>Uso gratuito e anonimo</div>
        </div>
      </section>

      {/* SECTION 7 & 8: SOS CTA & Final CTA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-sos-bg border border-sos-border rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold text-sos">Emergenza SOS</h3>
            <p className="text-sos/80">Problemi seri online? Se ti senti in pericolo o sotto ricatto, ci sono persone pronte ad aiutarti subito. Scopri chi contattare e cosa fare.</p>
          </div>
          <Button asChild variant="destructive" size="lg" className="w-fit">
            <Link href="/sos">Apri area SOS</Link>
          </Button>
        </div>
        <div className="bg-surface-muted border border-border rounded-3xl p-8 md:p-12 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-semibold text-foreground">Inizia subito</h3>
            <p className="text-secondary relative z-10">La sicurezza digitale non è materia per soli esperti. Con piccoli accorgimenti quotidiani, puoi rendere la tua navigazione molto più sicura.</p>
          </div>
          <Button asChild size="lg" className="w-fit relative z-10">
            <Link href="/moduli">Inizia l'apprendimento</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
