import {useState} from 'react'

export default function NameYourBoard() {
const [name, setName] = useState("")
const [getId, setGetId] = useState(0)
const handleName = (e) => {
  e.preventDefault()
  setName(e.target.value)
}

const handlePatch = (e) => {
  e.preventDefault()
  e.target.reset()

  fetch("http://localhost:3000/saved")
  .then(r => r.json())
  .then(setGetId)

  const arrayLength = getId.length

  console.log(arrayLength)

  fetch(`http://localhost:3000/saved/${arrayLength}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"name": name})
  })



}

  return (
      <>
        <h1>Name Your Board</h1>
        <h5>Name</h5>
        <form onSubmit={handlePatch}>
        <input className="input"  type="text" onChange={handleName}></input>
        <button id='Name-save' >Save</button>
        </form>
        
      </>
  )
}
