import SVG, {
  IconKey,
  Download,
  ArrowSquareUpRight,
  DotsThreeCircle,
} from '@bm-js/icons'
import * as icons from '@bm-js/icons'
import CopyLink from './CopyLink'
import { useContext } from 'react'
import { AppContext } from './Context'
import Link from 'next/link'

type Props = {
  iconKey: IconKey
}

const IconCard = ({ iconKey }: Props) => {
  const {
    state: { color, size },
  } = useContext(AppContext)

  const actionIconSize = 24

  const iconLink = `/svgSrc/${iconKey}.svg`

  return (
    <div className='border border-solid border-gray-400 rounded text-center'>
      <div className='border-b border-solid border-gray-500 flex justify-center items-center pt-8 pb-2 flex-col'>
        <SVG icon={icons[iconKey]} stroke={color} width={size} />
        <p className='mt-4'>{iconKey}</p>
      </div>
      <div className='p-4'>
        <div className='flex justify-around'>
          <a
            href={iconLink}
            download={`${iconKey}.svg`}
            target='_blank'
            rel='noreferrer'
            title='Download'
          >
            <SVG
              icon={Download}
              width={actionIconSize}
              pathClassName='dark:stroke-slate-500'
            />
          </a>
          <CopyLink link={iconLink} width={actionIconSize} />
          <a href={iconLink} target='_blank' rel='noreferrer' title='Open'>
            <SVG
              icon={ArrowSquareUpRight}
              width={actionIconSize}
              pathClassName='dark:stroke-slate-500'
            />
          </a>
          <Link href={`/${iconKey}`} title='Details'>
            <SVG
              icon={DotsThreeCircle}
              width={actionIconSize}
              pathClassName='dark:stroke-slate-500'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default IconCard
