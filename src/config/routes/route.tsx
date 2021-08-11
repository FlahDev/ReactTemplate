// libs
import React from 'react'
import { Route as DftRoute } from 'react-router-dom'
import { RoutesParams } from 'types'

import { ThemeContainer } from './'

export function Route({ container, ...props }: RoutesParams) {
	if (container) {
		return ThemeContainer({ container, ...props })
	}

	return <DftRoute {...props} />
}
