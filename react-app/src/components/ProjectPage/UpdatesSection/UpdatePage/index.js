import React from "react";
import { NavLink, useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UpdateHeader from "../Update/UpdateHeader";
import UpdateBody from "../Update/UpdateBody";
import LeftChevron from "../../../SVGS/LeftChevron";
import RightChevron from "../../../SVGS/RightChevron";
import './UpdatePage.css';


const UpdatePage = () => {
  const { projectId, updateId } = useParams();
  const params = new URLSearchParams(useLocation().search)
  const index = params.get('index');
  const update = useSelector(state => state.project.updates?.find(update => update.id === +updateId));
  return (
    <div className='grid-container py6'>
      <div className='update-page'>
        <div className='pb8'>
          <NavLink className='update-page-all-updates btn-secondary' to={`/projects/${projectId}/updates`}>
            <div className='flex-center'>
              <LeftChevron className='icon-20' viewBox='0 0 60 60' />
              <span className='ml2'>All updates</span>
            </div>
          </NavLink>
        </div>
        <UpdateHeader update={update} index={index} />
        <UpdateBody update={update} className={'update-body'} />
        <footer className='flex align-center py3 mt8 border-bottom border-top'>
          <button className='flex-center btn btn-secondary btn-medium'>
            <svg className='icon-20' viewBox='0 0 60 60'>
              <path d="M50.977 10.664c4.402 3.202 6.03 8.916 4.41 14.052-1.216 3.858-3.88 7.266-6.706 10.092-4.99 4.99-15.327 14.174-18.023 16.56-.38.336-.934.336-1.312 0-2.698-2.386-13.034-11.57-18.024-16.56-2.825-2.826-5.49-6.234-6.707-10.092-1.618-5.136.008-10.85 4.41-14.052 3.434-2.498 8.102-3.17 12.192-2.162C25.197 9.51 28.2 12.506 30 16.004c1.8-3.498 4.803-6.494 8.785-7.502 4.09-1.008 8.758-.336 12.192 2.162z" />
            </svg>
            Like
          </button>
          <span className='pl3 soft-black font-size--12'>
            Placeholder 213 people like this update
          </span>
        </footer>
        <div className='mt6 flex align-center'>
          <div className='flex1'>
            <NavLink to='#' >
              <div className='btn btn-secondary btn-medium'>
                <div className='flex align-center'>
                  <LeftChevron className='icon-12' viewBox='0 0 60 60' />
                  <span className='ml2'>Previous</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className='flex1 text-right'>
            <NavLink to='#' >
              <div className='btn btn-secondary btn-medium'>
                <div className='flex align-center'>
                  <span>Next</span>
                  <RightChevron className='icon-12 ml2' viewBox='0 0 60 60' />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePage;
