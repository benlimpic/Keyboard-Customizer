import React from 'react'
import KeyboardImage from "../KeyboardImage"
import KeyboardForm from '../KeyboardForm/KeyboardForm'

 function Home({ clickHandler, housing, action, highlight, general, setHousing, setAction, setHighlight, setGeneral }) {
  console.log("hello world")
  return (
    <>
      <div className="home">
        <div className="boardContainer">
          <KeyboardImage 
          housing={housing}
          action={action}
          highlight={highlight}
          general={general}/>
        </div>
        <div >
          <KeyboardForm 
          setHousing={setHousing}
          setGeneral={setGeneral} 
          setHighlight={setHighlight}
          setAction={setAction}
          clickHandler={clickHandler}/>
        </div>
      </div>
      
    </>
    
  )
}
export default Home