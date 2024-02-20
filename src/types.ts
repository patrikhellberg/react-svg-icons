export type Path = {
  d?: string
  strokeWidth?: string
  strokeLinecap?: string
  strokeLinejoin?: string
}

export type SVGData = {
  iconName: string
  paths: Path[]
  width?: string
  height?: string
  viewBox?: string
  xmlns?: string
}
