/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Roboto']
		},
		extend: {
			textUnderlineOffset: {
				6: '6px'
			}
		}
	},
	plugins: []
};
