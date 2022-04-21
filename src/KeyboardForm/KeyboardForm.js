import React from 'react'
import GeneralCaps from './GeneralCaps'
import HighlightCaps from './HighlightCaps'
import ActionCaps from './ActionCaps'
import Housing from './Housing'

export default function KeyboardForm({setHousing, setGeneral, setHighlight, setAction, clickHandler}) {

  return (
    <div className='form'>
      <form>
        <h1>Build Your Board</h1>
        <GeneralCaps setGeneral={setGeneral}/>
        <div></div>
        <HighlightCaps setHighlight={setHighlight}/>
        <div></div>
        <ActionCaps setAction={setAction}/>
        <div></div>
        <Housing setHousing={setHousing}/>
        <div></div>

        <button className="button" onClick={clickHandler}>Share Your Build</button>
      </form>
    </div>
  )
}

