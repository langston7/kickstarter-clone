import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import FAQ from "./FAQ";

const FAQsection = ({ faqs }) => {

  return (
    <div className='py10'>
      <div className='grid-container' style={{maxWidth: '1140px'}}>
        <div className='grid-row'>
          <div className='mb5 pz3'>
            <h3 className='font-size--24 font-weight--400'>Frequently Asked Questions</h3>
          </div>
        </div>
          {faqs?.length > 0
            ? <div className='grid-row flex'>
                <div className='pz3 width-8-12'>
                    {faqs.map(faq => {
                      return <FAQ faq={faq} />
                    })}
                  </div>
                  <div className='pz3 h20p ml7 border-left border3px mb5 width-4-12'>
                    <p className="mb3 font-size--14">Don't see the answer to your question? Ask the project creator directly.</p>
                    <span>
                      <NavLink to='#' className='btn btn-medium btn-tertiary'>
                        Ask a question
                      </NavLink>
                    </span>
                  </div>
              </div>
            :
              <div className="grid-row">
                <p className='mb3 font-size--16'>Looks like there aren't any frequently asked questions yet.</p>
                <span>
                  <NavLink to='#' className='btn btn-medium btn-tertiary'>
                    Ask a question
                  </NavLink>
                </span>
              </div>
          }
      </div>
    </div>
  )

}

export default FAQsection;
