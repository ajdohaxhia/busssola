"use client";

import { Lesson } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MoveRight, MoveLeft } from "lucide-react";
import { motion } from "framer-motion";

interface LessonViewProps {
    lesson: Lesson;
    onNext: () => void;
    onPrev: () => void;
    hasPrev: boolean;
    isLast: boolean;
}

export function LessonView({ lesson, onNext, onPrev, hasPrev, isLast }: LessonViewProps) {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="min-h-[60vh] flex flex-col"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-neon-yellow">
                    {lesson.title}
                </h1>

                <div className="prose prose-invert prose-lg max-w-none flex-1 text-gray-300">
                    {lesson.content}
                </div>

                <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
                    <Button
                        variant="ghost"
                        onClick={onPrev}
                        disabled={!hasPrev}
                        className={!hasPrev ? "invisible" : ""}
                    >
                        <MoveLeft className="mr-2 h-4 w-4" /> Indietro
                    </Button>

                    <Button onClick={onNext} variant="neon">
                        {isLast ? "Vai ai Giochi" : "Prossima Lezione"} <MoveRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
