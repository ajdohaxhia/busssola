import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { FaqAccordionClient } from '@/components/faq/FaqAccordionClient'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqPageStructuredData, buildSeoMetadata } from '@/lib/seo'
import type { Metadata } from 'next'

const FAQS = [
  {
    q: "Busssola è davvero gratuita?",
    a: "Sì, totalmente. Non ci sono costi, non ci sono versioni 'premium', non vendiamo corsi e non mostriamo pubblicità. È un servizio offerto alla collettività e sostenuto da lavoro civico indipendente."
  },
  {
    q: "Perché il dominio ha tre 's' (busssola.com)?",
    a: "La tripla 's' non è intenzionale o simbolica: il dominio con la grafia normale non era disponibile al momento della registrazione. Il nome del progetto resta ispirato all’idea di una 'bussola civica' per orientarsi meglio tra procedure e diritti."
  },
  {
    q: "Busssola è un ente pubblico o governativo?",
    a: "No. Busssola è un progetto civico indipendente e open-source. Non siamo affiliati ad alcun ministero o ente pubblico, ma utilizziamo esclusivamente fonti ufficiali (come INPS, AgID, Polizia Postale, portali governativi) per garantire l'accuratezza delle informazioni."
  },
  {
    q: "Le guide hanno valore legale?",
    a: "No. Le informazioni fornite hanno scopo puramente informativo e di orientamento pratico. Non sostituiscono i testi di legge, né i siti ufficiali degli enti competenti che hanno sempre valore legale prevalente. Busssola non fornisce consulenza legale, medica o fiscale."
  },
  {
    q: "Ogni quanto vengono aggiornate le guide?",
    a: "Le guide vengono revisionate periodicamente in base alle novità legislative e tecniche. Ogni scheda riporta la data dell'ultima revisione. Se noti un'inesattezza, puoi segnalarla subito tramite il nostro repository GitHub."
  },
  {
    q: "Come segnalo un errore o un'informazione obsoleta?",
    a: "Il modo più rapido è aprire una 'Segnalazione' (issue) sul nostro repository GitHub o scriverci via email. Trattandosi di un progetto aperto, il contributo degli utenti è fondamentale per mantenere i contenuti precisi."
  },
  {
    q: "Posso usare Busssola a scuola o in un'associazione?",
    a: "Certamente. Busssola è pensata come bene comune. Docenti, educatori e associazioni possono proiettare le guide in classe, stamparle o usarle come base per laboratori di cittadinanza digitale senza chiedere permessi preventivi."
  },
  {
    q: "Vengono salvati i miei dati personali?",
    a: "No. Busssola non richiede registrazione né login. Non usiamo cookie di profilazione e non raccogliamo dati di navigazione. I tuoi progressi (lezioni completate) restano salvati esclusivamente nel tuo browser (Local Storage) e non vengono mai inviati ai nostri server."
  },
  {
    q: "Cosa devo fare in caso di emergenza?",
    a: "In caso di pericolo fisico immediato chiama sempre il 112. Se l'emergenza è digitale (account rubato, ricatto, truffa bancaria), usa la nostra pagina SOS per consultare i protocolli di intervento immediato."
  },
  {
    q: "Posso contribuire al progetto?",
    a: "Sì! Cerchiamo sempre volontari che aiutino a semplificare testi complessi, a verificare fonti o a scrivere nuove guide. Puoi contribuire direttamente su GitHub o contattandoci per collaborazioni editoriali."
  },
  {
    q: "Le guide sono stampabili?",
    a: "Sì. Il sito è ottimizzato per la stampa (Ctrl+P). Otterrai una versione pulita e leggibile, ideale da consegnare a chi ha meno dimestichezza con gli strumenti digitali o da usare come dispensa cartacea."
  },
  {
    q: "Perché non date consulenza personalizzata?",
    a: "Perché non siamo professionisti abilitati (avvocati, commercialisti, medici). Busssola descrive le procedure burocratiche e tecniche standard. Per casi complessi che richiedono assistenza specifica, consigliamo sempre di rivolgersi agli enti competenti, a un professionista o a un patronato."
  }
]

export function generateMetadata(): Metadata {
  return buildSeoMetadata({
    title: 'Domande Frequenti su Busssola',
    description: 'Risposte alle domande più comuni su Busssola: è gratuita? è ufficiale? come funzionano i progressi? Scopri tutto sulla piattaforma civica.',
    path: '/faq/',
    keywords: ['FAQ Busssola', 'domande frequenti', 'guida gratuita', 'privacy piattaforma'],
  })
}

export default function FAQPage() {
  const faqStructuredData = faqPageStructuredData(FAQS)

  return (
    <>
      <JsonLd data={faqStructuredData} />
      <Container size="md" className="py-12 space-y-12">
        <PageHeader
          centered
          badge="Centro Assistenza"
          icon={HelpCircle}
          title="Domande Frequenti"
          description="Tutto quello che c'è da sapere su Busssola, sulla tua privacy e sull'uso corretto delle guide civiche."
        />
        <FaqAccordionClient faqs={FAQS} />
        <footer className="pt-20 text-center max-w-2xl mx-auto">
          <Card className="p-10 border-4 border-dashed border-border bg-surface-muted/30 rounded-[3rem] space-y-8 text-left">
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-black text-foreground tracking-tight">Hai altre domande?</h3>
              <p className="text-secondary font-medium">Se non trovi la risposta che cerchi, il nostro team è a disposizione.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button asChild variant="outline" className="rounded-xl font-black uppercase tracking-widest px-6 h-12 bg-surface">
                <Link href="/contact">Contattaci</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl font-black uppercase tracking-widest px-6 h-12 bg-surface">
                <Link href="https://github.com/ajdohaxhia/busssola">GitHub Community</Link>
              </Button>
            </div>
          </Card>
        </footer>
      </Container>
    </>
  )
}
