import {
  AddCategoryAction,
  AddDateAction,
  AddIncomeAction,
  AddPaymentAction,
  BalanceAction,
  DeleteCategoryAction, DeleteIncomeAction, DeletePaymentAction
} from '../actionsRedux'
import { combineReducers } from 'redux'
import { generateCategoriesData } from '../containersRedux/generateCategories'

const initialState = {
  list: []
}
const initialStateCategories = {
  categories: generateCategoriesData(),
}

const balancesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BALANCE':
      return {
        ...state,
        balance: [...state.list, BalanceAction]
      }

    default:
      return state
  }
}
const incomesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return {
        ...state,
        list: [...state.list, {
          income: action.income,
          time: action.time
        }]
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        list: state.list.filter((current) => {
          return current.name !== action.deleteCategory
        })
      }
    case 'DELETE_INCOME':
      return {
        ...state,
        list: state.list.filter((current) => {
          return current.time !== action.time && current.income !== action.income
        })
      }

    default:
      return state
  }
}
const paymentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      return {
        ...state,
        list: [{
          payment: action.payment,
          category: action.id,
          time: action.time
        }, ...state.list]
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        list: state.list.filter((current) => {
          return current.category !== action.deleteCategory
        })
      }
    case 'DELETE_PAYMENT':
      return {
        ...state,
        list: state.list.filter((current) => {
          return current.time !== action.time && current.payment !== action.payment
        })
      }
    default:
      return state
  }
}
const categoryReducer = (state = initialStateCategories, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, {
          name: action.name,
          icon: action.icon,
          id: action.name.toLowerCase(),
        }]
      }
    case 'DELETE_CATEGORY':
      return {
        ...state,
        categories: state.categories.filter((current) => {
          return current.name !== action.deleteCategory
        })
      }
    default:
      return state
  }

}
const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return {
        ...state,
        list: [...state.list, { date: action.date }]
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  incomes: incomesReducer,
  payments: paymentsReducer,
  balances: balancesReducer,
  categories: categoryReducer,
  dates: calendarReducer,
})

export const mapStateToProps = (state) => {
  return {
    incomeMapState: state.incomes.list,
    paymentMapState: state.payments.list,
    balanceMapState: state.balances.list,
    categoryMapState: state.categories.categories,
    dateMapState: state.dates.list,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    incomeMapDispatch: (income, time) => dispatch(AddIncomeAction(income, time)),
    paymentMapDispatch: (payment, id, time) => dispatch(AddPaymentAction(payment, id, time)),
    newCategoryMapDispatch: (name, icon) => dispatch(AddCategoryAction(name, icon)),
    deleteCategoryMapDispatch: (name) => dispatch(DeleteCategoryAction(name)),
    dateMapDispatch: (date) => dispatch(AddDateAction(date)),
    deletePaymentMapDispatch: (time, payment) => dispatch(DeletePaymentAction(time, payment)),
    deleteIncomeMapDispatch:  (time, payment) => dispatch(DeleteIncomeAction(time, payment)),
  }
}

