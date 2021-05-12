import "../../style/category.css"
import HeaderApp from '../header'
import  { CalendarApp }  from '../calendar'
import React, { useState } from 'react'
import { CategoriesCmp } from '../../componentsRedux/components/Categories'
import { DailyReportCmp } from '../../componentsRedux/components/DailyReport'
function HomePage(){
  return(
    <>
      <HeaderApp/>
      <HomeContent/>
    </>

  )
}

const HomeContent = ()=>{
  const [valueDate, setValueDate] = useState((new Date()).toLocaleDateString())
  return(
    <>
      <div className="main">
      <aside>
        <CalendarApp onChange={setValueDate}/>
        <DailyReportCmp date={valueDate}/>
      </aside>
      <section>
        <CategoriesCmp />
    </section>
      </div>
    </>
  )
}
export default HomePage
