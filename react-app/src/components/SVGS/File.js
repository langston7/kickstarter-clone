import React from "react";

const File = ({ className, viewBox}) => {
  return (
    <svg className={className} viewBox={viewBox}>
      <path d="M4 9c0-.552.448-1 1-1h50c.552 0 1 .448 1 1v42c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V9zm5.5 37.5h41v-33h-41v33zm4.734-6.227l6.376-7.97c.398-.496 1.136-.536 1.582-.088l5.536 5.534 7.586-11.38c.43-.643 1.378-.63 1.786.027l8.736 13.978c.442.706-.066 1.624-.9 1.624H15.064c-.89 0-1.386-1.03-.83-1.727zM24 24c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"></path>
    </svg>
  )
}

export default File;
