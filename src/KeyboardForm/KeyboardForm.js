import React from 'react'
import GeneralCaps from './GeneralCaps'
import HighlightCaps from './HighlightCaps'
import ActionCaps from './ActionCaps'
import Housing from './Housing'

export default function KeyboardForm() {
  return (
    <div className='form'>
      <h1>Build Your Board</h1>
      <GeneralCaps />
      <div></div>
      <HighlightCaps />
      <div></div>
      <ActionCaps />
      <div></div>
      <Housing/>
    </div>
  )
}
