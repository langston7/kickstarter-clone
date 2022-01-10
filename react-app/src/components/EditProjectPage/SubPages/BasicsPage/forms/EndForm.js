import React from "react";
import FormWrapper from "../../FormWrapper";

const EndForm = ({ end_date, handleChange}) => {
  const infoArr = [
    'Set a time limit for your campaign. You won’t be able to change this after you launch.'
  ]
  return (
    <FormWrapper header='Target end date' infoArr={infoArr}>
      <div className='calendar-conatiner'>
        <div className='calendar-label'>Month / Day / Year </div>
        <input
          type="date"
          name="end_date"
          value={end_date}
          onChange={handleChange}
          className='calendar-input' />
      </div>
    </FormWrapper>
  )
}

export default EndForm;
