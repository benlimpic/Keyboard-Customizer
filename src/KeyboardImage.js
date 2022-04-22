import React from 'react'

export default function KeyboardImage({ action, housing, general, highlight }) {
  return (
    <>
        <div className='boardContainer'>
            <img id="housing" className="keyboard" src={housing} alt="Mech Housing"/>
            <img id="action-caps" className="keyboard" src={action} alt="Action Caps"/>
            <img id="generalCaps" className="keyboard" src={general} alt="Action Caps"/>
            <img id="highlightCaps" className="keyboard" src={highlight} alt="Mech Housing"/>
        </div>
    </>
    
  )
}
  