'use client'

import { motion } from 'framer-motion'
import { Mail, Send, MapPin, Phone, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function ContactPage() {
    return (
        <Container size="md" className="py-16 md:py-24 space-y-16">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 max-w-2xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-display font-semibold text-foreground tracking-tight leading-tight">
                    Contattaci
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                    Hai domande, suggerimenti o vuoi collaborare? Siamo qui per ascoltarti. Compila il form qui sotto o usa uno dei nostri canali diretti.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-6"
                >
                    {[
                        {
                            icon: Mail,
                            title: 'Email',
                            value: 'info@busssola.com',
                            color: 'text-primary',
                            bg: 'bg-primary/10',
                        },
                        {
                            icon: Clock,
                            title: 'Tempo di risposta',
                            value: 'Entro 2-3 giorni lavorativi',
                            color: 'text-purple-600',
                            bg: 'bg-purple-50',
                        },
                        {
                            icon: MapPin,
                            title: 'Sede Principale',
                            value: 'Milano, Italia',
                            color: 'text-emerald-600',
                            bg: 'bg-emerald-50',
                        },
                        {
                            icon: Phone,
                            title: 'Emergenze',
                            value: 'Consulta la sezione SOS',
                            color: 'text-sos',
                            bg: 'bg-[#fef2f2]',
                        },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="p-6 flex items-start gap-5 rounded-2xl border border-border bg-surface shadow-sm hover:border-primary/30 transition-all">
                                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${info.bg} ${info.color}`}>
                                    <info.icon className="w-6 h-6" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider">{info.title}</div>
                                    <div className="text-base font-medium text-foreground">{info.value}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Options - Honest Static Implementation */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 space-y-6"
                >
                    <div className="p-8 md:p-10 rounded-3xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold tracking-tight text-foreground">Inviaci un'email</h3>
                                <p className="text-secondary leading-relaxed">
                                    Al momento non utilizziamo un modulo di contatto automatico per garantire la massima privacy e sicurezza ed evitare lo stoccaggio di dati personali sui server. 
                                </p>
                            </div>

                            <div className="pt-4 space-y-4">
                                <a 
                                    href="mailto:scuole@busssola.com?subject=Richiesta%20Materiali%20Scuole"
                                    className="flex items-center justify-between p-5 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                                >
                                    <div>
                                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">Educatori e Scuole</div>
                                        <div className="text-sm text-secondary">scuole@busssola.com</div>
                                    </div>
                                    <Send className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                                </a>

                                <a 
                                    href="mailto:privacy@busssola.com?subject=Richiesta%20Trasparenza"
                                    className="flex items-center justify-between p-5 rounded-2xl border border-border hover:border-emerald-500/50 hover:bg-emerald-50 transition-all group"
                                >
                                    <div>
                                        <div className="font-semibold text-foreground group-hover:text-emerald-600 transition-colors">Privacy e Dati</div>
                                        <div className="text-sm text-secondary">privacy@busssola.com</div>
                                    </div>
                                    <Send className="w-5 h-5 text-secondary group-hover:text-emerald-600 transition-colors" />
                                </a>

                                <a 
                                    href="mailto:info@busssola.com?subject=Informazioni%20Generali"
                                    className="flex items-center justify-between p-5 rounded-2xl border border-border hover:border-purple-500/50 hover:bg-purple-50 transition-all group"
                                >
                                    <div>
                                        <div className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">Informazioni Generali</div>
                                        <div className="text-sm text-secondary">info@busssola.com</div>
                                    </div>
                                    <Send className="w-5 h-5 text-secondary group-hover:text-purple-600 transition-colors" />
                                </a>
                            </div>

                            <div className="pt-6 border-t border-border/50">
                                <p className="text-sm text-secondary flex items-start gap-2">
                                    <Phone className="w-4 h-4 shrink-0 mt-0.5" /> 
                                    <span>Se ci stai contattando per un'emergenza in corso, non usare l'email. Visita la <strong>pagina SOS</strong> per trovare i numeri diretti delle Forze dell'Ordine.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Container>
    )
}
