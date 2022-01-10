import React from "react";

const RightChevron = ({ className, viewBox }) => {
  return (
    <svg className={className} viewBox={viewBox}>
      <path fillRule="nonzero" d="M45 30L19 4l-5 5 21 21-21 21 5 5" />
    </svg>
  )
}

export default RightChevron;
