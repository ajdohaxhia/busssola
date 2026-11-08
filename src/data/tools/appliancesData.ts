export interface ApplianceItem {
    id: string
    name: string
    category: 'clima' | 'lavaggio' | 'cucina' | 'freddo' | 'acqua' | 'elettronica'
    averageWattage: number // average Watt power
    defaultHoursOrCyclesDaily: number
    unitType: 'ore' | 'cicli'
    efficiencyTip: string
    iconName: string
}

export const APPLIANCES_LIST: ApplianceItem[] = [
    {
        id: 'condizionatore',
        name: 'Condizionatore / Climatizzatore Inverter (9000-12000 BTU)',
        category: 'clima',
        averageWattage: 900,
        defaultHoursOrCyclesDaily: 5,
        unitType: 'ore',
        efficiencyTip: 'Imposta la temperatura a non più di 5-6°C in meno rispetto all’esterno ed evita di scendere sotto i 25°C in estate. Usa la funzione "Deumidificatore" per tagliare i consumi fino al 30%.',
        iconName: 'Wind',
    },
    {
        id: 'pompa-calore',
        name: 'Pompa di Calore per Riscaldamento Invernale',
        category: 'clima',
        averageWattage: 1600,
        defaultHoursOrCyclesDaily: 6,
        unitType: 'ore',
        efficiencyTip: 'Mantieni una temperatura costante intorno ai 19-20°C senza spegnere e riaccendere continuamente a piena potenza: l’inverter lavora con massima efficienza nei carichi parziali continui.',
        iconName: 'Flame',
    },
    {
        id: 'lavatrice',
        name: 'Lavatrice (Carico 7-9 kg)',
        category: 'lavaggio',
        averageWattage: 1100, // equivalent ~1.1 kWh per eco cycle
        defaultHoursOrCyclesDaily: 1,
        unitType: 'cicli',
        efficiencyTip: 'Lavare a 30°C o 40°C consuma fino a un terzo dell’energia rispetto a un lavaggio a 60°C, poiché circa il 90% dell’elettricità serve a scaldare l’acqua. Usa il programma Eco 40-60 a pieno carico.',
        iconName: 'Shirt',
    },
    {
        id: 'asciugatrice',
        name: 'Asciugatrice a Pompa di Calore',
        category: 'lavaggio',
        averageWattage: 1300,
        defaultHoursOrCyclesDaily: 1,
        unitType: 'cicli',
        efficiencyTip: 'Centrifuga i panni in lavatrice ad almeno 1.000 o 1.200 giri prima dell’asciugatura per rimuovere la maggior parte dell’acqua e dimezzare il tempo di funzionamento del ciclo.',
        iconName: 'Sun',
    },
    {
        id: 'lavastoviglie',
        name: 'Lavastoviglie (12-14 coperti)',
        category: 'cucina',
        averageWattage: 1000,
        defaultHoursOrCyclesDaily: 1,
        unitType: 'cicli',
        efficiencyTip: 'Usa sempre il programma Eco: anche se dura più a lungo, riscalda l’acqua a temperature più basse (50°C) garantendo un risparmio energetico del 20-30% rispetto ai cicli rapidi o intensivi.',
        iconName: 'Utensils',
    },
    {
        id: 'frigorifero',
        name: 'Frigorifero Combinato (Funzionamento Continuo 24/7)',
        category: 'freddo',
        averageWattage: 40, // average continuous power draw (~0.95 kWh/day)
        defaultHoursOrCyclesDaily: 24,
        unitType: 'ore',
        efficiencyTip: 'Regola il termostato a +4°C per il vano frigo e -18°C per il congelatore. Ogni grado in meno fa aumentare i consumi del 6-8%. Tieni pulita la serpentina posteriore e sbrina periodicamente.',
        iconName: 'Snowflake',
    },
    {
        id: 'scaldabagno-elettrico',
        name: 'Scaldabagno Elettrico Tradizionale (Boiler 80 Litri)',
        category: 'acqua',
        averageWattage: 1200,
        defaultHoursOrCyclesDaily: 3.5,
        unitType: 'ore',
        efficiencyTip: 'È uno degli elettrodomestici più energivori della casa. Imposta il termostato a 55°C e installa un timer meccanico o presa smart per accenderlo solo 2-3 ore prima dell’uso.',
        iconName: 'Droplet',
    },
    {
        id: 'forno-elettrico',
        name: 'Forno Elettrico Ventilato',
        category: 'cucina',
        averageWattage: 1500,
        defaultHoursOrCyclesDaily: 0.8,
        unitType: 'ore',
        efficiencyTip: 'Evita di aprire continuamente lo sportello durante la cottura (ogni apertura disperde fino a 20°C di calore). Spegni il forno 5-10 minuti prima per sfruttare il calore residuo accumulato.',
        iconName: 'Flame',
    },
    {
        id: 'postazione-pc-tv',
        name: 'Postazione PC / Smart TV e Schermi da Lavoro',
        category: 'elettronica',
        averageWattage: 150,
        defaultHoursOrCyclesDaily: 6,
        unitType: 'ore',
        efficiencyTip: 'Evita di lasciare TV, decoder, console e caricatori in standby: le spie luminose e gli alimentatori sempre inseriti possono generare un consumo invisibile di 30-50€ l’anno per famiglia.',
        iconName: 'Tv',
    },
]
