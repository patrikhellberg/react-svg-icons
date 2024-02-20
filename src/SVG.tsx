import React from 'react'
import type { SVGData } from './types'
import { v4 as uuid } from 'uuid'

type Props = {
  icon: SVGData
  stroke?: string
  className?: string
  pathClassName?: string
}

const SVG = ({ icon, stroke = 'black', className, pathClassName }: Props) => {
  const { iconName, paths, ...svgProps } = icon

  return (
    <svg {...svgProps} className={className ? className : ''}>
      {paths.map((path) => (
        <path
          {...path}
          key={uuid()}
          stroke={stroke}
          className={pathClassName ? pathClassName : ''}
        />
      ))}
    </svg>
  )
}

export default SVG
