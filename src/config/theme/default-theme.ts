import { DefaultTheme, ColorsTheme } from 'styled-components'

export class ColorsClass implements ColorsTheme {
	public readonly primary = '#00f'
	public readonly secondary = '#fa0'
	public readonly success = '#0f0'
	public readonly error = '#f00'
	public readonly black = '#353535'
	public readonly white = '#ddd'
	public readonly backgroundPrimary = '#e1e2e1'
}

export const Colors = new ColorsClass()

export const defaultTheme: DefaultTheme = {
	colos: Colors,
	font: {
		family: 'Poppins'
	}
}
