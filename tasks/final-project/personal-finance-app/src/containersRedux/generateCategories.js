import {
  DollarCircleOutlined,
  FileOutlined,
  ShopOutlined,
  SkinOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import React from 'react'

export function generateCategoriesData (){
  const categoriesList = [
    {name:'Food',icon:<ShopOutlined /> },
    {name:'Clothes', icon:<SkinOutlined />},
    {name:'Entertainment', icon:<VideoCameraOutlined />},
    {name:'Bills & Services',icon:<FileOutlined /> },
    {name:'Other', icon:<DollarCircleOutlined />},

  ]
  console.log(categoriesList)
  return categoriesList.map((category) =>({
    id: category.name.toLowerCase(),
    icon:category.icon,
    name: category.name,
  }))
}
