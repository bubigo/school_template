import '../../style/chart.css'
import HeaderApp from '../header'
import PieChart from '../../componentsRedux/components/PieChart'
import {CalendarApp} from '../calendar'

function ChartPage(){
  return(
    <>
      <HeaderApp/>
      <div className="main">
        <aside>
          <CalendarApp/>
        </aside>
        <section className="pie-chart">
         <PieChart/>
        </section>
      </div>
    </>
  )
}
export default ChartPage
