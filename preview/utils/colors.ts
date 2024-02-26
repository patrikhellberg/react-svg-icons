type ColorLetter = 'r' | 'g' | 'b'

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const keys: ColorLetter[] = ['r', 'g', 'b']
  return keys.reduce((acc, key, i) => {
    acc[key] = result ? parseInt(result[i + 1], 16) : 255
    return acc
  }, {} as { [key in ColorLetter]: number })
}

const getAvgBrightness = (hex: string) => {
  const { r, g, b } = hexToRgb(hex)
  return (r + g + b) / 3
}

export const hasSufficientContrast = (hex1: string, hex2: string) => {
  const THRESHOLD = 50
  const [brightness1, brightness2] = [
    getAvgBrightness(hex1),
    getAvgBrightness(hex2),
  ]
  const diff = Math.abs(brightness1 - brightness2)
  return diff > THRESHOLD
}
