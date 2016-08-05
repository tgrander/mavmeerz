import React from 'react';

const Total = ({total}) => (
  total ?
    <div className='total'> TOTAL: ${total} </div> :
    <div></div>
)

export default Total
