// import React from 'react'
// import '../css/datepicker.css'
// import { MultiMonthView } from 'react-date-picker'
// import DatePicker from './DatePicker'
//
// class FilterDate extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clicked: false
//     };
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick (e) {
//     e.preventDefault();
//     // this.setState({clicked: !this.state.like});
//     this.setState({clicked: !this.state.clicked});
//     console.log('Filter by Date clicked!');
//
//     const DatePicker = () => {
//
//       console.log('DatePicker!');
//       const now = Date.now()
//
//       const hour = 1000 * 60 * 60
//       const day = 24 * hour
//
//       const in3days = now + day * 3
//
//       // return (
//       //   // <div onClick={this.handleClick}>
//       //     <MultiMonthView defaultRange={[now, in3days]}/>
//       // )
//     // }
//     DatePicker();
//   }
//
//   render() {
//     // const text = this.state.liked ? 'liked' : 'haven\'t liked';
//     return (
//       // <div>
//         <li>
//           <a href="" onClick={this.handleClick}>Filter by Date</a>
//         </li>
//       // <div>
//     )
//   }
// }
//
//
// export default FilterDate
