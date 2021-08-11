import 'styled-components'

declare module 'styled-components' {
	export interface ColorsTheme {
		primary: string
		secondary: string
		backgroundPrimary: string
		white: string
		black: string
		success: string
		error: string
	}

	export interface DefaultTheme {
		font: {
			family: string
		}

		colos: ColorsTheme
	}
}
