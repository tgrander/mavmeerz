import React from 'react';

const Total = ({total}) => (
  total ?
    <div className='total'> TOTAL: ${total.toFixed(2)} </div> :
    <div className='total'>TOTAL: $0</div>
)

export default Total
