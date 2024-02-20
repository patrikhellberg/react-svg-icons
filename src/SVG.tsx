import React from 'react'
import type { SVGData } from './types'

type Props = {
  icon: SVGData
}

const SVG = ({ icon }: Props) => {
  const { iconName, paths, ...svgProps } = icon
  const genKey = () => {
    return `${Math.random() * 1000}`
  }
  return (
    <svg {...svgProps}>
      <p>Hej</p>
      {paths.map((path) => (
        <path {...path} key={genKey()} />
      ))}
    </svg>
  )
}

export default SVG
