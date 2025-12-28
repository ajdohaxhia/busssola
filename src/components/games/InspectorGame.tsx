"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Settings, Shield } from "lucide-react";
import { motion } from "framer-motion";

export interface InspectionItem {
    id: string;
    label: string;
    status: 'enabled' | 'disabled' | 'default';
    correctStatus: 'enabled' | 'disabled';
    feedback: string;
}

interface InspectorGameProps {
    items: InspectionItem[];
    title?: string;
    onComplete: (score: number) => void;
}

export function InspectorGame({ items, title = "Configurazione Sicurezza", onComplete }: InspectorGameProps) {
    const [currentItems, setCurrentItems] = useState(items);
    const [submitted, setSubmitted] = useState(false);

    const toggleItem = (id: string) => {
        if (submitted) return;
        setCurrentItems(prev => prev.map(item => {
            if (item.id !== id) return item;
            // Toggle logic: assuming binary enabled/disabled choices or just 'active' state
            // For simplicity, let's say clicking toggles 'enabled' <-> 'disabled'
            const newStatus = item.status === 'enabled' ? 'disabled' : 'enabled';
            return { ...item, status: newStatus };
        }));
    };

    const checkResults = () => {
        setSubmitted(true);
        // Calculate score
        let correctCount = 0;
        currentItems.forEach(item => {
            if (item.status === item.correctStatus) correctCount++;
        });
        // Delay completion slightly
        setTimeout(() => {
            // Allow user to see results
        }, 500);
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Settings className="text-neon-yellow" /> {title}
            </h2>

            <div className="space-y-3 mb-8">
                {currentItems.map((item) => {
                    const styles = item.status === 'enabled'
                        ? 'bg-neon-mint text-dark-900 border-neon-mint'
                        : 'bg-white/5 border-white/20 text-white/50';

                    const isCorrect = item.status === item.correctStatus;

                    return (
                        <div key={item.id} className="relative">
                            <motion.div
                                className={`p-4 rounded-lg border flex justify-between items-center cursor-pointer transition-all ${styles} ${submitted ? '' : 'hover:border-white/50'}`}
                                onClick={() => toggleItem(item.id)}
                                whileTap={{ scale: 0.99 }}
                            >
                                <span className="font-medium">{item.label}</span>
                                <div className={`w-12 h-6 rounded-full p-0.5 flex ${item.status === 'enabled' ? 'bg-black/20 justify-end' : 'bg-black/40 justify-start'}`}>
                                    <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
                                </div>
                            </motion.div>

                            {submitted && (
                                <div className={`mt-2 text-sm p-3 rounded bg-black/30 border-l-2 ${isCorrect ? 'border-neon-mint text-neon-mint' : 'border-neon-pink text-neon-pink'}`}>
                                    <strong>{isCorrect ? 'Ben fatto!' : 'Attenzione:'}</strong> {item.feedback}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {!submitted ? (
                <Button onClick={checkResults} variant="neon" size="lg" className="w-full">Verifica Configurazione <Shield className="ml-2 h-4 w-4" /></Button>
            ) : (
                <Button onClick={() => onComplete(100)} variant="default" size="lg" className="w-full">Concludi</Button>
            )}
        </div>
    );
}
