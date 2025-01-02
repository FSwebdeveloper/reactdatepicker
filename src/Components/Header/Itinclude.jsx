import React, { useState } from 'react';

const Itincluding = (props) => {

    const [show, setShow] = useState(false);

  return (
    <div>
    <div className='Itinerary-heading'>
      <h1 className='I-heading'>{props.text1}</h1>
      </div>
      <div className="dropDown">
        <div className="drop-down-about-div">
        
            <h1 className="dropDown-about">{props.question}</h1>
            <div className="drop-down-button" onClick={()=> setShow(!show)}> {props.text}
         {show === false ? <span class="material-symbols-outlined">
keyboard_arrow_down
</span> : <span class="material-symbols-outlined">
keyboard_arrow_up
</span>}
        </div>
        </div>
        <div className="black-line">

        </div>
        <div className="paragraph-div">
            <h2 className={show === true ? "question-answer" : "question-answer-display"}>
            {props.answer}
            <br/>
            <br/>
            {props.answer1}
            <br/>
            <br/>
            {props.answer2}
            <br/>
            <br/>
            {props.answer3}
            <br/>
            <br/>
            {props.answer4}
            </h2>
        </div>
        </div>
    </div>
  )
}

export default Itincluding;

