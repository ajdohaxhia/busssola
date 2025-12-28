"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, User } from "lucide-react";

export interface ChatScenario {
    initialMessage: string;
    nodes: Record<string, {
        text: string;
        sender: 'bot' | 'user';
        options?: { label: string; nextId: string; score?: number }[];
        isEnding?: boolean;
        feedback?: string; // Feedback shown at ending
    }>;
}

interface ChatGameProps {
    scenario: ChatScenario;
    onComplete: (score: number) => void;
}

export function ChatGame({ scenario, onComplete }: ChatGameProps) {
    const [currentNodeId, setCurrentNodeId] = useState<string>('root'); // Assumes 'root' is start, or use initialMessage logic
    const [history, setHistory] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
        { text: scenario.initialMessage, sender: 'bot' }
    ]);
    const [score, setScore] = useState(0);

    // If initial state is complex, we might need a mapping. 
    // Let's assume scenario.nodes['start'] is the first RESPONSE node after initial message if options exist immediately?
    // Actually, standardizing: 'start' is the first node.

    const currentNode = scenario.nodes[currentNodeId];

    const handleOptionClick = (option: { label: string; nextId: string; score?: number }) => {
        // Add user choice to history
        const newHistory = [
            ...history,
            { text: option.label, sender: 'user' as const }
        ];

        // Calculate score
        const newScore = score + (option.score || 0);
        setScore(newScore);

        // Process next node
        const nextNode = scenario.nodes[option.nextId];

        // Simulate delay for bot response
        setTimeout(() => {
            setHistory(prev => [...prev, { text: nextNode.text, sender: 'bot' as const }]);
            setCurrentNodeId(option.nextId);

            if (nextNode.isEnding) {
                setTimeout(() => onComplete(newScore), 2000);
            }
        }, 600);

        setHistory(newHistory);
    };

    return (
        <div className="flex flex-col h-[500px] max-w-2xl mx-auto">
            <div className="flex-1 overflow-y-auto p-4 space-y-4 rounded-lg bg-black/20 mb-4 border border-white/5">
                {history.map((msg, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user'
                                    ? 'bg-neon-violet/20 text-white rounded-tr-none border border-neon-violet/50'
                                    : 'bg-dark-700 text-white rounded-tl-none border border-white/10'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {currentNode?.isEnding && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-neon-mint/10 border border-neon-mint rounded-lg text-center">
                        <p className="font-bold text-neon-mint">Scenario Completato!</p>
                        <p className="text-sm">{currentNode.feedback}</p>
                    </motion.div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentNode?.options?.map((opt, idx) => (
                    <Button
                        key={idx}
                        variant="outline"
                        className="h-auto whitespace-normal py-3 text-left hover:bg-white/10 hover:border-neon-yellow"
                        onClick={() => handleOptionClick(opt)}
                        disabled={currentNode.isEnding}
                    >
                        {opt.label}
                    </Button>
                ))}
            </div>
        </div>
    );
}
