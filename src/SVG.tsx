import React from 'react'
import type { SVGData } from './types'
import { v4 as uuid } from 'uuid'

type Props = {
  icon: SVGData
}

const SVG = ({ icon }: Props) => {
  const { iconName, paths, ...svgProps } = icon

  return (
    <svg {...svgProps}>
      {paths.map((path, i) => (
        <path {...path} key={uuid()} />
      ))}
    </svg>
  )
}

export default SVG
