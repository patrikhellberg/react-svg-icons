'use client'

import { useState } from 'react'

const SearchBar = () => {
  const [searchString, setSearchString] = useState('')

  return (
    <div className='bg-gray-400 p-4 rounded'>
      <input
        className='rounded text-base px-4 py-2 outline-none'
        placeholder='Search icon name'
        type='search'
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
