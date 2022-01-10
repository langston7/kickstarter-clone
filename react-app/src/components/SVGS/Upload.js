import React from "react";

const Upload = ({className, viewBox}) => {
  return (
    <svg className={className} viewBox={viewBox}>
      <path d="M51 35.86h-4c-.552 0-1 .45-1 1v7H14v-7c0-.55-.448-1-1-1H9c-.552 0-1 .45-1 1v12c0 .553.448 1 1 1h42c.552 0 1-.447 1-1v-12c0-.55-.448-1-1-1M19.514 20.964l9.754-10.504c.394-.43 1.068-.43 1.464-.003l9.87 10.628c.55.594.13 1.558-.678 1.558H32.78V36.86c0 .553-.448 1-1 1h-3.562c-.55 0-1-.447-1-1V22.644h-6.972c-.872 0-1.326-1.04-.732-1.68"></path>
    </svg>
  )
}

export default Upload;
