import { connect } from 'react-redux'
import PaymentSum from '../componentsRedux/PropTypes/paymentSum'

const mapStateToProps = state => ({
  paymentSum: state.payments.list ? state.payments.list.reduce( (sum, current) => {
    return sum + current.payment
  }, 0) : 0
})

export default connect(
  mapStateToProps,
)(PaymentSum)
