import React from 'react'
import type { SVGData } from './types'

type Props = {
  icon: SVGData
}

const SVG = ({ icon }: Props) => {
  return <p>{icon.iconName}</p>
}

export default SVG
