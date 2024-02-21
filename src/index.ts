import * as icons from './icons'
import SVG from './SVG'

export * from './types'
export * from './icons'
export default SVG
export const iconKeys = Object.keys(icons)
export type IconKey = keyof typeof icons
