import React from 'react'
import PropTypes from 'prop-types'

const PaymentSum = (props) => (
  <>
    <h2 className="main-menu_item_title">Payments</h2>
    <div className="income_number">{props.paymentSum/100} $</div>
  </>
)
PaymentSum.propTypes = {
  paymentSum: PropTypes.number.isRequired
}

export default PaymentSum
