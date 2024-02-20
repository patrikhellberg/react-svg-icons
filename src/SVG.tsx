import React, { useMemo } from 'react'
import type { SVGData } from './types'
import { v4 as uuid } from 'uuid'

type Props = {
  icon: SVGData
}

const SVG = ({ icon }: Props) => {
  const { iconName, paths, ...svgProps } = icon

  const keys = useMemo(() => {
    return paths.map(() => uuid())
  }, [paths])
  return (
    <svg {...svgProps}>
      {paths.map((path, i) => (
        <path {...path} key={keys[i]} />
      ))}
    </svg>
  )
}

export default SVG
