import React from 'react'

export default function KeyboardImage({ action, housing, general, highlight }) {
  return (
    <>
        <div>KeyboardImage</div>
        <div className='keyboard-image-div'>
            <img id="action-caps" className="keyboard" src={action} alt="Action Caps"/>
            <img id="housing" className="keyboard" src={housing} alt="Mech Housing"/>
            <img id="generalCaps" className="keyboard" src={general} alt="Action Caps"/>
            <img id="highlightCaps" className="keyboard" src={highlight} alt="Mech Housing"/>
        </div>
    </>
    
  )
}
