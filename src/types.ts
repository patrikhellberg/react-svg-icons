export type StrokeLineCap = 'butt' | 'round' | 'square' | 'inherit' | undefined
export type StrokeLineJoin = 'round' | 'inherit' | 'miter' | 'bevel' | undefined

export type Path = {
  d?: string
  strokeWidth?: string
  strokeLinecap?: StrokeLineCap
  strokeLinejoin?: StrokeLineJoin
}

export type SVGData = {
  iconName: string
  paths: Path[]
  width?: string
  height?: string
  viewBox?: string
  xmlns?: string
  fill?: string
}
