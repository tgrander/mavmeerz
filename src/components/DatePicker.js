import React, { Component } from 'react'
import '../css/datepicker.css'
import { MultiMonthView } from 'react-date-picker'

// class DatePicker extends React.Component {
//   constructor(props) {
//   super(props)
// }

const DatePicker = () => {
  console.log('DatePicker!');
  const now = Date.now()

  const hour = 1000 * 60 * 60
  const day = 24 * hour

  const in3days = now + day * 3

  return (
    <div>
      <MultiMonthView defaultRange={[now, in3days]}/>
    </div>
  )
}

export default DatePicker

// const onChange = (dateString, { dateMoment, timestamp }) => {
//   console.log(dateString)
// }
//
// let date = '2017-04-24'
//
// <Calendar
//   dateFormat="YYYY-MM-DD"
//   date={date}
//   onChange={onChange}
// />
