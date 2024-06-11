import { createStitches } from "@stitches/react";

export const {
	config,
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme
} = createStitches({
	theme: {
		colors: {
			inherit: 'inherit',
			transparent: 'transparent',
			currentColor: 'currentColor',
			white: '#ffffff',
			black: '#0e1116',
			black950: '#000000',
			black900: '#0e1116',
			black800: '#42464d',
			black700: '#565c69',
			black600: '#7f858d',
			black550: '#b6bbc2',
			black500: '#dee0e4',
			black400: '#f2f3f4',
			black300: '#fafafb',
			error: '#D5041A',
			error500: '#D5041A',
			error100: '#ffe5e6',
			success: '#008531',
			success500: '#008531',
			success100: '#e5fff1'
		},
		spacing: {
			0: '0rem',
			2: '0.125rem',
			4: '0.25rem',
			6: '0.375rem',
			8: '0.50rem',
			12: '0.75rem',
			16: '1rem',
			20: '1.25rem',
			24: '1.5rem',
			32: '2rem',
			40: '2.5rem',
			48: '3rem',
			56: '3.5rem',
			64: '4rem',
			72: '4.5rem',
			80: '5rem'
		},
		borderWidht: {
			DEFAULT: '1px',
			none: '0px',
			1: '1px',
			2: '2px',
			4: '4px'
		},
		borderRadius: {
			DEFAULT: '4px',
			none: '0px',
			2: '2px',
			4: '4px',
			8: '8px',
			24: '24px',
			full: '100%'
		},
		screens: {
			tablet: '600px',
			desktop: '1024px',
			desktopLarge: '1440px'
		},
		// keyframes: {
		// 	slideRight: {
		// 		'0%': {
		// 			transform: 'translate(0px, var(--tw-translate-y))',
		// 			opacity: '1'
		// 		},
		// 		'33%': {
		// 			transform: 'translate(10%, var(--tw-translate-y))',
		// 			opacity: '0'
		// 		},
		// 		'66%': {
		// 			transform: 'translate(-10%, var(--tw-translate-y))',
		// 			opacity: '0'
		// 		},
		// 		'100%': {
		// 			transform: 'translate(0px, var(--tw-translate-y))',
		// 			opacity: '1'
		// 		}
		// 	}
		// }
	}
})