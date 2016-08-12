import React from 'react'
// import SubCategory from './DropdownSubCategory'
import { accounts } from '../assets/accountsData';

const Accounts = ({selectAccount}) => {

  const handleClick = (e, account) => {
    console.log('========> account in handleClick in DropdownAccount: ', account);
    e.preventDefault();
    selectAccount(account);
  }

  const accountList = () => {
    return accounts.map(account => {
        return (
          <li>
            <a href="" onClick={e => handleClick(e, account)}>{account}</a>
          </li>
        )
      })

  }

  return (
    <ul>
      {accountList()}
    </ul>
  )

}

export default Accounts;
