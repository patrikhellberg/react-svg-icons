import CopyCode from '@/components/CopyCode'
import PageLayout from '@/components/PageLayout'
import SVG, { IconKey, iconKeys } from '@bm-js/icons'
import * as icons from '@bm-js/icons'
import { Metadata } from 'next'

type Props = {
  params: {
    iconKey: IconKey
  }
}

export const generateMetadata = ({ params: { iconKey } }: Props): Metadata => {
  return {
    title: `${iconKey} | Icons | Bucket Media`,
  }
}

export const generateStaticParams = () => {
  return iconKeys
}

const IconPage = async ({ params: { iconKey } }: Props) => {
  const icon = icons[iconKey]
  const borderBottom = 'border-b border-solid border-gray-300'

  const iconData = (plainText?: boolean) => {
    const strings = ['<svg ']
    if (icon.fill) strings[0] += `fill="${icon.fill}" `
    if (icon.height) strings[0] += `height="${icon.height}" `
    if (icon.width) strings[0] += `width="${icon.width}" `
    if (icon.viewBox) strings[0] += `viewBox="${icon.viewBox}" `
    if (icon.xmlns) strings[0] += `xmlns="${icon.xmlns}"`

    icon.paths.forEach((path) => {
      let str = `<path `
      if (path.strokeLinecap) str += `stroke-linecap="${path.strokeLinecap}" `
      if (path.strokeLinejoin)
        str += `stroke-linejoin="${path.strokeLinejoin}" `
      if (path.strokeMiterlimit)
        str += `stroke-miterlimit="${path.strokeMiterlimit}" `
      if (path.d) str += `d="${path.d}"`
      str += '>'
      strings.push(str)
    })

    strings.push('</svg>')

    if (plainText) return strings.join('')
    return strings
  }

  return (
    <PageLayout>
      <div className='border border-solid border-gray-300 rounded'>
        <div className={`p-4 ${borderBottom}`}>
          <h1 className='text-xl font-semibold '>{icon.iconName}</h1>
        </div>
        <div className={`flex items-center justify-center p-8 ${borderBottom}`}>
          <SVG icon={icon} width={400} />
        </div>
        <div className='p-4'>
          <p className='font-medium mb-2'>SVG code</p>
          <code className='bg-gray-200 p-4 block mb-4 rounded'>
            {(iconData() as string[]).map((str, i) => (
              <span
                key={`str_${str}_${i}`}
                className={i !== 0 && i !== iconData().length - 1 ? 'pl-4' : ''}
              >
                {str} <br />
              </span>
            ))}
          </code>
          <CopyCode code={iconData(true) as string} />
        </div>
      </div>
    </PageLayout>
  )
}

export default IconPage
