import { connect } from 'react-redux'
import BalanceResult from '../componentsRedux/PropTypes/balanceResult'


const mapStateToProps = state => ({
  balanceResult:
    state.incomes.list.reduce((sum, current) => {
    return sum + current.income
  }, 0)
    -
    state.payments.list.reduce((sum, current) => {
    return sum + current.payment
  }, 0)
})

export default connect(
  mapStateToProps,
)(BalanceResult)
