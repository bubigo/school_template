import { connect } from 'react-redux'
import CategorySum from '../componentsRedux/PropTypes/categorySum'
import { generateCategoriesData } from './generateCategories'

const initialStateCategories = {
  categories: generateCategoriesData(),
}

const mapStateToProps = (state = initialStateCategories, props) => ({

 categorySum: state.payments.list ? state.payments.list.reduce( (sum, current) => {
   if(props.id === current.category){
     return sum + current.payment
   }
    else{
     return sum
   }
  }, 0) : 0
})

export default connect(
  mapStateToProps,
)(CategorySum)
