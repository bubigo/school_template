import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'
import '../../style/transaction.css'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../reducersRedux'
export const TransactionIncome = (props) => {
  const deleteIncome = () =>{
    props.deleteIncomeMapDispatch(props.time, props.payment)
  }
  return (
    <>
      <li className="history_item history_income" key={props.time}>
        <p className="history_category">income</p>
        <Button className="history_delete" onClick={deleteIncome}><CloseCircleFilled /></Button>
        <time className="history_date">{props.time.toLocaleString()}</time>
        <p className="history_spend">{props.income/100} $</p>
      </li>
    </>
  )
}
export const TransactionIncomeCmp = connect(null, mapDispatchToProps)(TransactionIncome)
