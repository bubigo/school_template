import React from 'react'
import {  TransactionPaymentCmp } from './transaction-payment'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../reducersRedux'
import { TransactionIncomeCmp } from './transaction-income'
import { Empty } from 'antd'

const DailyReport = (props) => {

  const getTransactionsList = () => {
    let transactionsList = props.paymentMapState.concat(props.incomeMapState)
    transactionsList = transactionsList
      .filter((transaction) => {
        let dateTransaction = transaction.time.toLocaleDateString()
        return (props.date === dateTransaction)
      })
    transactionsList.sort((a, b) => {
      let dateA = new Date(a.time),
        dateB = new Date(b.time)
      return dateB - dateA
    })
    return transactionsList
  }
  const renderTransactionList = () => {
    if (getTransactionsList().length === 0) {
      return (
        <>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Transactions not found.'}/>
        </>
      )
    } else {
      return (
        <>
          <li className="transaction-list_title">
            <span>Daily transactions</span>
          </li>
          {getTransactionsList()
            .map((transaction) => {
              if (transaction.payment) {
                return <TransactionPaymentCmp
                  payment={transaction.payment}
                  name={transaction.category}
                  time={transaction.time}
                  key={transaction.time}/>
              } else {
                return <TransactionIncomeCmp
                  income={transaction.income}
                  time={transaction.time}
                  key={transaction.time}/>
              }
            })}
        </>

      )
    }
  }
  return (
    <>
      <div className="daily-report-list">

        <ul className="transaction-list">
          {renderTransactionList()}
        </ul>
      </div>
    </>
  )
}
export const DailyReportCmp = connect( mapStateToProps)(DailyReport)
