import React from 'react'
import { connect } from 'react-redux'

import { updateCategories } from '../actions/expensesActions'

export let DropdownSubCategory = ({dispatch, subCategory, selected}) => {

  console.log('SELECTED from dropdown: ', selected);

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateCategories(selected, subCategory))
  }

  return (
    <li><a href="" onClick={e => handleClick(e)}>{subCategory}</a></li>
  )

}

const mapStateToProps = (state) => {
  const { selected } = state.expensesReducer
  return {
    selected: selected
  }
}

export default connect(
  mapStateToProps
)(DropdownSubCategory)

// export DropdownSubCategory
