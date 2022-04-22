import React from 'react'

function Board({Alternate, Case, Highlight, General, id}) {

  return (
    <div className='keyboard-image-div' id={id}>
            <img id="action-caps" className="keyboard" src={Alternate} alt="Action Caps"/>
            <img id="housing" className="keyboard" src={Case} alt="Mech Housing"/>
            <img id="generalCaps" className="keyboard" src={General} alt="Action Caps"/>
            <img id="highlightCaps" className="keyboard" src={Highlight} alt="Mech Housing"/>
        </div>
  )
}
export default Board


