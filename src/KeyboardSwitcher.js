import {useState} from 'react'
import KeyboardForm from './KeyboardForm/KeyboardForm'
import KeyboardImage from './KeyboardImage'

export default function KeyboardSwitcher() {

  const [housing, setHousing] = useState("https://i.imgur.com/Ow9hmn2.png")
  const [general, setGeneral] = useState("https://i.imgur.com/q6WuPAF.png")
  const [highlight, setHighlight] = useState("https://i.imgur.com/KUT4Q9t.png")
  const [action, setAction] = useState("https://i.imgur.com/syiJdOA.png")


  
  function cb(e){
    e.preventDefault()
    
    const keyBoardCustomizer= {
      "name": "",
      "general": general,
      "Alternate": action,
      "Hightlight": highlight,
      "Case": housing
    }


    fetch("http://localhost:3000/saved", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(keyBoardCustomizer)
    })
  }
  return (
    <>
        <KeyboardImage 
        housing={housing} 
        general={general} 
        action={action} 
        highlight={highlight} />
      
        <KeyboardForm 
        setHousing={setHousing}
        setGeneral={setGeneral} 
        setHighlight={setHighlight}
        setAction={setAction}
        clickHandler={cb}
        />
    </>
  )
}
