import { useState, useEffect } from 'react'
import Board from './Board'
export default function HallOfBoards() {

const [data, setData] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/saved")
  .then(r => r.json())
  .then(setData)
},[])

  
  const boardComponent = data.map(singleBoard => {
    return <Board 
    Id={singleBoard.id}
    Alternate={singleBoard.Alternate} 
    Case={singleBoard.Case} 
    Highlight={singleBoard.Hightlight} 
    General={singleBoard.general} 
    />
  })
  
  return (
    <>
    <h1>Hall of Boards</h1>
    {boardComponent}
    </>
  )
}


{/* <div className='keyboard-image-div'>
            <img id="action-caps" className="keyboard" src={action} alt="Action Caps"/>
            <img id="housing" className="keyboard" src={housing} alt="Mech Housing"/>
            <img id="generalCaps" className="keyboard" src={general} alt="Action Caps"/>
            <img id="highlightCaps" className="keyboard" src={highlight} alt="Mech Housing"/>
        </div> */}