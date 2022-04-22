import {useState} from 'react'

export default function NameYourBoard({lastId}) {
const [name, setName] = useState("")

const handleName = (e) => {
  e.preventDefault()
  setName(e.target.value)
}

  const handlePatch = (e) => {
  e.preventDefault()
  e.target.reset()

  fetch(`http://localhost:3000/saved/${lastId.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"name": name})
  })
}

  return (
      <>
      <div className="nameForm">
      <h1>Name Your Board</h1>
        <h5>Name</h5>
        <form onSubmit={ handlePatch}>
        <input className="input"  type="text" onChange={handleName}></input>
        <button id='Name-save' >Save</button>
        </form>
      </div>
        
        
      </>
  )
}
