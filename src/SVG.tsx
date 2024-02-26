import React from 'react'
import type { SVGData } from './types'
import { v4 as uuid } from 'uuid'

type Props = {
  icon: SVGData
  stroke?: string
  className?: string
  pathClassName?: string
  width?: number
  onClick?: any
}

const SVG = ({
  icon,
  stroke = 'black',
  className,
  pathClassName,
  width,
  onClick,
}: Props) => {
  if (!icon) return null
  const { iconName, paths, ...svgProps } = icon

  return (
    <svg
      {...svgProps}
      onClick={onClick}
      width={width || svgProps.width}
      height={width || svgProps.height}
      className={className ? className : ''}
    >
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
