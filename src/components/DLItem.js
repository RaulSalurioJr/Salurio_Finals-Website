import React from 'react'

function DLItem({image, name, dl}) {
  return (
    <div className='dlItem'>
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1> {name} </h1>
        <p> {dl} </p>
    </div>
  )
}

export default DLItem