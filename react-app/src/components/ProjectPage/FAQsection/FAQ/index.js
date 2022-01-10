import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RightChevron from "../../../SVGS/RightChevron";

const FAQ = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(prevAnswer => !prevAnswer);
  }

  return (
    <div className='mb2 border-gray hover-bg-gray-200' onClick={toggleAnswer}>
      <div>
        <NavLink to='#' className='p3 flex navy-700'>
          <span className='font-size--14 medium'>{faq.question}</span>
          <span className='pl3 ml-auto'>
            <RightChevron className='icon-12 fill-navy' viewBox='0 0 60 60'/>
          </span>
        </NavLink>
      </div>
      {showAnswer
        && <div className='pl3 pr9'>
            <div className='font-size--14 navy-700'>
              <p style={{marginBottom: '20px'}}>{faq.answer}</p>
            </div>
            <div className='font-size--12 navy-500 mb3'>
              Last updated:
              <span> Tue, November 23 2021 5:05 AM PST placeholder</span>
            </div>
          </div>
      }
    </div>
  )
}

export default FAQ;
