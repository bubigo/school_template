import React from 'react'
import { AddPaymentCmp } from './addPayment'
import { connect} from 'react-redux'
import {mapStateToProps} from '../../reducersRedux'
import { AddCategoryCmp } from './addCategory'

class Categories extends React.Component{
    render(){
      return(
          <div className="cost__categories">
            {this.props.categoryMapState.map((category)=>(
                <AddPaymentCmp
                  key={category.id}
                  id={category.id}
                  icon={category.icon}
                  name={category.name}
                  time={category.time}
                onAdd={(spendCat)=>console.log(spendCat)}/>
              ))}
            <AddCategoryCmp />
          </div>
      )
    }
  }
export const CategoriesCmp = connect(mapStateToProps)(Categories)
