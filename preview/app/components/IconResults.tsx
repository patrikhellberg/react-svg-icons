import { iconKeys } from '@bm-js/icons'
import IconCard from './IconCard'

const IconResults = () => {
  return (
    <div className='my-8'>
      <p className='mb-4'>Visar {iconKeys.length} resultat</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {iconKeys.map((key) => (
          <IconCard iconKey={key} key={`iconcard_${key}`} />
        ))}
      </div>
    </div>
  )
}

export default IconResults
