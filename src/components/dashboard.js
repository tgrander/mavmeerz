import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import ReactAnimate from 'react-addons-css-transition-group'
import ExpensesApp from '../containers/ExpensesApp.js'
import '../css/dashboard.css'

// import UploadApp from '../containers/UploadApp'

class Dashboard extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    if(!this.props.isAuth){
      this.context.router.push('/login')
    }

  }
  componentDidMount(){
    document.body.style.backgroundColor = 'white'
  }

  render() {
    return (
      <div classNam="dash">
        <div className="nav dash-logout">
          <Link to='/login' className="logout hvr-bounce-to-left">Logout</Link>
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
