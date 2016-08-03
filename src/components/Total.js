import React from 'react';

const Total = ({total}) => (
  total ?
  <div> TOTAL: ${total} </div> :
  <div> TOTAL: $0 </div>
)

export default Total
