"use client";


import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LessonView } from "@/components/moduli/LessonView";
import { GameContainer } from "@/components/moduli/GameContainer";
import { useGameStore } from "@/store/useGameStore";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { MODULES } from "@/lib/constants";
import Link from "next/link";
import { MODULES_DATA, MODULE_GAMES } from "@/data/modules";
import { MoveLeft } from "lucide-react";

export default function ModulePage({ params }: { params: { moduleId: string } }) {
    const router = useRouter();
    const { moduleId } = params;

    const content = MODULES_DATA[moduleId];
    const moduleMeta = MODULES.find(m => m.id === moduleId);
    const { markLessonViewed, completeModule } = useGameStore();

    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [mode, setMode] = useState<'lessons' | 'game'>('lessons');

    if (!content) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
                <Icon name="AlertTriangle" className="h-16 w-16 text-neon-orange mb-4" />
                <h1 className="text-3xl font-bold mb-2">Modulo in costruzione</h1>
                <p className="text-white/60 mb-8">Questo modulo non è ancora disponibile nella versione preview.</p>
                <Button asChild><Link href="/">Torna alla Dashboard</Link></Button>
            </div>
        );
    }

    const currentLesson = content.lessons[currentLessonIndex];
    const isLastLesson = currentLessonIndex === content.lessons.length - 1;

    useEffect(() => {
        if (currentLesson) {
            markLessonViewed(moduleId, currentLesson.id);
        }
    }, [currentLesson, moduleId, markLessonViewed]);

    const handleNext = () => {
        if (isLastLesson) {
            setMode('game');
        } else {
            setCurrentLessonIndex(i => i + 1);
            window.scrollTo(0, 0);
        }
    };

    const handlePrev = () => {
        if (currentLessonIndex > 0) {
            setCurrentLessonIndex(i => i - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleGameComplete = () => {
        completeModule(moduleId, 100, 500); // Mock score
        router.push('/profilo'); // Or show celebration modal
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/"><MoveLeft /></Link>
                </Button>
                <div>
                    <h2 className="text-sm text-neon-yellow uppercase tracking-wider font-bold">{moduleMeta?.title}</h2>
                    <div className="flex gap-2 mt-1">
                        <Badge variant="secondary">{currentLessonIndex + 1}/{content.lessons.length} Lezioni</Badge>
                        {mode === 'game' && <Badge variant="neon">Fase Pratica</Badge>}
                    </div>
                </div>
            </div>

            {mode === 'lessons' ? (
                <LessonView
                    lesson={currentLesson}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    hasPrev={currentLessonIndex > 0}
                    isLast={isLastLesson}
                />
            ) : (
                <GameContainer
                    moduleId={moduleId}
                    onComplete={handleGameComplete}
                    onBack={() => setMode('lessons')}
                />
            )}
        </div>
    );
}
