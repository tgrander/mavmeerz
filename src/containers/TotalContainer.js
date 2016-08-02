import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Total from '../components/Total'

class TotalContainer extends Component {
  render() {
    const { expenses, total } = this.props

    return (
      <Total
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

const mapStateToProps = (state) => {
  return {
    total: getTotal(state)
  }
}

export default connect(
  mapStateToProps,
  { total }
)(TotalContainer)
