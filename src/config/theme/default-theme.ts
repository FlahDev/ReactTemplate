import { DefaultTheme, ColorsTheme } from 'styled-components'

export class ColorsClass implements ColorsTheme {
	public readonly primary = 'blue'
	public readonly secondary = 'orange'
	public readonly success = 'green'
	public readonly error = 'red'
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
