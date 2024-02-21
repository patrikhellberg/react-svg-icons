import { iconKeys } from '@bm-js/icons'
import IconCard from './IconCard'
import { useContext, useMemo } from 'react'
import { AppContext } from './Context'

const IconResults = () => {
  const {
    state: { q },
  } = useContext(AppContext)

  const filteredIconKeys = useMemo(() => {
    return iconKeys.filter((key) => {
      return key.includes(q)
    })
  }, [q, iconKeys])

  return (
    <div className='my-8'>
      <p className='mb-4'>
        Visar {filteredIconKeys.length} av {iconKeys.length} resultat
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