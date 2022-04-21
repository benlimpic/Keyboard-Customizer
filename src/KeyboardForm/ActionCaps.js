import {useEffect, useState} from 'react'

export default function ActionCaps({setAction}) {

  const [data, setData] = useState([])
  const [saveChange, setSaveChange] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/actionCaps")
    .then(r => r.json())
    .then(data => setData(data))
    },[])

  const handleChange = (e) => {
    setSaveChange(e.target.value);
  }
  
  data.filter(oneData => {
  if (oneData.color === saveChange) setAction(oneData.image)
  })

  return (
    <div>
        <h5>Highlight</h5>
        <select className="dropDown" onChange={handleChange}>
            <option>Highlight Color</option>
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


//  data => data.filter(oneData => {
//    if(oneData.color === event.target.value) {
//       setAction = oneData.image
//    }
//  })

// const [value, setValue]= useState(null)
// console.log({data})

// function getColor(fetchData){

//   fetchData.filter((e) => e.color === {data}) ? {data} : null
// if( fetchData.filter((e) => e.color === {data}) === {data})
// console.log({data})

// else
// console.log("failed")
// }
// onChange={(e) => setValue(e.target.value)}