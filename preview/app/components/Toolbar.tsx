'use client'

import { ChangeEventHandler, useContext } from 'react'
import { AppContext } from './Context'
import Input from './Input'

const Toolbar = () => {
  const {
    state: { q, color, size },
    dispatch,
  } = useContext(AppContext)

  const handleChangeQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'SEARCH', data: e.target.value })
  }

  const handleChangeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'COLOR', data: e.target.value })
  }

  const handleChangeSize: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = isNaN(Number(e.target.value)) ? 40 : Number(e.target.value)
    dispatch({ type: 'SIZE', data: val })
  }

  return (
    <div className='bg-gray-400 p-4 rounded flex gap-4 md:flex-row flex-col'>
      <Input
        label='Search icon name'
        id='q'
        placeholder='MyIconName'
        type='search'
        value={q}
        onChange={handleChangeQuery}
      />
      <Input
        label='Set icon color'
        id='color'
        type='color'
        value={color}
        onChange={handleChangeColor}
      />
      <Input
        label='Set icon size (px)'
        id='size'
        type='number'
        value={size}
        onChange={handleChangeSize}
      />
    </div>
  )
}

export default Toolbar
