import React, { useState } from 'react'
import {
  BookOutlined,
  BugOutlined,
  CarOutlined, GiftOutlined, HomeOutlined, MedicineBoxOutlined, PercentageOutlined,
  PlusOutlined,
  RocketOutlined,
  SmileOutlined,
  StarOutlined, TrophyOutlined
} from '@ant-design/icons'
import { Cascader, Input, Modal, Tooltip } from 'antd'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../reducersRedux'

const BtnAddCategory = (props) => {
  function onChangeIcon(value) {
    setValueIcon(value)
  }
  function onChangeName(event) {
    setValueName(event.target.value)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }
  const [valueIcon, setValueIcon] = useState()
  const [valueName, setValueName] = useState()

  const handleOk = () => {
    setIsModalVisible(false)
    props.newCategoryMapDispatch(valueName, valueIcon)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const tooltipNewCategory=<span>add new category</span>

  const options = [
    {
      value: <RocketOutlined/>,
      label: 'Children',
    },
    {
      value: <PercentageOutlined />,
      label: 'Credit',
    },
    {
      value: <GiftOutlined />,
      label: 'Gifts',
    },
    {
      value: <TrophyOutlined />,
      label: 'Sport',
    },
    {
      value: <BookOutlined />,
      label: 'Education',
    },
    {
      value: <MedicineBoxOutlined />,
      label: 'Health',
    },
    {
      value: <HomeOutlined />,
      label: 'House',
    },
    {
      value: <BugOutlined />,
      label: 'Pets',
    },
    {
      value: <StarOutlined />,
      label: 'Special',
    },
    {
      value: <CarOutlined />,
      label: 'Transport',
    },
    {
      value: <SmileOutlined />,
      label: 'Vacation',
    },
  ]

  return (
    <>
      <Tooltip placement="bottom" title={tooltipNewCategory}>
        <button type="button" className="category-btn add-category-btn" onClick={showModal}>
          <PlusOutlined />
        </button>
      </Tooltip>

      <Modal className="add-category-modal" title="Add new category" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Input  placeholder="Please enter category's name" onChange={onChangeName}/>
        <Cascader  options={options } onChange={onChangeIcon} placeholder="Please select category's icon" />
      </Modal>
    </>
  )
}
export const AddCategoryCmp =  connect(mapStateToProps,mapDispatchToProps)(BtnAddCategory)
