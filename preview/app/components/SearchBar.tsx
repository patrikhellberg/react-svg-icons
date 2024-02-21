'use client'

import { ChangeEventHandler, useContext } from 'react'
import { AppContext } from './Context'

const SearchBar = () => {
  const {
    state: { q },
    dispatch,
  } = useContext(AppContext)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: 'SEARCH', data: e.target.value })
  }

  return (
    <div className='bg-gray-400 p-4 rounded'>
      <input
        className='rounded text-base px-4 py-2 outline-none'
        placeholder='Search icon name'
        type='search'
        value={q}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
