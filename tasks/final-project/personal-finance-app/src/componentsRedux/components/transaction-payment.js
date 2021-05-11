import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import {} from '../../style/transaction.css'
import { mapDispatchToProps } from '../../reducersRedux'
import { connect } from 'react-redux'
export const TransactionPayment = (props) => {
  const deletePayment = () =>{
    props.deletePaymentMapDispatch(props.time, props.payment)
  }
  return (
    <>
      <li className="history_item history_payment" key={props.time}>
        <p className="history_category">{props.name}</p>
        <Button className="history_delete" onClick={deletePayment}><CloseCircleFilled /></Button>
        <time className="history_date">{props.time.toLocaleString()}</time>
        <p className="history_spend">{props.payment/100} $</p>
      </li>
    </>
  )
}
export const TransactionPaymentCmp = connect(null, mapDispatchToProps)(TransactionPayment)
