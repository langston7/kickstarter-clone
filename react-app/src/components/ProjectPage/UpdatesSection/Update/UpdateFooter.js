import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const UpdateFooter = ({ update }) => {
  const { url } = useRouteMatch();
  return (
    <footer>
      <div className='update-footer-container'>
        <div className='update-footer-icons'>
          <span className='mr4'>
            <svg className='update-footer-icon' viewBox='0 0 60 60'>
              <path d="M55 8c.552 0 1 .448 1 1v34c0 .552-.448 1-1 1H36L21.83 55.73c-.718.618-1.83.106-1.83-.842V44H5c-.552 0-1-.448-1-1V9c0-.552.448-1 1-1h50z">
              </path>
            </svg>
            Placeholder 1
          </span>
          <span className='mr4'>
            <svg className='update-footer-icon' viewBox='0 0 60 60'>
              <path d="M50.977 10.664c4.402 3.202 6.03 8.916 4.41 14.052-1.216 3.858-3.88 7.266-6.706 10.092-4.99 4.99-15.327 14.174-18.023 16.56-.38.336-.934.336-1.312 0-2.698-2.386-13.034-11.57-18.024-16.56-2.825-2.826-5.49-6.234-6.707-10.092-1.618-5.136.008-10.85 4.41-14.052 3.434-2.498 8.102-3.17 12.192-2.162C25.197 9.51 28.2 12.506 30 16.004c1.8-3.498 4.803-6.494 8.785-7.502 4.09-1.008 8.758-.336 12.192 2.162z">
              </path>
            </svg>
            Placeholder 3
          </span>
        </div>
        <NavLink className='update-readmore-link' to={`${url}/${update?.id}`}>
          <div className='update-readmore-container'>
            Read More
            <svg className='icon-20 ml1' viewBox='0 0 60 60'>
              <path fill-rule="nonzero" d="M45 30L19 4l-5 5 21 21-21 21 5 5"></path>
            </svg>
          </div>
        </NavLink>
      </div>
    </footer>
  )
}

export default UpdateFooter;
