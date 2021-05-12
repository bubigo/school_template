import { connect } from 'react-redux'
import IncomeSum from '../componentsRedux/PropTypes/incomeSum'

const mapStateToProps = state => ({
  incomeSum: state.incomes.list ? state.incomes.list.reduce( (sum, current) => {
    return sum + current.income
  }, 0) : 0
})

export default connect(
  mapStateToProps,
)(IncomeSum)
