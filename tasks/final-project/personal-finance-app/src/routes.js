import HomePage from './template/pages/home'
import ChartPage from './template/pages/chart-page'

export const routes = [
  {
    path: "/",
    exact: true,
    main: HomePage
  },
  {
    path: "/chart",
    main: ChartPage
  },
]
