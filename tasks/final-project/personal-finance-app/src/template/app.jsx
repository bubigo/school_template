import React from 'react'
import '../style/nav.css'
import '../style/app.css'
import {
  Switch,
  Route,
  Link
} from "react-router-dom"
import { PieChartFilled, HomeFilled } from '@ant-design/icons'
import { routes } from '../routes'
import  {AllTransactionsModal} from '../componentsRedux/components/allTransactionsModal'

export default function App() {
  return (
      <div className="layout">
        <div className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/"><HomeFilled className="navbar-icon"/></Link>
            </li>
            <li>
              <Link to="/chart">
                <PieChartFilled className="navbar-icon"/>
              </Link>
            </li>
            <li>
              <AllTransactionsModal />
            </li>
          </ul>

        </div>

        <div className="content">
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different componentsRedux this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
  )
}
