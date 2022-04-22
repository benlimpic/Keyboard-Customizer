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
    Name={singleBoard.name}
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
