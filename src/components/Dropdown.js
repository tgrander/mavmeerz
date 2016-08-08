import React from 'react'
import '../css/dropdown.css'
import DropdownItem from './DropdownItem'
import categories from '../assets/categoriesData'

const Dropdown = () => {

  const categoryList = categories.map(category => <DropdownItem category={category}/>)

  return (
    <div>
      <nav id="primary_nav_wrap">
        <ul>
          <li class="current-menu-item"><a href="#">Add</a></li>
          <li class="current-menu-item"><a href="#">Delete</a></li>
          <li><a href="#">Categorize</a>
            <ul>
              {categoryList}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )

}

export default Dropdown
