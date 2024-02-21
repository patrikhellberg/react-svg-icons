'use client'

import { useContext } from 'react'
import { AppContext } from './Context'
import Toggle, { E } from './Toggle'

const DarkModeToggle = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(AppContext)

  const handleChange = (e: E) => {
    dispatch({ type: 'DARK', data: e.target.checked })
  }

  return (
    <Toggle
      checked={darkMode}
      onChange={handleChange}
      id='darkMode'
      checkedLabel='Using dark mode'
      unCheckedLabel='Using light mode'
    />
  )
}

export default DarkModeToggle
