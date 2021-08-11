import { RouteProps } from 'react-router'

export interface RoutesParams extends RouteProps {
	container?: 'default' | 'none'
}
