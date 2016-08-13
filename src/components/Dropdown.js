import React, {Component} from 'react'
import '../css/dropdown.css'
import Categories from './DropdownCategory'
import Accounts from './DropdownAccount'
import FilterDate from './DropdownFilterDate'
import DatePicker from './DatePicker'
import { Modal } from 'react-bootstrap';
import { receiveExpenses } from '../actions/expensesActions'

export class DropDownApp extends Component {
  constructor(props) {
    super(props);

    console.log('====> in Dropdown props are: ', props);
    this.state = {show: false};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.dodeezhit = this.dodeezhit.bind(this);
  }

  showModal() {
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  dodeezhit() {
    console.log('dodeeezhit');
    this.props.receiveExpenses(this.props.allExpenses);
  }

    render() {

      console.log('====> in Dropdown props are: ', this.props);
      return (
        <div>
          <nav id="primary_nav_wrap">
            <ul>
              <li class="current-menu-item"><a href="#">Add</a></li>
              <li class="current-menu-item"><a href="#">Upload CSV</a></li>
              <li class="current-menu-item"><a href="#" onClick={this.dodeezhit}>Show All Expenses</a></li>
              <li class="current-menu-item"><a href="#" onClick={this.showModal}>Filter By Date</a></li>
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
}

export default DropDownApp

// onClick={this.toggle}
