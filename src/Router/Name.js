import React from 'react'
import KeyboardImage from "../KeyboardImage"
import NameYourBoard from "../NameYourBoard"

function Name({ housing, general, highlight, action, lastId}) {
  return (
    <>
    {/* <KeyboardImage 
      housing={housing} 
      action={action} 
      general={general} 
      highlight={highlight} */}
    {/* /> */}
    <NameYourBoard 
    lastId={lastId}/>
    </>
    
  )
}
export default Name