import React, { Component } from 'react'
import '../css/datepicker.css'
import { MultiMonthView } from 'react-date-picker'

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
