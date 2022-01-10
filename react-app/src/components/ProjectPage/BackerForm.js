import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { putFunds } from "../../store/project";


const BackerForm = ({ setShow, project_id, user_id }) => {
  const [additional_funding, setAdditional_funding] = useState();
  const dispatch = useDispatch();

  const handleChange = e => {
    setAdditional_funding(e.target.value);
  }

  const onSubmit = async e => {
    e.preventDefault();
    dispatch(putFunds(+additional_funding, project_id, user_id));
    setShow(false);
  }

  return (
    <form onSubmit={onSubmit} className='form-container'>
      <div>
        <input
          name='description'
          placeholder='$100'
          value={additional_funding}
          onChange={handleChange}
          className='input'
          type='number'
          min={1}
          max={1000000}
        />
      </div>
      <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
  )
}

export default BackerForm;
