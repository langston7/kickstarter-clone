import React from "react";
import UpdateHeader from "./UpdateHeader";
import UpdateBody from "./UpdateBody";
import UpdateFooter from "./UpdateFooter";

const Update = ({ update, index }) => {
  return (
    <article>
      <UpdateHeader update={update} index={index} />
      <UpdateBody update={update} className='update-truncated-body'/>
      <UpdateFooter update={update} />
    </article>
  )
}

export default Update;
