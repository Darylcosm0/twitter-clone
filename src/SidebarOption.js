import React from 'react'
import  './SidebarOption.css'

function SidebarOption({text, Icon}) {
  return (
    <div className='sidebarOption'>
        <Icon/>
        <h1>{text}</h1>

    </div>
  )
}

export default SidebarOption;