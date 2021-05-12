import React, { useState } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Modal } from 'antd'
import CategoryContainer from '../../containersRedux/categoryContainer'
import { CloseCircleFilled } from '@ant-design/icons'
import { mapDispatchToProps, mapStateToProps } from '../../reducersRedux'

const AddPayment = (props) => {


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
    props.paymentMapDispatch(value*100,props.id, props.time)
  }

  const handleCancel = () => {
    setIsModalVisible(false)

  }
  const deleteCategory = () =>{
   props.deleteCategoryMapDispatch(props.name)
  }
  return (
    <>
      <div className="cost__category" >
        <button className="cost__category_delete" onClick={deleteCategory}><CloseCircleFilled /></button>
        <button type="button" className="category-btn" onClick={showModal}>
          {props.icon}
        </button>
        <h3 className="category-name">{props.name}</h3>
        <CategoryContainer id={props.id}/>
      </div>

      <Modal title="Add spend" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <InputNumber
          defaultValue={0.01}
          step={0.01}
          min={0.01}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={onChange}
          value={value}
        />
      </Modal>
    </>
  )
}

export const AddPaymentCmp =  connect(mapStateToProps,mapDispatchToProps)(AddPayment)

