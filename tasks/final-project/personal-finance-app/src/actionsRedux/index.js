export const AddIncomeAction = (income, time) => ({
  type: 'ADD_INCOME',
  income,
  time: new Date(),
})

export const AddPaymentAction = (payment, id, time) => ({
  type: 'ADD_PAYMENT',
  payment,
  id,
  time: new Date(),
})
export const BalanceAction = balance => ({
  type: 'BALANCE',
  balance
})
export const AddCategoryAction = (name, icon) => ({
  type: 'ADD_CATEGORY',
  name,
  icon
})
export const DeleteCategoryAction = (deleteCategory) => ({
  type: 'DELETE_CATEGORY',
  deleteCategory
})

export const AddDateAction = (date) => ({
  type: 'ADD_DATE',
  date
})
export const DeletePaymentAction = (time, payment) => ({
  type: 'DELETE_PAYMENT',
  time,
  payment
})
export const DeleteIncomeAction = (time, payment) => ({
  type: 'DELETE_INCOME',
  time,
  payment
})
