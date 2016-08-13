import React, {Component} from 'react'
import '../css/dropdown.css'
import '../css/datepicker.css'
import Categories from './DropdownCategory'
import Accounts from './DropdownAccount'
import FilterDate from './DropdownFilterDate'
import DatePicker from './DatePicker'
import { MultiMonthView } from 'react-date-picker'
import { Modal } from 'react-bootstrap';

export class DropDownApp extends Component {
  constructor(props) {
    super(props);

    this.state = {show: false};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    // this.state = {toggle: false};
    // this.toggle = this.toggle.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }
  // toggle() {
  //   console.log('in toggle, state is: ', this.state);
  //   this.setState({toggle: !this.state.toggle});//sets datePicker variable to the inverse of itself
  // }
    render() {
      // const Dropdown = ({categorize, selectAccount}) => {
      return (
        <div>
          <nav id="primary_nav_wrap">
            <ul>
              <li class="current-menu-item"><a href="#">Add</a></li>
              <li class="current-menu-item"><a href="#">Delete</a></li>
              <li class="current-menu-item"><a href="#">Upload CSV</a></li>
              <li class="current-menu-item"><a href="#" onClick={this.showModal}>Filter By Date</a>
              </li>
              <li><a href="#">Categorize</a>
                <Categories
                  categorize={this.props.categorize}
                />
              </li>
              <li><a href='#'>Select Account</a>
                <Accounts
                  selectAccount={this.props.selectAccount}
                />
              </li>
            </ul>
          </nav>
          <Modal {...this.props} show={this.state.show} onHide={this.hideModal} >
            <DatePicker toggle = {this.toggle}/>
          </Modal>
        </div>
      )
    }
  // }
}

export default DropDownApp

// <Modal show = {this.state.toggle} backdrop = 'true' onHide = {this.state.toggle}>
// onClick={this.toggle}
