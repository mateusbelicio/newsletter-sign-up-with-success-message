const getHSLColor = (h, s, l, a = 1) => `hsl(${h} ${s}% ${l}% / ${a})`;

export const theme = {
	colors: {
		accent: getHSLColor(4, 100, 67),
		accentTint: getHSLColor(5, 100, 95),
		accentTranparent: getHSLColor(4, 100, 67, 0.5),
		backgroundBody: getHSLColor(235, 17, 25),
		backgroundFrame: getHSLColor(0, 0, 100),
		backgroundFrameInverse: getHSLColor(0, 0, 7),
		text: getHSLColor(234, 29, 20),
		textInverse: getHSLColor(0, 0, 100),
		gray: getHSLColor(234, 28, 13, 0.25),
		grayTint: getHSLColor(0, 0, 70)
	},
	gradients: {
		primary: `linear-gradient(-135deg ,${getHSLColor(14, 100, 61)}, ${getHSLColor(346, 100, 66)})`
	},
	shadows: {
		smooth: `0 1.5rem 2rem 0 ${getHSLColor(0, 0, 0, 0.1)}`,
		default: `0 1rem 3.75rem 0 ${getHSLColor(0, 0, 0, 0.25)}`,
		accent: `0 1.5rem 2rem 0 ${getHSLColor(4, 100, 67, 0.5)}`
	},
	borderRadius: {
		small: '0.25rem',
		default: '0.5rem',
		large: '2.25rem',
		full: '50rem'
	},
	typography: {
		type: {
			sans: '"Roboto", sans-serif'
		},
		size: {
			small: '0.75rem',
			normal: '1rem',
			medium: '1.5rem',
			large: '2.5rem',
			xLarge: '3.5rem'
		},
		weight: {
			normal: 400,
			bold: 700
		}
	}
};

// MEDIA QUERY CONFIG
const size = {
	mobile: 375,
	tablet: 768,
	laptop: 1024,
	desktop: 1440,
};

export const device = {
	mobile: `(min-width: ${size.mobile / 16}rem)`,
	tablet: `(min-width: ${size.tablet / 16}rem)`,
	laptop: `(min-width: ${size.laptop / 16}rem)`,
	desktop: `(min-width: ${size.desktop / 16}rem)`,
};