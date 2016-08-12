import React from 'react'

const SubCategory = ({subCategory, categorize}) => {

  const handleClick = (e) => {
    e.preventDefault()
    categorize(subCategory)
  }

  return (
    <li><a href="" onClick={e => handleClick(e)}>{subCategory}</a></li>
  )

}

export default SubCategory
