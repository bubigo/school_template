import React from 'react'
import PropTypes from 'prop-types'

const BalanceResult = ({balanceResult}) => (
  <>
    <h2 className="main-menu_item_title">Balance</h2>
    <div className="income_number">{balanceResult/100} $</div>
  </>
)
BalanceResult.propTypes = {
  balanceResult: PropTypes.number.isRequired
}


export default BalanceResult
