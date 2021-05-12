import React, { useState } from 'react'
import { Modal, Tooltip } from 'antd'
import { DatabaseFilled } from '@ant-design/icons'
import { AllTransactionsCmp } from './AllTransactions'

export const AllTransactionsModal = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const tooltipAllTransactions=<span>all transactions</span>
  return (
    <>
      <Tooltip placement="bottomRight" title={tooltipAllTransactions}>
        <button className="btn-all-transactions" onClick={showModal}>
          <DatabaseFilled className="navbar-icon"/>
        </button>
      </Tooltip>
      <Modal title="All transactions" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >

        <AllTransactionsCmp />

      </Modal>
    </>
  )
}



