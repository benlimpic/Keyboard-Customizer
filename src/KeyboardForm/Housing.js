import React from 'react'

export default function Housing({setAction}) {
  return (
    <div>
        <h4>Housing</h4>
        <select className="dropDown" onChange={() => setAction}>
        <option>Select A Color</option>
            <option>EGYPTIAN BLUE</option>
            <option>VAMPIRE HUNTER</option>
            <option>TOY CAMOUFLAGE</option>
            <option>ICE CLIMBER</option>
            <option>YOSHI GREEN</option>
            <option>MILD MENTHOL</option>
            <option>RETRO NECTARINE</option>
            <option>DEATH OF A STAR</option>
            <option>MAXIMUM YELLOW</option>
            <option>DR. WHITE</option>
        </select>
    </div>
  )
}
