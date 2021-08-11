// libs
import { createTheme } from '@material-ui/core'
import { ptBR } from '@material-ui/core/locale'
import type {} from '@material-ui/lab/themeAugmentation'

// settings
import { defaultTheme } from './'

export const MaterialTheme = createTheme(
	{
		palette: {
			primary: { main: defaultTheme.colos.primary },
			secondary: { main: defaultTheme.colos.secondary },
			success: { main: defaultTheme.colos.success },
			error: { main: defaultTheme.colos.error },
			common: {
				black: defaultTheme.colos.black,
				white: defaultTheme.colos.white
			}
		},
		typography: {
			allVariants: {
				fontFamily: defaultTheme.font.family
			}
		}
	},
	ptBR
)
