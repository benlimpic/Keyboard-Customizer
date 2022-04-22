import React from 'react'
// import KeyboardSwitcher from "../KeyboardSwitcher"
import KeyboardImage from "../KeyboardImage"
import KeyboardForm from '../KeyboardForm/KeyboardForm'

 function Home({ clickHandler, housing, action, highlight, general, setHousing, setAction, setHighlight, setGeneral }) {
  console.log("hello world")
  return (
    <>
    <div>
      <KeyboardImage 
      housing={housing}
      action={action}
      highlight={highlight}
      general={general}/>
      <KeyboardForm 
      setHousing={setHousing}
      setGeneral={setGeneral} 
      setHighlight={setHighlight}
      setAction={setAction}
      clickHandler={clickHandler}/>
    </div>
    </>
    
  )
}
export default Home