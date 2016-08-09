import React from 'react'

const DropdownItem = ({category, categorize}) => {

  const handleClick = (e) => {
    e.preventDefault()
    categorize(category)
  }

  return (
    <li><a href="" onClick={e => handleClick(e)}>{category}</a></li>
  )

}

export default DropdownItem
