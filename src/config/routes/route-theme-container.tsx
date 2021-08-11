// libs
import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

// types
import { RoutesParams } from 'types'

export function ThemeContainer({
	container,
	...props
}: RoutesParams): JSX.Element {
	switch (container) {
		case 'none': {
			return <Route {...props} />
		}

		default: {
			return (
				<Container>
					<Route {...props} />
				</Container>
			)
		}
	}
}
