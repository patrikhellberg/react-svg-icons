import * as _icons from '@bm-js/icons'

const IconResults = () => {
  const { default: SVG, ...icons } = _icons
  const iconKeys = Object.keys(icons).filter(
    (k) => k !== 'default'
  ) as unknown as (keyof typeof icons)[]

  return (
    <div>
      {iconKeys.map((key) => (
        <SVG key={`icon_${key}`} icon={icons[key] as any} />
      ))}
    </div>
  )
}

export default IconResults
