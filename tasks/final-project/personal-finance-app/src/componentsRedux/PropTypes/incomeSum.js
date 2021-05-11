import React from 'react'
import PropTypes from 'prop-types'

const IncomeSum = (props) => (
      <>
        <h2 className="main-menu_item_title">Incomes</h2>
        <div className="income_number">{props.incomeSum/100} $</div>
      </>

    )
IncomeSum.propTypes = {
  incomeSum: PropTypes.number.isRequired
}


export default IncomeSum
