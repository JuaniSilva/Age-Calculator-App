/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'primary-purple': 'hsl(259, 100%, 65%)',
				'primary-light-red': 'hsl(0, 100%, 67%)',
				'neutral-off-white': 'hsl(0, 0%, 94%)',
				'neutral-light-grey': 'hsl(0, 0%, 86%)',
				'neutral-smokey-grey': 'hsl(0, 1%, 44%)',
				'neutral-off-black': 'hsl(0, 0%, 8%)',
				'attribution': 'hsl(228, 45%, 44%)',
			},
			fontSize: {
				'inputs': '2rem',
				'dynamic': 'clamp(3rem, 3.5rem + 2.5vw, 5rem)'
			},
			fontFamily: {
				'poppins': ['poppins', 'sans-serif']
			},
		},
	},
	plugins: [],
}
