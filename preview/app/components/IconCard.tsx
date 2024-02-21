import SVG, {
  IconKey,
  Download,
  ArrowSquareUpRight,
  LinkSimple,
} from '@bm-js/icons'
import * as icons from '@bm-js/icons'
import CopyLink from './CopyLink'

type Props = {
  iconKey: IconKey
}

const IconCard = ({ iconKey }: Props) => {
  const actionIconSize = 24

  const iconLink = `/svgSrc/${iconKey}.svg`

  return (
    <div className='border border-solid border-gray-400 rounded text-center'>
      <div className='border-b border-solid border-gray-400 flex justify-center items-center min-h-[100px] flex-col'>
        <SVG icon={icons[iconKey]} />
        <p className=''>{iconKey}</p>
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
            <SVG icon={Download} width={actionIconSize} />
          </a>
          <CopyLink link={iconLink} width={actionIconSize} />
          <a href={iconLink} target='_blank' rel='noreferrer' title='Open'>
            <SVG icon={ArrowSquareUpRight} width={actionIconSize} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default IconCard
