import {useState} from 'react'
import KeyboardForm from './KeyboardForm/KeyboardForm'

export default function KeyboardSwitcher() {

  const [housing, setHousing] = useState("https://i.imgur.com/Ow9hmn2.png")
  const [general, setGeneral] = useState("https://i.imgur.com/q6WuPAF.png")
  const [highlight, setHighlight] = useState("https://i.imgur.com/KUT4Q9t.png")
  const [action, setAction] = useState("https://i.imgur.com/syiJdOA.png")


  return (
    <>
      <div className='keyboard-image-div'>

        <img id="action-caps" className="keyboard" src={action} alt="Action Caps"/>
        <img id="housing" className="keyboard" src={housing} alt="Mech Housing"/>
        <img id="generalCaps" className="keyboard" src={general} alt="Action Caps"/>
        <img id="highlightCaps" className="keyboard" src={highlight} alt="Mech Housing"/>
      
      </div>
        <KeyboardForm 
        setHousing={setHousing}
        setGeneral={setGeneral} 
        setHighlight={setHighlight}
        setAction={setAction}
        />
    </>
  )
}
