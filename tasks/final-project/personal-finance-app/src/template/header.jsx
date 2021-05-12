import '../style/header.css'
import { MenuOutlined, } from '@ant-design/icons'
import React from 'react'
import { ReactComponent as Logo } from '../style/logo-ubuntu.svg'
import { Link } from 'react-router-dom'
import { AddIncomeCmp } from '../componentsRedux/components/addIncome'
import IncomeContainer from '../containersRedux/incomeContainer'
import PaymentContainer from '../containersRedux/paymentContainer'
import BalanceContainer from '../containersRedux/balanceContainer'

function HeaderApp() {
  return (
    <>
      <header className="header">
        <Link to="/"><Logo className="logo"/></Link>
        <button className="btn-mobile-menu"><MenuOutlined/></button>
        <nav className="header_main-menu">
          <div className="header_main-menu_item">
            <BalanceContainer/>
          </div>

          <div className="header_main-menu_item">
            <PaymentContainer/>
          </div>

          <div className="header_main-menu_item">
            <IncomeContainer/>
          </div>

          <div className="btn-add-income">
            <AddIncomeCmp/>
          </div>

        </nav>
      </header>
    </>
  )
}

export default HeaderApp
