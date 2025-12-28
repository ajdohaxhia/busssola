"use client";

import { MODULES } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MoveRight, CheckCircle2, Circle } from "lucide-react";
import Link from "next/link";
import { useGameStore } from "@/store/useGameStore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { modules } = useGameStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-neon-violet/20 to-neon-pink/20 p-8 md:p-12 border border-white/10">
        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Non sei da solo.
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-lg">
            Impara a proteggerti davvero online. Niente prediche, solo tattiche reali contro predatori, truffe e manipolazione.
          </p>
          <Button size="lg" variant="neon" asChild>
            <Link href="/moduli/m1-predatori">
              Inizia il Viaggio <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        {/* Abstract shapes background could go here */}
      </section>

      {/* Grid */}
      <h2 className="text-2xl font-bold tracking-tight">I Tuoi Moduli</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MODULES.map((module, index) => {
          const progress = modules[module.id];
          const isCompleted = progress?.completed;
          const isStarted = progress && progress.lessonsViewed && progress.lessonsViewed.length > 0;

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col hover:border-neon-yellow/50 transition-colors group">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-neon-yellow/20 transition-colors">
                      <Icon name={module.icon} className="h-6 w-6 text-neon-yellow" />
                    </div>
                    {isCompleted ? (
                      <Badge variant="neon" className="bg-neon-mint text-dark-900"><CheckCircle2 className="h-3 w-3 mr-1" /> Fatto</Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">{module.difficulty}</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base">{module.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={isCompleted ? "outline" : "default"} asChild>
                    <Link href={`/moduli/${module.id}`}>
                      {isCompleted ? "Ripassa" : (isStarted ? "Continua" : "Inizia")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
