import type { Config } from 'tailwindcss';

const config: Config = {
       content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
       theme: {
              extend: {
                     backgroundImage: {
                            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                     },
                     colors: {
                            primary: '#2375D0',
                            title: '#4E4E4E',
                            subtitle: '#6B6B6B',
                     },
                     container: {
                            center: true,
                            padding: '0.5rem',
                            screens: {
                                   sm: '640px',
                                   md: '768px',
                                   lg: '1024px',
                                   xl: '1280px',
                            },
                     },
              },
       },
       plugins: [],
};
export default config;
