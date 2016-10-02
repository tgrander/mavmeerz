// import React from 'react'
// import { connect } from 'react-redux'
//
// import DropdownSubCategory from '../components/DropdownSubCategory'
//
// import { updateCategories } from '../actions/expensesActions'
//
// const mapStateToProps = (state) => {
//   const { selected } = state.expensesReducer
//   return {
//     selected: selected
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     categorize: (expenses, category) => {
//       dispatch(updateCategories(expenses, category))
//     }
//   }
// }
//
// const DropDownApp = connect(
//   mapStateToProps,
//   {
//     updateCategories: updateCategories
//   }
// )(DropdownSubCategory)
//
// export default DropDownApp
