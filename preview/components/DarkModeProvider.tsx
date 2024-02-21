'use client'

import { PropsWithChildren, useContext } from 'react'
import { AppContext } from './Context'

const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const {
    state: { darkMode },
  } = useContext(AppContext)

  return <div className={darkMode ? 'dark' : ''}>{children}</div>
}

export default DarkModeProvider
