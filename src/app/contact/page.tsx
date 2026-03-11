'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Send, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { toast } from 'sonner'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        toast.success('Messaggio inviato con successo!')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <Container size="md" className="py-16 md:py-24 space-y-16">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 max-w-2xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-display font-semibold text-foreground tracking-tight leading-loose">
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
                            value: 'hello@busssola.edu',
                            color: 'text-primary',
                            bg: 'bg-primary/10',
                        },
                        {
                            icon: MessageCircle,
                            title: 'Chat Supporto',
                            value: 'Disponibile 09:00 - 18:00',
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

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3"
                >
                    <div className="p-8 md:p-10 rounded-3xl border border-border bg-surface shadow-sm hover:shadow-md transition-shadow">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Nome completo</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                        placeholder="Mario Rossi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-secondary">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                        placeholder="mario@esempio.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Oggetto</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                    placeholder="Come possiamo aiutarti?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-secondary">Messaggio</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full rounded-xl mt-4">
                                <Send className="w-4 h-4 mr-2" />
                                Invia Messaggio
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </Container>
    )
}
