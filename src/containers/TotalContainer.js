import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TotalDisplay from '../components/TotalDisplay'

class TotalContainer extends Component {
  render() {
    const { expenses, total} = this.props

    return (
      <TotalDisplay
        total = {total} />
    )
  }
}

TotalContainer.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired
  })).isRequired,
  total: propTypes.string
};
