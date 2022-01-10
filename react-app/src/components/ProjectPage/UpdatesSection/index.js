import React from "react";
import Update from "./Update";
import { NavLink, useRouteMatch } from "react-router-dom";
import './UpdatesSection.css';
import './Update/Update.css';
import { useSelector } from "react-redux";

const UpdatesSection = ({ updates }) => {
  const { url } = useRouteMatch();
  const { project } = useSelector(state => state);

  return (
    <div className='updates-section'>
        <div className='pt6 bg-grey-100'>
          <div className='grid-container'>
            <div className='grid-row'>
              {
                updates?.map((update, index) => {
                  return (
                    <div className='update-spacer'>
                      <div className='hamburger-icon-container'>
                        <svg className='hamburger-icon' viewBox='0 0 60 60' aria-hidden="true">
                          <path d="M30 52C17.85 52 8 42.15 8 30S17.85 8 30 8s22 9.85 22 22-9.85 22-22 22zm-9-32c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h13c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1H21zm0 6c-.552 0-1 .448-1 1v1c0 .552.448 1 1 1h6c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1h-6z" fill-rule="evenodd" />
                        </svg>
                      </div>
                      <NavLink className='update-container' to={`${url}/${update?.id}?index=${index}`}>
                        <div className='update'>
                          <Update update={update} index={index}/>
                        </div>
                      </NavLink>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className='grid-container'>
            <div className='grid-row'>
              <div className='update-spacer'>
                <div className='relative clip'>
                  <div style={{position: 'absolute', width: '185px', top: '72%', left: '50%'}}>
                    <img src="https://ksr-static.imgix.net/FINAL_KSR_10_YELLOW-DISC_01.png?ixlib=rb-1.1.0&amp;auto=compress&amp;w=1000&amp;fit=min&amp;s=39dcbd5cac8d508b0646822b20ab6677" alt="A yellow-colored 3D disc" width="185" />
                  </div>
                  <div style={{position: 'absolute', width: '185px', top: '-28%', left: '-9%'}}>
                    <img src="https://ksr-static.imgix.net/FINAL_KSR_10_CORAL-CUBE_01.png?ixlib=rb-1.1.0&amp;auto=compress&amp;w=1000&amp;fit=min&amp;s=ff76fadeacdfdc77476b4571aab17dd9" alt="A coral-colored cube illustration" width="185" />
                  </div>
                  <div style={{position: 'absolute', width: '185px', top: '-28%', left: '83%'}}>
                    <img src="https://ksr-static.imgix.net/FINAL_KSR_10_CORAL-TUBE_01.png?ixlib=rb-1.1.0&amp;auto=compress&amp;w=1000&amp;fit=min&amp;s=b9d06ac1f74686b326d06511ef47ee81" alt="A coral-colored hollow cylinder" width="185" />
                  </div>
                  <div className='flex flex-column justify-center align-center white' style={{ height:'280px', backgroundColor: '#05CE78'}}>
                    <div className='pb1 font-size--24 bold'>
                      Project launches
                    </div>
                    <div className='font-size--14 uppercase'>
                      {project.end_date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UpdatesSection;
