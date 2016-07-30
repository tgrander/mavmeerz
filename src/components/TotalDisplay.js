'esversion: 6';

import React, { Component, PropTypes } from 'react';
import ExpenseList from './ExpenseList';

const Total = ({ total }) => (
  {{ total }}
)

Todo.propTypes = {
  total: PropTypes.string.isRequired
}

export default Total
