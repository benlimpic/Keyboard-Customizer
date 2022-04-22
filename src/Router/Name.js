import React from 'react'
import KeyboardImage from "../KeyboardImage"
import NameYourBoard from "../NameYourBoard"

function Name({ housing, general, highlight, action, lastId}) {
  return (
    <>
    <div className="name">
      <div className="boardContainer">
        <KeyboardImage 
        housing={housing}
        action={action}
        highlight={highlight}
        general={general}/>
      </div>
      <div>
        <NameYourBoard 
        lastId={lastId}/>
      </div>
    </div>
    
    </>
    
    
  )
}
export default Name