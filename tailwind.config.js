/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary-70': '#B34B1E',
                'gray-scale': '#727272',
                'gray-scale-5': '#D9D9D9',
                'gray-scale-1': '#B7B7B7',
            },
            fontFamily: {
                tomatoes: ['Tomatoes', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
