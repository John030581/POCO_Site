/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {

			animation: {
				fade: 'fadeIn .5s ease-in-out',
				right: 'rightIn .2s ease-in-out',
				left: 'leftIn .2s ease-in-out',
				top: 'topIn .3s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				rightIn: {
					from: { left: '-60px' },
					to: { left: '0px' },
				},
				topIn: {
					from: { top: '-80px' },
					to: { top: '0px' },
				},
				leftIn: {
					from: { right: '-60px' },
					to: { right: '0px' },
				},
			},
		},
	},
	plugins: [],
}