import React from "react";
import { NavLink } from "react-router-dom";

const RecommendedProject = ({ project }) => {
  return (
    <li className='border-bottom-gray pb3'>
      <div className='splash-recommended-content'>
          <NavLink to={`/projects/${project?.id}/comments`} className='splash-recommended-link'>
              <img className='splash-recommended-image' src={`${project?.image_src}`} alt='first recommended project'></img>
          </NavLink>
          <div className='splash-recommended-info'>
              <NavLink to={`/projects/${project?.id}/comments`} className='splash-recommended-title'>{`${project?.title}`}</NavLink>
              <span className='splash-recommended-funded'>{`${((project?.current_funding / project?.pledge_goal) * 100).toFixed()}% funded`}</span>
              <span className='splash-image-author'>{`By ${project?.username}`}</span>
              <div className='splash-recommended-button-container'>
                  <button className='splash-recommended-button'>
                      <svg className="splash-svg" viewBox="0 0 12 16">
                          <path d="M0 0h12v15.067c0 .166-.134.3-.3.3-.055 0-.11-.015-.156-.043l-5.5-3.338-5.59 3.343c-.142.084-.326.037-.41-.105-.03-.046-.044-.1-.044-.154V0zm1.8 1.8v10.627l4.25-2.542 4.15 2.517V1.8H1.8z" fillRule="nonzero">
                          </path>
                      </svg>
                  </button>
                  <button className='splash-recommended-button'>
                      <svg className='splash-svg' viewBox='0 0 15 15'>
                          <path d="M8.875 2.1v1.85h4.984c.63 0 1.14.512 1.14 1.14 0 .097-.012.193-.036.285l-2.135 8.31c-.13.505-.585.858-1.105.858H3.2v-.005H.5c-.276 0-.5-.223-.5-.5V5.915c0-.276.224-.5.5-.5h2.882L4.19 3.09V1.208c0-.57.42-1.053.986-1.13 2.26-.31 3.7.312 3.7 2.024zM5.9 1.716v1.472c0 .128-.02.255-.062.375l-.706 2.026v7.243l6.15.002 1.842-7.17H8.59c-.787 0-1.426-.64-1.426-1.426V2.1c0-.307-.285-.47-1.263-.385zm-2.478 5.41h-1.71v5.703h1.71V7.125z" fillRule="evenodd">
                          </path>
                      </svg>
                  </button>
                  <button className='splash-recommended-button'>
                      <svg className="splash-svg" viewBox="0 0 15 15">
                          <path d="M6.125 12.44v-1.848H1.14c-.63 0-1.14-.51-1.14-1.14 0-.097.012-.192.036-.285L2.17.857C2.3.353 2.756 0 3.276 0H11.8v.005h2.7c.276 0 .5.223.5.5v8.124c0 .275-.224.5-.5.5h-2.882l-.808 2.322v1.884c0 .57-.42 1.053-.986 1.13-2.26.31-3.7-.312-3.7-2.025zm2.974.388v-1.473c0-.127.02-.254.062-.375l.706-2.025V1.712h-6.15L1.876 8.88H6.41c.787 0 1.426.637 1.426 1.425v2.134c0 .31.285.474 1.263.388zm2.478-5.41h1.71V1.715h-1.71v5.703z" fillRule="evenodd">
                          </path>
                      </svg>
                  </button>
              </div>
          </div>
      </div>
  </li>
)
}

export default RecommendedProject;
