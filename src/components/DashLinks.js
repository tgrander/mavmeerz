import React from 'react'
import { Link, IndexLink } from 'react-router';

import Dropdown from './Dropdown'

//css passed fown from dashboard.css

const DashLinks = () => {
  return (
    <div className='dash-links-container'>

      <ul className="dash-paths">
        <li className="dash-link"><Link to='/'>TRANSACTIONS</Link></li>
        <li className="dash-link"><Link to='/budget'>BUDGET</Link></li>
      </ul>

      <ul className="dash-paths">
        <li className="dash-link"><Link to='/'>TRANSACTIONS</Link></li>
        <li className="dash-link"><Link to='/budget'>BUDGET</Link></li>
      </ul>

    </div>
  )
}

export default DashLinks

// <Dropdown/>
