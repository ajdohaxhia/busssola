import { ModuleContent } from "@/types/content";
import { m1 } from "@/data/modules/m1-predatori";
import { m2 } from "@/data/modules/m2-privacy";
import { m3 } from "@/data/modules/m3-phishing";
import { m4 } from "@/data/modules/m4-cyberbullismo";
import { m5 } from "@/data/modules/m5-addiction";
import { m6 } from "@/data/modules/m6-gdpr";
import { m7 } from "@/data/modules/m7-scuola";
import { m8 } from "@/data/modules/m8-gaming";
import { m9 } from "@/data/modules/m9-ai-deepfake";
import { m10 } from "@/data/modules/m10-finance";
import { m11 } from "@/data/modules/m11-sexting";
import { m12 } from "@/data/modules/m12-rights";
import { m13 } from "@/data/modules/m13-salute";
// We will import others as we create them
// import { m2 } from "@/data/modules/m2-privacy";

// export const ALL_CONTENT: Record<string, ModuleContent> = {
export const MODULES_DATA: Record<string, ModuleContent> = {
    [m1.id]: m1,
    [m2.id]: m2,
    [m3.id]: m3,
    [m4.id]: m4,
    [m5.id]: m5,
    [m6.id]: m6,
    [m7.id]: m7,
    [m8.id]: m8,
    [m9.id]: m9,
    [m10.id]: m10,
    [m11.id]: m11,
    [m12.id]: m12,
    [m13.id]: m13,
};

// Helper for GameContainer to get game config without full content load if needed, 
// though for this app size keeping it all in memory is fine.
export const MODULE_GAMES = Object.fromEntries(
    Object.values(MODULES_DATA).map(m => [m.id, m.game])
);
