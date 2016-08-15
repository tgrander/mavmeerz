import React, { Component } from 'react';
import { DateRange } from 'react-date-range';

class DatePicker extends Component {
    handleSelect(range){
        console.log(range);
        // An object with two keys,
        // 'startDate' and 'endDate' which are Momentjs objects.
    }

    render(){
        return (
            <div>
                <DateRange
                    onInit={this.handleSelect}
                    onChange={this.handleSelect}
                />
            </div>
        )
    }
}

export default DatePicker
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, {Component} from 'react'
import '../css/datepicker.css'
import { MultiMonthView } from 'react-date-picker'
import Dropdown from './Dropdown'
import { Modal } from 'react-bootstrap';

export class DatePicker extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log('DatePicker!');
    return (
      <div>
        <MultiMonthView defaultRange={[]}/>

      </div>
    )
  }
}

export default DatePicker
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// const now = Date.now()
//
// const hour = 1000 * 60 * 60
// const day = 24 * hour
//
// const in3days = now + day * 3
// <input type="button" onClick={this.props.toggle}/>
