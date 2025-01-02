import React, { useState } from 'react'

const Itdown = (props) => {

    const [show, setShow] = useState(false);

  return (
    <div>
      <div className="dropDown">
        <div className="drop-down-about-div">
            <h1 className="dropDown-about">{props.question}</h1>
            <div className="drop-down-button" onClick={()=> setShow(!show)}> {props.text}
         {show === false ? <span class="material-symbols-outlined">
add
</span> : <span class="material-symbols-outlined">
remove
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
            </h2>
        </div>
        </div>
    </div>
  )
}

export default Itdown;
