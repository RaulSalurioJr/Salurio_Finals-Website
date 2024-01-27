import React from 'react'
import { DLList } from '../helpers/DLList'
import DLItem from '../components/DLItem'
import '../styles/Download.css'

function Download() {
  return (
    <div className='dl'>
        <h1 className='dlTitle'>OUR GAMES</h1>
        <div className='dlList'>
            {DLList.map((menuItem, key) => {
                return <DLItem
                key = {key}
                image = {menuItem.image}
                name= {menuItem.name}
                dl = {menuItem.dl}
                />
            })}
        </div>
    </div>
  )
}

export default Download