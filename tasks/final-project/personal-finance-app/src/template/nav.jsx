import { Menu, Switch } from 'antd'
import { ContainerOutlined, PieChartFilled } from '@ant-design/icons'
import '../style/nav.css'

const NavApp = () => {
  function onChange(checked) {
    console.log(`switch to ${checked}`)
  }

  return (
    <>
      <aside className="sidebar">
        <Menu className="icon-list">
          <Menu.Item key="1" icon={<PieChartFilled/>}></Menu.Item>
          <Menu.Item key="2">
            <Switch defaultChecked onChange={onChange}/>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined/>}>
          </Menu.Item>
        </Menu>
      </aside>
    </>
  )
}
export default NavApp
