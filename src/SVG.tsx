import React from 'react'
import type { SVGData } from './types'

type Props = {
  icon: SVGData
}

const SVG = ({ icon }: Props) => {
  const { iconName, paths, ...svgProps } = icon
  return (
    <svg {...svgProps}>
      {paths.map((path) => (
        <path {...path} />
      ))}
    </svg>
  )
}

export default SVG
