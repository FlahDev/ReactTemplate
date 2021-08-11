// libs
import React, { DefaultChildren } from 'react'

import { Providers, GlobalStyles } from './'

export function Application({ children }: DefaultChildren): JSX.Element {
	return (
		<Providers>
			<GlobalStyles />
			{children}
		</Providers>
	)
}
