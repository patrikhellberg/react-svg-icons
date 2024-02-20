import fs from 'fs'
import path from 'path'
import type { Path, StrokeLineCap, StrokeLineJoin } from './types'
import { load } from 'cheerio'

const compile = () => {
  const iconsPath = path.resolve(__dirname, '..', 'svgSrc')
  const destinationPath = path.resolve(__dirname, '..', 'src', 'icons.ts')

  const icons = fs.readdirSync(iconsPath)

  const compiledIcons = icons.map((iconPathName) => {
    const iconPath = path.resolve(iconsPath, iconPathName)
    const iconName = iconPathName.replace('.svg', '')
    const iconString = fs.readFileSync(iconPath, { encoding: 'utf-8' })
    const $ = load(`<div>${iconString}</div>`)

    const paths: Path[] = []
    $('path').each((_, element) => {
      const d = $(element).attr('d')
      const strokeWidth = $(element).attr('stroke-width')
      const strokeMiterlimit = $(element).attr('stroke-miterlimit')
      const strokeLinecap = $(element).attr('stroke-linecap') as StrokeLineCap

      const strokeLinejoin = $(element).attr(
        'stroke-linejoin'
      ) as StrokeLineJoin

      const pathObject: Path = {}

      if (d) pathObject.d = d
      if (strokeWidth) pathObject.strokeWidth = strokeWidth
      if (strokeLinecap) pathObject.strokeLinecap = strokeLinecap
      if (strokeLinejoin) pathObject.strokeLinejoin = strokeLinejoin
      if (strokeMiterlimit) pathObject.strokeMiterlimit = strokeMiterlimit

      paths.push(pathObject)
    })

    const width = $('svg').attr('width')
    const height = $('svg').attr('height')
    const viewBox = $('svg').attr('viewBox')
    const xmlns = $('svg').attr('xmlns')

    return {
      iconName,
      paths,
      width,
      height,
      viewBox,
      xmlns,
      fill: 'none',
    }
  })

  let objectString = ``
  compiledIcons.forEach((icon) => {
    objectString += `export const ${icon.iconName} = ${JSON.stringify(icon)} \n`
  })

  fs.writeFileSync(destinationPath, objectString)
}

compile()
