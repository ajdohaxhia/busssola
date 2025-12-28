import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Phone, Globe, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AiutoPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold mb-8">Risorse e Supporto</h1>

            <div className="grid gap-6">
                <Card className="border-neon-pink/50 bg-neon-pink/5">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-neon-pink">
                            <ShieldAlert /> Emergenza Immediata
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">Se sei in pericolo immediato o qualcuno ti sta minacciando fisicamente:</p>
                        <Button variant="destructive" className="w-full text-lg font-bold" asChild>
                            <a href="tel:112">CHIAMA IL 112</a>
                        </Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Supporto Psicologico & Segnalazioni</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Phone className="text-neon-yellow" />
                                <div>
                                    <h3 className="font-bold">Telefono Azzurro</h3>
                                    <p className="text-sm text-white/60">Per ascolto e supporto 24/7</p>
                                </div>
                            </div>
                            <Button variant="outline" asChild><a href="tel:19696">1.96.96</a></Button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Globe className="text-neon-mint" />
                                <div>
                                    <h3 className="font-bold">Polizia Postale</h3>
                                    <p className="text-sm text-white/60">Per denunciare crimini online</p>
                                </div>
                            </div>
                            <Button variant="outline" asChild><a href="https://www.commissariatodips.it" target="_blank">Sito Web</a></Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
