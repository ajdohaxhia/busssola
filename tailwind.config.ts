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
                'deep-blue': '#0f1a35',
                cyan: {
                    300: '#6dd9ff',
                    400: '#4db8e8',
                },
                blue: {
                    900: '#1a2f5a',
                    800: '#2d4a8a',
                    700: '#3d5fa8',
                    600: '#4d7ac4',
                    500: '#5e8dd8',
                }
            },
            fontFamily: {
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            },
            boxShadow: {
                glass: '0 8px 32px 0 rgba(15, 26, 53, 0.37)',
                'blue-glow': '0 0 25px rgba(77, 184, 232, 0.4)',
                'inner-glass': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
        },
    },
    plugins: [],
}
export default config
