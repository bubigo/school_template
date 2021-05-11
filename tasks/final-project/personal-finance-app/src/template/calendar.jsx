import {  Calendar } from 'antd'
import '../style/calendar.css'


export const CalendarApp = (props) => {
  function onPanelChangeCalendar(value) {
    props.onChange(value.format('DD.MM.YYYY'))
  }
  return(
    <>
          <div className="site-calendar-demo-card">
            <Calendar fullscreen={false}  onSelect={onPanelChangeCalendar} />
          </div>
    </>
  )
}

