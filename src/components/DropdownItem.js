import React from 'react'

const DropdownItem = ({category, addCategory}) => {

  const click = (e) => {
    e.preventDefault()
    addCategory(category)
  }

  return (
    <li><a href="" onClick={click}>{category}</a></li>
  )

}

export default DropdownItem
