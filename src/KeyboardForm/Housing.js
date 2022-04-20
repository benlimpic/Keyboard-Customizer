import React from 'react'

function display(){
  console.log("shits working")
}

export default function Housing() {
  return (
    <div>
        <h4>Housing</h4>
        <select className="dropDown" onChange={display}>
            <option>Select A Color</option>
            <option>PALE TEAL</option>
            <option>MAUVEY NUDE</option>
            <option>DARKEST GRAPE</option>
            <option>DONKEY KONG</option>
            <option>ALPINE HERBS</option>
        </select>
    </div>
  )
}
