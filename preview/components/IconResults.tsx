'use client'

import { iconKeys } from '@hellberg/react-svg-icons'
import IconCard from './IconCard'
import { useContext, useMemo } from 'react'
import { AppContext } from './Context'

const IconResults = () => {
  const {
    state: { q },
  } = useContext(AppContext)

  const filteredIconKeys = useMemo(() => {
    return iconKeys.filter((key) => {
      return key.toLowerCase().includes(q.toLowerCase())
    })
  }, [q])

  return (
    <div className='py-8 dark:text-slate-500'>
      <p className='mb-4'>
        Showing {filteredIconKeys.length} of {iconKeys.length} icons
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {filteredIconKeys.map((key) => (
          <IconCard iconKey={key} key={`iconcard_${key}`} />
        ))}
      </div>
    </div>
  )
}

export default IconResults
