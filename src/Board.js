import React from 'react'

function Board({Alternate, Case, Highlight, General, id, Name}) {

  return (
    <>
      <div >
        <h2 className="boardName">{Name}</h2>
        <div className="boardContainer" id={id}>
          <img id="housing" className="keyboard" src={Case} alt="Mech Housing"/>
          <img id="action-caps" className="keyboard" src={Alternate} alt="Action Caps"/>
          <img id="generalCaps" className="keyboard" src={General} alt="Action Caps"/>
          <img id="highlightCaps" className="keyboard" src={Highlight} alt="Mech Housing"/>
        </div>
      </div>
      
    </>

  )
}
export default Board


