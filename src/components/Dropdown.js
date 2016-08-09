import React from 'react'
import '../css/dropdown.css'
import DropdownItem from './DropdownItem'
import categories from '../assets/categoriesData'

const Dropdown = ({categorize}) => {

  const categoryList = categories.map(category =>
    <DropdownItem
        category={category}
        categorize={categorize}
    />
  )

  return (
    <div>
      <nav id="primary_nav_wrap">
        <ul>
          <li class="current-menu-item"><a href="#">Add</a></li>
          <li class="current-menu-item"><a href="#">Delete</a></li>
          <li class="current-menu-item"><a href="#">Upload CSV</a></li>
          <li class="current-menu-item"><a href="#">Filter By Date</a></li>
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
