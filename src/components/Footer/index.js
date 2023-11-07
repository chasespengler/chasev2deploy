import React from 'react'

export default function Foot() {
  return (
    <div id="outer-foot" style={{"background": "linear-gradient(90deg, #113137 0%, white 30%)", "maxHeight": "125px"}}>
      <div id="foot">
        <footer>
          <div style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'minHeight': '75px'}} id="footer-text">
              <img style={{"maxHeight": "45px"}} src={require("../../images/CS.png")} alt="logo" id="footer-logo"/>
              <span>
                Website designed, built, and owned by Chase Spengler.
              </span>
          </div>
        </footer>
      </div>
    </div>
  )
}