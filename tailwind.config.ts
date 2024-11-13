import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				body: '#000000',
				theme: '#00c389',
				nav: '#404053',
				secondary: '#9191A4',
				badge: '#3F3F51',
				'input-border': '#565666',
				input: '#2A2A35'
			},
			fontFamily: {
				raleway: ["'Raleway'", 'sans-serif']
			}
		}
	},
	plugins: []
} satisfies Config;
