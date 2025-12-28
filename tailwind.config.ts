import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                neon: {
                    yellow: '#ccff00',
                    mint: '#00ff88',
                    orange: '#ff6b35',
                    pink: '#ff0066',
                    violet: '#8a2be2',
                },
                dark: {
                    900: '#0a0a0a',
                    800: '#1a1a1a',
                    700: '#2a2a2a',
                },
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            boxShadow: {
                neon: '0 0 20px rgba(204, 255, 0, 0.3)',
                'neon-pink': '0 0 20px rgba(255, 0, 102, 0.3)',
            },
            animation: {
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
        },
    },
    plugins: [],
}
export default config
