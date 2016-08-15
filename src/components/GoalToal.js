import React from 'react'

export default const GoalTotal = ({goalTotal}) => (
  total ?
    <div className='total'> TOTAL: ${total.toFixed(2)} </div> :
    <div className='total'>TOTAL: $0</div>
)
