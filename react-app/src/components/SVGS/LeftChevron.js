import React from "react";

const LeftChevron = ({ className, viewBox }) => {
  return (
    <svg className={className} viewBox={viewBox}>
      <path fillRule="nonzero" d="M14 30l26 26 5-5-21-21L45 9l-5-5"></path>
    </svg>
  )
}

export default LeftChevron;
