import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'
import { InputNumber, Modal } from 'antd'
import { Tooltip } from 'antd';
import { mapDispatchToProps, mapStateToProps } from '../../reducersRedux'

const AddIncome = (props) => {
  function onChange(value) {
    setValue(value)
  }
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const [value, setValue] = useState(0.01)

  const handleOk = () => {
    setIsModalVisible(false)
    props.incomeMapDispatch(value*100, props.time)
  }

  const handleCancel = () => {
    setIsModalVisible(false)

  }

   const tooltipIncome=<span>add income</span>
  return (
    <>
      <Tooltip placement="bottomRight" title={tooltipIncome}>
        <button className="income_add-new" onClick={showModal}>
          <PlusOutlined />
          <span>$</span>
        </button>
      </Tooltip>
      <Modal title="Add new income" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <InputNumber
          defaultValue={0.01}
          step={0.01}
          min={0.01}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
        />

      </Modal>
    </>
  )
}


export const AddIncomeCmp = connect(mapStateToProps,mapDispatchToProps)(AddIncome)
