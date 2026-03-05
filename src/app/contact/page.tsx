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
        <Container size="full" className="py-16 space-y-24">
            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-6 max-w-3xl mx-auto"
            >
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                    <span className="text-gradient-purple">Contattaci</span>
                </h1>
                <p className="text-xl text-white/50 leading-relaxed">
                    Hai domande, suggerimenti o vuoi collaborare? Siamo qui per te.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-8"
                >
                    {[
                        {
                            icon: Mail,
                            title: 'Email',
                            value: 'info@bussola.edu',
                            color: 'text-neon-cyan',
                            bg: 'bg-neon-cyan/10',
                        },
                        {
                            icon: MessageCircle,
                            title: 'Chat',
                            value: 'Disponibile 24/7',
                            color: 'text-neon-purple',
                            bg: 'bg-neon-purple/10',
                        },
                        {
                            icon: MapPin,
                            title: 'Sede',
                            value: 'Italia',
                            color: 'text-neon-pink',
                            bg: 'bg-neon-pink/10',
                        },
                        {
                            icon: Phone,
                            title: 'Emergenze',
                            value: 'Bottone SOS nell\'app',
                            color: 'text-neon-yellow',
                            bg: 'bg-neon-yellow/10',
                        },
                    ].map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="p-6 flex items-center gap-6 border-white/5 bg-white/[0.02]" hoverEffect glowColor="cyan">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${info.bg} ${info.color}`}>
                                    <info.icon className="w-7 h-7" strokeWidth={2} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">{info.title}</div>
                                    <div className="text-lg font-bold text-white">{info.value}</div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3"
                >
                    <Card className="p-8 md:p-12 border-white/5 bg-white/[0.02]" hoverEffect={false}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Nome</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                                        placeholder="email@esempio.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Oggetto</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all"
                                    placeholder="Di cosa vuoi parlare?"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Messaggio</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/20 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all resize-none"
                                    placeholder="Scrivi il tuo messaggio..."
                                />
                            </div>
                            <Button variant="cyan" size="lg" className="w-full rounded-2xl text-lg font-black">
                                <Send className="w-5 h-5 mr-3" />
                                INVIA MESSAGGIO
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Container>
    )
}
