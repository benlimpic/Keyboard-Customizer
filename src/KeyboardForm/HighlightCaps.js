import {useEffect, useState} from 'react'

export default function HighlightCaps({setHighlight}) {

  const [data, setData] = useState([])
  const [saveChange, setSaveChange] = useState([])

  useEffect(()=> {
    fetch(" http://localhost:3000/highlightCaps")
    .then(r => r.json())
    .then(data => setData(data))
    },[])

  const handleChange = (e) => {
    setSaveChange(e.target.value);
  }
  
  data.filter(oneData => {
  if (oneData.color === saveChange) setHighlight(oneData.image)
  })

  return (
    
    <div>
        <h5>Alternate</h5>
        <select className="dropDown" onChange={handleChange}>
        <option>Alternate Color</option>
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
