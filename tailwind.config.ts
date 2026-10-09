import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { cream: '#f8f4ee', ink: '#2f2725', rose: '#b86f78', sand: '#e9ded2' }, fontFamily: { sans: ['Arial', 'sans-serif'] } } }, plugins: [] };
export default config;
