import {useState, useEffect} from 'react'

export default function ActionCaps({setAction}) {

  useEffect(()=> {
    fetch("http://localhost:8000/actionCaps")
    .then(r => r.json())
    .then(console.log)
  },[])

 data => data.filter(oneData => {
   if(oneData.color === event.target.value) {
      setAction = oneData.image
   }
 })

const [value, setValue]= useState(null)
// console.log({data})

// function getColor(fetchData){

//   fetchData.filter((e) => e.color === {data}) ? {data} : null
// if( fetchData.filter((e) => e.color === {data}) === {data})
// console.log({data})

// else
// console.log("failed")
// }

  return (
    <div>
        <h4>ActionCaps</h4>
        <select className="dropDown" onChange={(e) => setValue(e.target.value)}>
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
