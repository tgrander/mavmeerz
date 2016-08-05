import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactAnimate from 'react-addons-css-transition-group'
import ExpensesApp from '../containers/ExpensesApp'

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    console.log('TOKEN:', window.localStorage.getItem('zenmoToken'));
    if(!this.props.isAuth){
      this.context.router.push('/login')
    }
  }

  render() {
    return (
      <div>
        <div className="dash-logout">
          <Link to='/login' className="btn hvr-bounce-to-left">Logout</Link>
        </div>
        <ExpensesApp/>
      </div>
    )
  }

}

export default connect(
  (state)=>{
    return {
      isAuth: state.isAuth
    }
  }
)(Dashboard)
