import { TransactionPaymentCmp } from './transaction-payment'
import { TransactionIncome } from './transaction-income'
import { connect } from 'react-redux'
import { mapStateToProps } from '../../reducersRedux'
import React from 'react'
import { Empty } from 'antd'

const AllTransactions = (props)=>{
  const getAllTransactionsList = ()=>{
    let transactionsList = props.paymentMapState.concat(props.incomeMapState)
    transactionsList.sort((a, b) => {
      let dateA = new Date(a.time),
        dateB = new Date(b.time)
      return  dateB-dateA
    })
    return transactionsList
  }
  const renderAllTransactionList = ()=>{
    if (getAllTransactionsList().length === 0){
      return (
        <>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Transactions not found.'}/>
        </>
      )
    } else {
      return(
        <>
          {getAllTransactionsList().map((transaction) => {
            if (transaction.payment) {
              return <TransactionPaymentCmp
                payment={transaction.payment}
                name={transaction.category}
                time={transaction.time}
                key={transaction.time}/>
            }
            else {
              return  <TransactionIncome
                income={transaction.income}
                time={transaction.time}
                key={transaction.time}/>
            }
          })}
        </>

      )
    }
  }
  return(
    <>
      <div className="all-transactions-list">
        <ul className="transaction-list">
          {renderAllTransactionList()}
        </ul>
      </div>
    </>
  )
}
export const AllTransactionsCmp =  connect(mapStateToProps)(AllTransactions)
