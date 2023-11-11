export const colors = {
	scrim: 'rgba(0, 0, 0, 0.60)',
	surface3_light: '#22222212',
	surface4_light: '#FFFFFF64',
	surface5_light: '#00000004',
	neutral1_light: '#222222',
	neutral2_light: '#7D7D7D',
	neutral3_light: '#CECECE',
	surface1_light: '#FFFFFF',
	surface2_light: '#F9F9F9',
	accent1_light: '#FC72FF',
	accent2_light: '#FFEFFF',
	purple100: '#6C79FF',
	purple150: '#7477F0',
	purple200: '#6E79D6',
	purple250: '#5E6AD2',
	purple300: '#666BE2',
	purple350: '#5C67C7',
	purple400: '#575BC7',
	purple600: '#37466C',
	purple700: '#2A2B51',
	purple800: '#222342',
	purple900: '#161722',
	critical: '#eb5757',
	gray100: '#EEEFFC',
	gray150: '#E0E1EC',
	gray200: '#D2D3E0',
	gray250: '#B0B5C0',
	gray300: '#858699',
	gray350: '#6B6F76',
	gray400: '#8D8BA3',
	gray450: '#858699',
	gray500: '#4C4F6B',
	gray550: '#4D4F69',
	gray600: '#444556',
	gray650: '#3C3D53',
	gray700: '#393A4B',
	gray750: '#313248',
	gray800: '#292B41',
	gray850: '#26293E',
	gray900: '#191A23',
	gray950: '#26273B',
	success: '#40B66B',
	gray960:'#292A35',
	gray970:'#292A35',
	gray50: '#F5F6FC',
	white: '#FFFFFF',
	black: '#000000',
	teal:'#00B2BF',
};
const commonTheme = {
	fontSizes: {
		regularPlus: '0.9375rem',
		microPlus: '0.6875rem',
		smallPlus: '0.8125rem',
		largePlus: '1.125rem',
		regular: '0.9375rem',
		miniPlus: '0.75rem',
		micro: '0.6875rem',
		small: '0.8125rem',
		large: '1.125rem',
		title1: '2.25rem',
		title3: '1.25rem',
		title2: '1.5rem',
		mini: '0.75rem',
	},
	border:{
		regularPlus: '0.9375rem',
		microPlus: '0.6875rem',
		smallPlus: '0.8125rem',
		largePlus: '1.125rem',
		regular: '0.9375rem',
		miniPlus: '0.75rem',
		micro: '0.6875rem',
		small: '0.8125rem',
		large: '1.125rem',
		title1: '2.25rem',
		title3: '1.25rem',
		title2: '1.5rem',
		mini: '0.75rem',
	},
	purple100: colors.purple100,
	purple150: colors.purple150,
	purple200: colors.purple200,
	purple250: colors.purple250,
	purple300: colors.purple300,
	purple350: colors.purple350,
	purple400: colors.purple400,
	purple600: colors.purple600,
	purple700: colors.purple700,
	purple800: colors.purple800,
	purple900:colors.purple900,
	gray100: colors.gray100,
	gray150: colors.gray150,
	gray200: colors.gray200,
	gray250: colors.gray250,
	gray300: colors.gray300,
	gray350: colors.gray350,
	gray400: colors.gray400,
	gray450: colors.gray450,
	gray500: colors.gray500,
	gray550: colors.gray550,
	gray600: colors.gray600,
	gray650: colors.gray650,
	gray700: colors.gray700,
	gray750: colors.gray750,
	gray800: colors.gray800,
	gray850: colors.gray850,
	gray900: colors.gray900,
	gray950: colors.gray950,
	gray960: colors.gray960,
	gray970: colors.gray970,
	gray50: colors.gray50,
	white: colors.white,
	black: colors.black,
	teal: colors.teal,
};
export const lightTheme = {
	...commonTheme,
	neutral1: colors.neutral1_light,

	neutral2: colors.neutral2_light,
	neutral3: colors.neutral3_light,
	surface1: colors.surface1_light,

	surface2: colors.surface2_light,
	surface3: colors.surface3_light,
	surface4: colors.surface4_light,
	surface5: colors.surface5_light,
	accent1: colors.accent1_light,

	accent2: colors.accent2_light,
	critical: colors.critical,

	background: colors.white,
	success: colors.success,
	scrim: colors.scrim,
};
export const darkTheme = {
	...commonTheme,
	neutral2: colors.neutral2_light,
	neutral3: colors.neutral3_light,
	surface1: colors.surface1_light,

	accent1: colors.accent1_light,
	accent2: colors.accent2_light,
	background: colors.gray900,
	critical: colors.critical,
	surface2: colors.gray550,

	surface3: colors.gray650,
	surface4: colors.gray600,

	surface5: colors.gray500,
};