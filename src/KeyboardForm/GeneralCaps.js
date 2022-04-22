import {useEffect, useState} from 'react'

export default function GeneralCaps({setGeneral}) {

  const [data, setData] = useState([])
  const [saveChange, setSaveChange] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/generalCaps")
    .then(r => r.json())
    .then(data => setData(data))
    },[])

  const handleChange = (e) => {
    setSaveChange(e.target.value);
  }
  
data.filter(oneData => {
  if (oneData.color === saveChange)  return setGeneral(oneData.image)
  })

 

 
 

  return (
    <div>
        <h5>Main</h5>
        <select className="dropDown" onChange={handleChange}>
        <option>Main Color</option>
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
