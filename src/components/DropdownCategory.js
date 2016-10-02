import React from 'react'
import DropdownSubCategory from './DropdownSubCategory'
import { categories, subCategories } from '../assets/categoriesData'

const DropdownCategory = () => {

      const subCategoryList = (mainCategory) => {
        return (
          subCategories[mainCategory].map(subCategory => (
            <DropdownSubCategory
                subCategory={subCategory}
            />
          ))
        )
      }

      const nestedList = () => {
        return categories.map(category => {
            return (
              <li><a href="" onClick={e => e.preventDefault()}>{category}</a>
                <ul>
                  {subCategoryList(category)}
                </ul>
              </li>
            )
          })
      }

      return (
        <ul>
          {nestedList()}
        </ul>
      )

}

export default DropdownCategory
