import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Campaign.css";

function Campaign({ campaign }){

  useEffect(() => {
    let campaignText = document.getElementById("rte-content");
    campaignText.innerHTML = campaign;
  })

  return(
    <div className="grid-container pr3 py8">
      <div className="grid-row">
        <div className="float-left width-8-12 pz3">
          <div className="pz3">
            <div id="campaign">
              <div className="grid-row">
                <nav className="t20 sticky pb4 pl0 pr3 float-left width-2-12">
                  <div>
                    <NavLink to="#" className="block font-size--13 bold lsp-2 pb3 green border-bottom uppercase">Story</NavLink>
                  </div>
                </nav>
                <div className="pz3 float-left width-10-12">
                  <div className="m-auto " style={{maxWidth: '680px'}}>
                    <div id="story" className="mb3">
                      <h3 className="mb3 font-weight--400 font-size--21">Story</h3>
                    </div>
                    <div id="rte-content">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Campaign
