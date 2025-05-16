/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary-main)',
                    main: 'var(--color-primary-main)',
                    dark: 'var(--color-primary-dark)',
                    light: 'var(--color-primary-light)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary-main)',
                    main: 'var(--color-secondary-main)',
                    dark: 'var(--color-secondary-dark)',
                    light: 'var(--color-secondary-light)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    light: 'var(--color-text-light)',
                },
                background: {
                    main: 'var(--color-background-main)',
                    alt: 'var(--color-background-alt)',
                    dark: 'var(--color-background-dark)',
                },
                accent: {
                    success: 'var(--color-accent-success)',
                    warning: 'var(--color-accent-warning)',
                    error: 'var(--color-accent-error)',
                    info: 'var(--color-accent-info)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
} 