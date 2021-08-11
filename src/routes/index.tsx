// libs
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Route } from 'config'

// routes
// import * as PagesRoutes from './routes'
import { NotFoundRoutes } from './notFound.routes'

export function Routes(): JSX.Element {
	const routes = []
	routes.push(...NotFoundRoutes)
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((m, k) => (
					<Route key={k} {...m} />
				))}
			</Switch>
		</BrowserRouter>
	)
}
