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
                // Deep Cosmos Palette
                'dark-bg': '#030712',      // Almost black
                'dark-surface': '#0f1429', // Slight blue tint

                // Neon Accents
                'neon-cyan': '#00f5ff',
                'neon-purple': '#7c3aed',
                'neon-pink': '#ff0080',
                'neon-green': '#00ff9d',
                'neon-yellow': '#ffea00',
                'neon-orange': '#ff9500',
                'neon-danger': '#ff3333',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'sans-serif'],
                mono: ['var(--font-fira-code)', 'monospace'],
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                'neon': '0 0 20px rgba(0, 245, 255, 0.5)',
                'glow': '0 0 40px rgba(124, 58, 237, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'cosmos': 'linear-gradient(to bottom right, #0a0e27, #1c1c3c)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    'from': { backgroundPosition: '0 0' },
                    'to': { backgroundPosition: '-200% 0' },
                }
            }
        },
    },
    plugins: [],
}
export default config
