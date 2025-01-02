import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DestinatioBox = () => {
  
  const [selectedDate, setDate] = useState(null);
  const [selectedReturnDate, returnSetDate] = useState(null);

  return (
    <div>
      <div className='destination-box'>
      <div className='destination-box-item'>
      <div className='destination'>
        <p>Destination</p>
      </div>
      <div className='depart-date'>
        {/* <p>Depart Date</p> */}
        <DatePicker className='date-picker-input' placeholderText='Depart Date' selected={selectedDate} onChange={date=>setDate(date)}/>
      </div>
      <div className='return-date'>
        {/* <p>Return Date</p> */}
        <DatePicker className='date-picker-input' placeholderText='Return Date' selected={selectedReturnDate} onChange={date=>returnSetDate(date)}/>
      </div>
      <div className='duration'>
        <p>Duration</p>
      </div>
      <button className='btn destination-btn' type='submit'>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default DestinatioBox;

